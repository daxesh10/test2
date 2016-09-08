/**
 * Created by daxes on 8/24/2016.
 */

/**
 * Created by daxes on 8/24/2016.
 */


var chakram = require('chakram');
expect = chakram.expect;


var get_test_obj= {

    "id": 18767,
    "address1": "mission area",
    "address2": null,
    "cityid": 10506,
    "region": "california",
    "countryid": 236,
    "lastmoddatetime": "2016-07-21T12:06:28.000Z",
    "lastmoduserid": 99999
};
var url = "http://api.qa.talentscreen.io/v1/common/addresses";
//this the for api http://api.qa.talentscreen.io/v1/common/addresses to get

describe('this is a test for api=  http://api.qa.talentscreen.io/v1/common/addresses',function(){

    it('this is test for get',function(){

        var get_response = chakram.get(url);
        expect(get_response).to.have.status(200);
        if(expect(get_response).to.have.header("Content-Type, application/json; charset=utf-8"))
        {
            console.log('the header is applicatio nand json');
        }
        else
        {
            console.log('the header is not as expeted');
        }



        return get_response.then(function(data){

            var get_data = data.body;

            if(get_data != null)
            {
                //console.log("####### the data retrived is "+JSON.stringify(get_data).toString());
                console.log((expect(data).to.have.status(200))?"the status 200 ":"not 200");
                console.log("test data "+get_data[1040].address1);

                console.log((expect(get_data[1040]).to.contain({"id": 18767,
                    "address1": "mission area"}))?"the test is paseed":"the area is mission area");
                console.log("\n\n\n\t\t####### all test cases clear ########");
            }



            if(expect(get_data).to.contain(get_test_obj)){

                console.log('it comprise of the json data'+ JSON.stringify(get_test_obj).toString());

            }

        });
///sysout///


        return chakram.wait();
    });




});