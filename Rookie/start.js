var express = require("express");
var bodyparser = require("body-parser");
var cookieparser = require("cookie-parser");
var path = require('path');

var app = express();
app.use(bodyparser.json());
app.use(cookieparser());
app.use('/',express.static(path.join(__dirname) + "/public"));

app.get("/search", function(req, res) {
	res.header("X-XSS-Protection",0); // Default value of 1 stops inline scripts from running in modern browsers
	res.format({html: function(){
	    res.send(
	    	"<body style='display: flex; justify-content: space-around; align-items: center;'>" +
	    	"<div style='width: 60%; margin: 0 auto; background: yellow; text-align: center; padding:25px;'> No Search Results found for: " +
	    	req.query.search +
	    	"</div></body>");
	}});
})

app.get("*", function(req, res) {
	res.send("Hello World!!!");
});
app.listen(4040);