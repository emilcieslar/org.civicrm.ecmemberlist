(function(angular, $, _) {

    angular.module('ecmemberlist')

    // Define route to display list of memberships
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/member-list', {
            controller: 'MemberListCtrl',
            controllerAs: 'MLCtrl',
            templateUrl: '~/ecmemberlist/member-list.html',

            // Resolve initial data before controller is initialized
            resolve: {

                // Get the memberships from MemberListInitialData factory
                theMembers: ['MemberListInitialDataService', function(MemberListInitialDataService) {

                    return MemberListInitialDataService.getMemberships();

                }]

            }
        });

    }]);

})(angular, CRM.$, CRM._);
