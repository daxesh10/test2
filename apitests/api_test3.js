/**
 * Created by daxes on 8/19/2016.
 */

var chakram = require('chakram');
expect = chakram.expect;

var url1 = "http://104.197.41.120/api/v1/lookup/employee/salaryunits";
var obj1 = {"name": "India"};
var obj2 = {"short_name": "Aland Islands"};


var Fn = function (url, obj) {

    this.url = url;
    this.obj = obj;

    describe("test3 ", function () {

        it("get test", function () {

            var response = chakram.get(url);
            var jsondata;
            if (expect(response).to.have.status(200)) {

                console.log("satus code check for 2oo");
            }


            /*  if(expect(response).to.have.json(url1,function(url){

             expect(url).to.equal(url1);


             }))
             {
             console.log("test for url");
             }*/
//for testing contetn type , use the comma to sperate it and dont add {}

            if (expect(response).to.have.header('Content-Type', 'application/json; charset=utf-8')) {
                console.log(" check for content");
                console.log("response is : " + JSON.stringify(response));

            }

            return response.then(function (data) {

                jsondata = data.body;

                if (jsondata == null) {
                    console.log("data not found");

                }
                else {
                    console.log("################## data found ########### is :: " + JSON.stringify(jsondata).toString());
                    //  console.log(JSON.stringify( data.body).toString());
                    expect(jsondata[1]).to.contain(obj2);


                }


            });

            return chakram.wait();
        });

    });

}


var urls = ["http://104.197.41.120/api/v1/lookup/employee/salaryunits",
    "http://104.197.41.120/api/v1/lookup/countries",
    "http://104.154.27.150/api/v1/lookup/employee/designations",
    "http://104.154.27.150/api/v1/lookup/education",
    "http://104.154.27.150/api/v1/lookup/cities",
    "http://104.154.27.150/api/v1/lookup/employee/workstatus"];

var getting = new Fn(urls[1], obj2);

module.exports = getting;


var Fn2 = function (url) {

    this.url = urls[0];

    var del_resp = chakram.delete(url);
    expect(del_resp).to.status(200);
    //expect(del_resp).to.have.header('Acess-control-Allow-header');


    expect.del_resp.to.comprise.of.json({"message": "1 resource(s) delted"});

    return del_resp.then(function (data) {

        var deldata = data.body;
        expect(deldata).to.contain({"message": "1 resource(s) deleted"});


    });


}


var Fn1 = function (url, obj) {

    this.url = urls[0];
    this.obj = {
        "id": 5,
        "name": "India",
        "description": "Indian Rupee",
        "symbol": "?",
        "code": "INR",

    };

    var testobj = {
        "id": 5,
        "name": "India",
        "description": "Indain Rupee",
        "code": "INR"
    };

    console.log(url + "\n\n\n\t" + obj);


    describe('this tet to post', function () {

        it('posting in the url test', function () {


            var post_resp = chakram.post(url, object);
            return post_resp.then(function (data) {

                var post_data = data.body;

                if (!post_data == null) {
                    if (expect(data).to.have.stauts(201)) {
                        console.log("data psoted" + postdata);
                    }
                    expect(post_data).to.contain({"id": 5, "description": "Indian Rupee", "code": "INR"});


                }

            });


            return chakram.wait();
        });


    });


}


/*



 var chakram = require('chakram');
 expect = chakram.expect;

 var url1 ="http://104.197.41.120/api/v1/lookup/employee/salaryunits";

 describe("API testing using CHAKRAM", function () {
 it("Testing lookup education levels GET operation", function () {
 var response = chakram.get(url1);
 var jsonData;
 expect(response).to.have.status(200);
 expect(response).to.have.header('Access-Control-Allow-Headers');
 expect(response).not.to.have.header('Content-Lengths');

 return response.then(function (data) {
 jsonData = data.body;
 /!*       expect(jsonData[0].name).to.contain("Upper secondary education ve");
 expect(jsonData[5]).not.to.contain({name:"Upper seco"})*!/;
 expect(jsonData[1]).to.contain({"name": "India"});
 });

 return chakram.wait();
 });
 });*/
