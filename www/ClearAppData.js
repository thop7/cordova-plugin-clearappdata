var clearAppData = {
  call: function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ClearAppData', 'call', []);
  }
}

if (!window.plugins) { window.plugins = {}; }

window.plugins.clearAppData = clearAppData;
return window.plugins.clearAppData;
