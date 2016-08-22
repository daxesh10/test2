/**
 * Created by daxes on 8/19/2016.
 */

var pubsub = require('./Pubsub');

var sucsses = function(response,body){

    console.log("############## the response begins here ##################"+response);
    console.log("############## the body begins here ##################"+body);

}

var failure = function(err)
{
    console.log("############# there is error "+err);
    //consoel.log("message:  "+err.message);
}

var url1 = "http://www.google.com";

Pubsub = pubsub.resquest(url1).then(sucsses).error(failure);