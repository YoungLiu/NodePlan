process.on('uncaughtException', function (err) {
    console.log('Error: %s', err.message);
});

function fn() {
    console.log("this is a test");
}

//setTimeout(function (fn) {
//    fn();
//});

function (fn){
	fn();
}
