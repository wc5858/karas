var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 500)
      .assert.value('input', 'data:image/png;base64,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')
      .end();
  }
};
