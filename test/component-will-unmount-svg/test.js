var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '0:<svg width="360" height="360"><defs></defs><g></g><g><g><g></g><g><g><text x="0" y="14.484375" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">222</text></g></g></g></g></svg>')
      .moveToElement('svg', 10, 10)
      .mouseButtonClick(0)
      .assert.value('input', '1:<svg width="360" height="360"><defs></defs><g></g><g><g><g></g><g><g><text x="0" y="14.484375" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">333</text></g></g></g></g></svg>')
      .end();
  }
};
