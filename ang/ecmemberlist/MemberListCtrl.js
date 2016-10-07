(function(angular, $, _) {

    angular.module('ecmemberlist')

    .config(function($routeProvider) {
        $routeProvider.when('/member-list', {
            controller: 'MemberListCtrl',
            controllerAs: 'MLCtrl',
            templateUrl: '~/ecmemberlist/MemberListCtrl.html',
            resolve: {

                theMembers: function(crmApi, $q) {

                    return crmApi('Membership', 'get', {

                        "sequential": 1

                    })

                    .then(

                        function fulfilled(result) {

                            // Memberships array
                            // TODO: remove splice, now we need just a limited number of members to make it faster
                            var memberships = result.values,
                            // Defer promise
                            deferred = $q.defer(),
                            membershipPromises,
                            modifiedMemberships = [];

                            // For each membership, we have to get contact name
                            membershipPromises = memberships.map(function eachMembership(membership, index) {

                                return (function(membership) {

                                    return crmApi('Contact', 'getsingle', {
                                        "id": membership.contact_id
                                    }).then(

                                        function fulfilled(contact) {

                                            membership.display_name = contact.display_name;
                                            return membership;

                                        }

                                    );

                                })(membership);

                            });

                            return $q.all(membershipPromises);

                        }

                    );
                }

            }
        });
    })

    .controller('MemberListCtrl', ['theMembers', '$filter', function(theMembers, $filter) {

        this.members = theMembers;

        this.filters = {
            join_date: 'yyyy-mm-dd',
            end_date: 'yyyy-mm-dd'
        }

        this.fromToFilter = function fromToFilter() {

            var regexDate = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;

            return function (item) {

                var join_date_filter = true,
                    end_date_filter = true;

                if(regexDate.test(this.filters.join_date)) {
                    join_date_filter = item.join_date >= this.filters.join_date;
                }

                if(regexDate.test(this.filters.end_date)) {
                    end_date_filter = item.end_date <= this.filters.end_date;
                }

                return join_date_filter && end_date_filter;

            }.bind(this);

        }.bind(this);

    }]);

})(angular, CRM.$, CRM._);
