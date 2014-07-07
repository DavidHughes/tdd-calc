var fs = require('fs');
var vm = require('vm');

var assert = require('assert');
var sandbox = {
  'Utils': {}
};

describe('Utils.calculator', function() {
  var Utils;
  beforeEach(function(done) {
    var calculatorScriptCode = fs.readFileSync('scripts/src/modules/calculator.js');
    var calculatorScript = vm.createScript(calculatorScriptCode);

    calculatorScript.runInNewContext(sandbox);
    Utils = sandbox.Utils;
    done();
  });

  it('can add two numbers', function() {
    // assert
    assert.equal(2, Utils.calculator.add(1, 1));

    // expect
    // expect(Utils.calculator.add(1, 1)).to.be(2);
  });

  it('can find the difference between two numbers', function() {
    assert.equal(2, Utils.calculator.subtract(3, 1));
  });
});
