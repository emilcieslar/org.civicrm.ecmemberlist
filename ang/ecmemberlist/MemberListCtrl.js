(function(angular, $, _) {

    angular.module('ecmemberlist')

    .controller('MemberListCtrl', ['theMembers', '$filter', function(theMembers, $filter) {

        // Define members that will be displayed in the template
        this.members = theMembers;

        // Define default values for filtering join/end date
        this.filters = {
            join_date: 'yyyy-mm-dd',
            end_date: 'yyyy-mm-dd'
        }

        /**
         * Filters out membership items based on what data user provides (join/end date of membership)
         * @returns {boolean} whether or not the item should be filtered out
         */
        this.fromToFilter = function fromToFilter() {

            // Regex that makes sure filter only works for correct date format
            // In this case it's yyyy-mm-dd
            var regexDate = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;

            return function (item) {

                // By default, nothing is filtered out
                var join_date_filter = true,
                    end_date_filter = true;

                // If user specifies correct join_date, filter out those values that have
                // join_date bigger or equal to what user specified
                if(regexDate.test(this.filters.join_date)) {
                    join_date_filter = item.join_date >= this.filters.join_date;
                }

                // If user specifies correct end_date, filter out those values that have
                // end_date smaller or equal to what user specified
                if(regexDate.test(this.filters.end_date)) {
                    end_date_filter = item.end_date <= this.filters.end_date;
                }

                return join_date_filter && end_date_filter;

            }.bind(this);

        }.bind(this);

    }]);

})(angular, CRM.$, CRM._);
