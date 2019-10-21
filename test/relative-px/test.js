var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 500)
      .assert.value('input', 'data:image/png;base64,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KBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQICAgrYDBAgQKBVQ0KXBGIsAAQIK2g4QIECgVEBBlwZjLAIECChoO0CAAIFSAQVdGoyxCBAgoKDtAAECBEoFFHRpMMYiQIDA/wOOdqV4tpORKAAAAABJRU5ErkJggg==')
      .end();
  }
};
