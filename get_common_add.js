/**
 * Created by daxes on 8/25/2016.
 */
/**
 * Created by daxes on 8/25/2016.
 */
var chakram = require('chakram');
var randomstring = require('randomstring');
expect = chakram.expect;


var url = "http://api.qa.talentscreen.io/v1/common/addresses";

var testobj ={
    "id": 18770,
    "address1": "201 s 4th street, the colonnade",
    "address2": null,
    "cityid": 2504,
    "region": "california",
    "countryid": 236,
    "lastmoddatetime": "2016-07-21T12:06:59.000Z",
    "lastmoduserid": 99999

}


describe('post test',function(){

    it('lets post data and check it ',function(){


        var get_res = chakram.get(url,function(err,res){

            // var header= res.getAllResponseHeaders();
            //var content = header['Content-Type'];

            console.log((err)?"there is eeror in geting":"no error ");
            var response = res;
            var headers = res.headers;
            r
        });

        console.log((expect(get_res).to.have.status(200))?"status 200 okay":"something went wrong ::"+get_res.error.message);
        console.log((expect(get_res).to.have.header("Access-Control-Allow-Methods"))?"is has access control header JSON.stringify(headers)= undefined":" no header found");
        console.log((expect(get_res).to.have.header("Content-Type, application/json; charset=utf-8"))?"has content type":" no header found");




        return get_res.then(function(data){

            var jsondata = data.body;

            console.log((jsondata!=null)?"json data achived "+JSON.stringify(jsondata).toString():"no data found");
            console.log((expect(data).to.have.status(200))?"\n\n\nstatus ok 200":"\n\n\nsome error occured :: "+data.error.message);

            console.log((expect(data).to.comprise.of.json({"region": "california"}))?" comprise method works":"no data found");

            console.log((expect(jsondata).to.contain({"region": "california"}))?"the region has california":"region is not california");
            console.log("all test is cleared");


        });


        return chakram.wait();
    }) ;



});
