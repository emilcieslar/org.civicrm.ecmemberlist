(function(angular, $, _) {

    angular.module('ecmemberlist')

    .factory('MemberListInitialData', ['crmApi', '$q', function(crmApi, $q) {

        return function() {

            // First of all, get all memberships from API
            return crmApi('Membership', 'get', {

                // Use sequential to return array, not key:value pairs
                "sequential": 1

            })

            // After all memberships are retrieved
            .then(

                function fulfilled(result) {

                    // Memberships array
                    var memberships = result.values,

                    // Defer promise
                    // We're gonna need that to fetch contact details for each membership
                    deferred = $q.defer(),
                    // Here will be promises with contact details for each membership
                    membershipPromises;

                    // For each membership, we have to get contact name
                    membershipPromises = memberships.map(function eachMembership(membership) {

                        // We have to enclose membership variable in IIFE to perserve it so we can
                        // use it in Contact promise afterwards
                        return (function(membership) {

                            // Get single contact information using membership.contact_id
                            return crmApi('Contact', 'getsingle', {
                                "id": membership.contact_id
                            }).then(

                                function fulfilled(contact) {

                                    // Add display name to membership object
                                    membership.display_name = contact.display_name;
                                    return membership;

                                }

                            );

                        })(membership);

                    });

                    // Return all membership objects now containing display_name property
                    return $q.all(membershipPromises);

                }

            );

        }

    }]);

})(angular, CRM.$, CRM._);
