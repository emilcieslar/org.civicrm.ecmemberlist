module.exports = function(config) {

    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            '../../../bower_components/jquery/dist/jquery.min.js',
            '../../../bower_components/jquery-ui/jquery-ui.min.js',
            '../../../bower_components/lodash-compat/lodash.min.js',
            '../../../bower_components/select2/select2.min.js',
            '../../../packages/jquery/plugins/jquery.blockUI.js',
            '../../../bower_components/jquery-validation/dist/jquery.validate.min.js',
            '../../../packages/jquery/plugins/jquery.timeentry.js',
            '../../../js/Common.js',
            '../../../bower_components/angular/angular.min.js',
            '../../../bower_components/angular-mocks/angular-mocks.js',
            '../../../bower_components/angular-route/angular-route.js',
            '../../../ang/crmUi.js',
            '../../../ang/crmUtil.js',
            'ang/ecmemberlist.js',
            'ang/ecmemberlist/**/*.js'
        ],

        port: 8090,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['PhantomJS'],

        singleRun: false

    });

};
