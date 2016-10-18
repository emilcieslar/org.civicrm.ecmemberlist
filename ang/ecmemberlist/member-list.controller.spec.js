describe('MemberListCtrl', function () {

    /** Define global vars that will be used in tests */
    var ctrl,
        theMembersMock,
        $filter;

    beforeEach( function () {

        // Set up our module
        module('ecmemberlist');

        // Inject and assign dependencies that we'll need for each test
        inject( function ($controller, _$filter_) {

            $filter = _$filter_;

            // Set up fake resolved data for the controller
            theMembersMock = [
                {
                    name: 'membership1',
                    join_date: '2015-05-01',
                    end_date: '2015-06-01'
                },
                {
                    name: 'membership2',
                    join_date: '2015-05-01',
                    end_date: '2015-05-20'
                },
                {
                    name: 'membership3',
                    join_date: '2015-05-01',
                    end_date: '2015-05-15'
                },
                {
                    name: 'membership4',
                    join_date: '2015-04-20',
                    end_date: '2015-05-14'
                }
            ];

            // Instantiate the controller
            ctrl = $controller('MemberListCtrl', {
                theMembers: theMembersMock
            });

        });

    });

    it('should preload members on init', function () {

        expect(ctrl.members).toEqual(theMembersMock);

    });

    it('should display only memberships between 2015-05-01 and 2015-05-20 included', function () {

        // Set up array that will contain only members that should remain in the filtered array
        var theMembersMockFiltered = [
            {
                name: 'membership2',
                join_date: '2015-05-01',
                end_date: '2015-05-20'
            },
            {
                name: 'membership3',
                join_date: '2015-05-01',
                end_date: '2015-05-15'
            }
        ];

        // Set up controller's filters
        ctrl.filters = {
            join_date: '2015-05-01',
            end_date: '2015-05-20'
        };

        expect( $filter('filter')( ctrl.members, ctrl.fromToFilter() ) ).toEqual(theMembersMockFiltered);

    })

});
