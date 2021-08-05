var gui = require("nw.gui");
var win = gui.Window.get();
var tray;
var express = require('express');
var app = express();
const path = require('path'); var __dirname = path.resolve();
var session = require('express-session');
var bodyParser = require('body-parser');
var io = require('socket.io')(8081);
var fs = require('fs');
app.use('/', express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);

  $(".closeWindow").click(function() {
    win.close();
  });

    $(".resizeWindow").click(function() {
    win.hide();
	tray = new gui.Tray({ title: 'Tray', icon: 'icon/akai_64.png', tooltip: 'UI' });
	        tray.on('click', function() {
				win.show();
				this.remove();
				tray = null;
      });
  });
	  
    $(".miniWindow").click(function() {
   win.minimize();
  });
  

  
  


