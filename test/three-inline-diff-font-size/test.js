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
