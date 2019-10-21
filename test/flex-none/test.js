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
