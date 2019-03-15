const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
console.log("---");

jasmine.getEnv().clearReporters();               // remove default reporter logs
jasmine.getEnv().addReporter(new SpecReporter({  // add jasmine-spec-reporter
  spec: {
    displayPending: true
  }
}));