var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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lEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBJ3wrtQAAAIESURBVLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBAjoCFVqIoAAAg4CBLQDIiUQQACBCAECOkKVmggggICDAAHtgEgJBBBAIEKAgI5QpSYCCCDgIEBAOyBSAgEEEIgQIKAjVKmJAAIIOAgQ0A6IlEAAAQQiBP4fVrrO/39vmF0AAAAASUVORK5CYII=')
      .end();
  }
};
