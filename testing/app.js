/**
 * Created by daxes on 8/15/2016.
 */
/**
 * Created by daxes on 8/13/2016.
 */
var chakram = require('chakram');
var chai = require('chai');
var expect = chakram.expect;


describe('the basic test',function(){
    it('the basic url ', function(){

        var response = chakram.get("http://httpbin.org/get?test=chakram");
        expect(response).to.have.status(200);
        expect(response).to.have.header("content-type", "application/json");

        return response.then(function(data){
            var bdata = data.body;

            console.log(bdata);
            if(bdata!=null)
            {

                expect(response).to.comprise.of.json({
                    args: { test: "chakram" }
                });
            }

        });

        return chakram.wait();

    }) ;



});


//trying post requset

var posturl= "http://104.154.27.150/api/v1/lookup/education/levels";
describe('this is the test for post',function(){

    it('the test of posting begins here',function(){

        var post_req = chakram.post(posturl,{

            name: "dex",
            description: "A broad level of educational , some participation",
            lastmoddatetime: "2016-06-16T20:36:21.000Z",
            lastmoduserid: 33999

        });

        console.log('the chakram has posted and');
        console.log('this is how post req looks',post_req);

        return post_req.then(function(obj){

            var posted_data = obj.body;

            console.log('this the data posted on url',posted_data);

            expect(obj).to.have.status(201);
            expect(posted_data).to.contain({name: "dex"});


        });


        return chakram.wait();
    });


});

//delete
var delete_url ="http://104.154.27.150/api/v1/lookup/education/levels/3";
describe('this is 2nd test',function(){

    it('this is test for delete',function(){


        var delete_req = chakram.delete(delete_url);

        expect(delete_req).to.have.status(200);
        expect(delete_req).to.have.header('Acess allow heared');
        expect(delete_req).to.comprise.of.json({
            'message':'1 resourse delete'});

        return chakram.wait;
    });
});


//post url
var psot_url="http://104.154.27.150/api/v1/lookup/education/levels";

describe('this is thest 3',function(){

    it('test to post',function(){

        var post_req = chakram.post(psot_url,{

            name: "Less than primary education11123456789",
            description: "A broad level of educational attainment covering no participation in education, some participation",
            lastmoddatetime: "2016-06-16T20:36:21.000Z",
            lastmoduserid: 99999


        });//post_req

        return post_req.then(function(obj){

            expect(obj).to.have.status(201);

            var posteddata = obj.body;
            expect(posteddata).to.comprise.of.json({name:'Less than primary education11123456789'});
            expect(posteddata).to.contain({name:"Less than primary education11123456789"});


        });

        return chakram.wait;
    });//it


});//describe



var puturl="http://104.154.27.150/api/v1/lookup/education/levels/6";
describe('test 4 ',function(){

    it('this test to put',function(){

        var put_res =  chakram.put(puturl,{
            name : "Lmochaess than primary education11123456789"
        });

        expect(put_res).to.have.status(200);
        expect(put_res).to.comprise.of.json({
            name:"Less than primary education11123456789"
        });
        return chakram.wait();


    });//it

});//describe











//get request

var get_url="http://104.154.27.150/api/v1/lookup/education/levels";
describe('this is get test',function(){

    it('test fo getting json data',function(){

        var response = chakram.get(get_url);
        expect(response).to.have.status(200);
        expect(response).to.have.header("Content-Type :text/html; charset=utf-8");
        console.log('we got the reuest of get');
        console.log('this how resposne looks like');
        console.log(response);


        return response.then(function(data){



            var jsondata = data.body;

            if(jsondata==null)
            {
                cosnole.log("no data was obatined");

            }else{

                expect(jsondata[1]).to.contain({"lastmoduserid": 99999});

            }

            return chakram.wait();
        });



    });


});


