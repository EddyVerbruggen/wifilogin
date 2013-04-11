"use strict";

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

function logout() {
  storeUser(null);
  setPassword(null);
}

function isLoggedIn() {
  return getUser() != null;
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

function storeUser(obj) {
  return localStorage.setItem("user", JSON.stringify(obj));
}

function getUser() {
  var usr = localStorage.getItem("user");
  if (usr == null || usr == 'undefined') {
    return null;
  } else {
    return JSON.parse(usr);
  }
}

function openWindow(pleaseTakeMeHere) {
  // window.open uses the PG InAppBrowser API (http://docs.phonegap.com/en/2.5.0/cordova_inappbrowser_inappbrowser.md.html)
  var ref = window.open(pleaseTakeMeHere, '_blank', 'location=no');
  // Programmatically closing the InAppBrowser clears its history.
  ref.addEventListener('exit', function() {
    ref.close();
  });
}

function showAlert(txt) {
  if (isMobile()) {
    navigator.notification.alert(txt, function(){}, "Melding");
  } else {
    alert(txt);
  }
}