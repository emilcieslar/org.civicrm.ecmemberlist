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


