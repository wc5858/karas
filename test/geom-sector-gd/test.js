var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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')
      .end();
  }
};
