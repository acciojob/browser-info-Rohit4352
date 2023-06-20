//your JS code here. If required.
var txt ;
txt = "You are using " + navigator.appName;
txt += " version " + navigator.appVersion;

document.getElementById("browser-info").innerHTML = txt;