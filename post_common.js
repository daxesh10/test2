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

//posting data now

var name = randomstring.generate(3);

describe('the post data',function(){

    it('posting in common address',function(){

        var postreq = chakram.post(url,{
            "id": 18768,
            "address1": "201 s, the colonnade",
            "address2": name,
            "cityid": 2504,
            "region": name,
            "countryid": 236,
            "lastmoddatetime": "2016-07-21T12:06:59.000Z",
            "lastmoduserid": 99999


        });
        console.log("##################  STAUS CODE CHECK ################") ;
        console.log((expect(postreq).to.have.status(201))?"staus code 201":"no status found");

        console.log("\n\n\n##################  Access-Control-Allow-Methods CHECK ################") ;
        console.log((expect(postreq).to.have.header('Access-Control-Allow-Methods'))?" has Access-Control-Allow-Methods":"dosent have Access-Control-Allow-Methods");


        return postreq.then(function(data){

            var postdata = data.body;

            console.log((postdata!=null)?"\n\n posted data is "+JSON.stringify(postdata):"no data posted");

            console.log("\n\n\n##################  contains {id:18003} CHECK ################") ;
            console.log((expect(postdata).to.contain({"id":18779}))?"posted data is correct id: 18003":" id doesnot match 18003");

        });






    });

    return chakram.wait();

});



console.log("\n\n\n################## the put test CHECK ################") ;

describe('test 2 to put',function(){

    it('put test common address',function(){

        var putreq = chakram.put(url,{
            "id": 18769,
            "address1": "1212 hidden ridge apt 2043",
            "address2": "daxesh",
            "cityid": 9672,
            "region": "texas",

        });

        console.log("\n\n\n################## the put test CHECK ################") ;

        console.log((putreq!=null)?"the put request is "+JSON.stringify(putreq).toString():"put request is null");
        console.log("##################  STAUS CODE CHECK ################") ;
        console.log((expect(putreq).to.have.status(200))?"\n\nhas status okay ":"\n\n error occured"+putreq.error.message);
        console.log("\n\n\n##################  Access-Control-Allow-Methods CHECK ################") ;
        console.log((expect(putreq).to.have.header('Access-Control-Allow-Methods'))?"Access-Control-Allow-Methods header is there":"no header found");

        console.log((expect(putreq).to.comprise.of.json({"address2": "daxesh"}))?"found addres as daxesh":"not vaild");



        return chakram.wait();
    }) ;

});
