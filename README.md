# EC Member List

## CiviCRM extension for displaying memberships

This extension lists all memberships and allows user to filter members using start/end date of their membership.

## Working example

[http://civi.emmil.cz/civicrm/a/#/member-list](http://civi.emmil.cz/civicrm/a/#/member-list)

You can log in with the following credentials:
user: demo
pass: demo

## Notes

* Unlike [Weather Task](https://github.com/emilcieslar/compucorp-weather), this task doesn't use Webpack and ES6. It uses JavaScript in version ES5.1, which doesn't need any polyfills if we're using IE9 and up. The reason why I took this approach in this task is that I believe that main point in this task was to get familiar with CRM API and creating extentions.

* The task contains two tests. First, which tests whether controller contains required initial data that should be resolved in route and second tests the date filtering.

* The date filtering is very basic as it's not based on time, only on numbers. For example, if you have a date range between 2015-05-20 and 2015-06-20, it basically treats the dates as 20150520 and 20150620. Therefore any number (date) that is not within those numbers is filtered out.

* I have tried using built-in crm-ui-datepicker, however console throws error:
	```
	VM2161:1 Uncaught TypeError: Cannot read property 'element' of undefined_selectDate
		@ VM2161:1_selectDay
		@ jquery-ui.min.js?oekg72:8selectDay
		@ jquery-ui.min.js?oekg72:8dispatch
		@ jquery.js:4670r.handle
		@ jquery.js:4338
	```
	I have also tried looking for CiviCRM “relative date” field in [existing UI elements in docs](https://wiki.civicrm.org/confluence/display/CRMDOC/UI+Elements+Reference), however unsuccesfully.


