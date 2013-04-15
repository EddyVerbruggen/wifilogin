"use strict";

var childBrowserTimeout = 1100;

function openChildBrowser(pleaseTakeMeHere) {
  window.plugins.childBrowser.showWebPage(pleaseTakeMeHere, {showAddressBar: false, showLocationBar: false, showNavigationBar: false});
}

// generic catch for errors
window.onerror = function(message, file, line) {
  alert('Error gevangen: ' + file + ':' + line + '\n' + message);
  console.log('Error gevangen: ' + file + ':' + line + '\n' + message);
};

function isAndroid() {
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}

function isIOS() {
  return navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
}

function isMobile() {
  return isIOS() || isAndroid();
}

function setLoginName(loginName) {
  localStorage.setItem("loginName", loginName);
}

function getLoginName() {
  return localStorage.getItem("loginName");
}

function setPassword(password) {
  localStorage.setItem("password", password);
}

function getPassword() {
  return localStorage.getItem("password");
}

function showAlert(txt) {
  if (isMobile()) {
    navigator.notification.alert(txt, function(){}, "Melding");
  } else {
    alert(txt);
  }
}

function isWiFiConnection() {
  return navigator.connection === undefined ? true : Connection.WIFI == navigator.connection.type;
}