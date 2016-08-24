/**
 * Created by daxes on 8/21/2016.
 */

/*
 var util = require('util');
 var process = require('process');

 process.stdin.resume();
 process.stdin.setEncoding('utf8');
 //var util = require('util');

 process.stdin.on('data', function (text) {
 console.log('received data:', util.inspect(text));
 if (text === 'quit\n') {
 done();
 }
 });

 function done() {
 console.log('Now that process.stdin is paused, there is nothing more to do.');
 process.exit();
 }
 */

var prompt = require('prompt');

prompt.start();

prompt.get(['username', 'email'], function (err, result) {
    if (err) {
        return onErr(err);
    }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
});

function onErr(err) {
    console.log(err);
    return 1;
}


/*
 process.stdin.resume();
 //process.stdin.SetEncoding('urf-8');

 process.stdin.on('url',function(url){

 console.log("the url entered as"+util.inspect(url));
 console.log("\n\n");

 process.stdin.on('object',function(obj){

 console.log('the object entered as \n\t'+util.inspect(obj));

 });

 if(url=="quit"){

 util.close();
 }
 });
 */
