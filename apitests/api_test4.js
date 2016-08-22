
/**
 * Created by daxes on 8/21/2016.
 */


var chakram = require('chakram');
expect = chakram.expect;

var url ="http://104.197.41.120/api/v1/lookup/countries";
var obj={"short_name": "Aland Islands"};

var obj1 = {
    "id": 300,
    "iso2": "WS",
    "short_name": "Delhi",
    "long_name": "India- new dehli",
    "iso3": "WSM",
    "numcode": "882",
    "un_member": "yes",
    "calling_code": "91",
    "cctld": ".ws",
    "lastmoddatetime": "2016-05-16T08:58:56.000Z",
    "lastmoduserid": 99999
}
var obj2 ={

    "id":3,
    "name":"USA",
    "description":"United States Dollar",
    "symbol":"$",
    "code":"USD",
    "lastmoddatetime":"2016-08-08T07:20:12.000Z",
    "lastmoduserid":99999
}


var urls=["http://104.197.41.120/api/v1/lookup/employee/salaryunits",
    "http://104.197.41.120/api/v1/lookup/countries",
    "http://104.154.27.150/api/v1/lookup/employee/designations",
    "http://104.154.27.150/api/v1/lookup/education",
    "http://104.154.27.150/api/v1/lookup/cities",
    "http://104.154.27.150/api/v1/lookup/employee/workstatus"];




//this is for get request
/*

console.log('this is test 3 for getting');
var Fn = require('./api_test3');
*/

//var s = new Fn(url,obj);
console.log('this is test 4 for posting');

describe('test 5 for ',function(){
    it('this is test for posting',function(){

        var post_res = chakram.post(urls[0],obj2);

        return post_res.then(function(data){

            var jsondata = data.body;
           console.log("this is poseted data"+JSON.stringify(jsondata));
            expect(data).to.have.status(201);
            expect(jsondata).to.contain({"short_name": "Delhi"});


        } );

return chakram.wait();
    });


});