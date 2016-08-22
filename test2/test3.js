var chakram = require('chakram');
 expect = chakram.expect;

var url1 ="http://104.197.41.120/api/v1/lookup/employee/salaryunits";


describe("test3 ",function(){

   it("get test",function(){

        var response = chakram.get(url1);
        var jsondata;
       if(expect(response).to.have.status(200)){

           console.log("satus code check for 2oo");
       }



     /*  if(expect(response).to.have.json(url1,function(url){

               expect(url).to.equal(url1);


           }))
       {
           console.log("test for url");
       }*/
//for testing contetn type , use the comma to sperate it and dont add {}

        if (expect(response).to.have.header('Content-Type','application/json; charset=utf-8'))
       {
           console.log(" check for content");
           console.log("response is : "+response);

       }

       return response.then(function(data){

               jsondata = data.body;

           if(jsondata == null){
               console.log("data not found");

           }
           else
           {
               console.log("########## data found ########### is :: "+jsondata.toString());
               console.log(data.body.toString());
                expect(jsondata[1]).to.contain({"name": "India"});


           }


       });

return chakram.wait();
    }) ;

});
