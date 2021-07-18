const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './reports/cucumber-report.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '91'
        },
        device: 'Vikas Mac Book',
        platform: {
            name: 'Mac OS',
            version: '11.4'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Grid Singularity QA Assignment'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'TestCycle-1'},
            {label: 'Execution Start Time', value: 'July 18th 2021, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'July 18th 2021, 02:56 PM EST'}
        ]
    }
});
