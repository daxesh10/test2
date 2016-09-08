/**
 * Created by daxes on 8/24/2016.
 */

/**
 * Created by daxes on 8/24/2016.

 testpost.js*/
var chakram = require('chakram');
var randomstring = require('randomstring');
expect = chakram.expect;

var name = randomstring.generate(2);
console.log(name);

var url ="http://api.qa.talentscreen.io/v1/lookup/countries";

var postobj={

    "id": 257,
    "iso2": name,
    "short_name": "argentina",
    "long_name": "Principality of atlanta",
    "iso3": "AND",
    "numcode": "20",
    "un_member": "yes",
    "calling_code": "376",
    "cctld": ".ad",
    "lastmoddatetime": "2016-05-16T08:58:56.000Z",
    "lastmoduserid": 99999
};

var testpostobj={ "numcode": "20",
    "long_name": "Principality of Andensa"
};


describe('test for post',function(){


    it('post test on http://api.qa.talentscreen.io/v1/lookup/countries ',function(){


        var post_res = chakram.post(url,postobj);
        console.log((expect(post_res).to.have.status(201))?"the data is enterd":"the data is not enter");


        return post_res.then(function(obj){

            //if(expect(data).to.have.status(2001))

            console.log((expect(obj).to.have.status(201))?"having sucsses ":"problme occured");
            var psot_data = obj.body

            console.log('test for posted data');
            console.log((psot_data!=null)?'data is '+ JSON.stringify(psot_data):"data is null");

            if(expect(psot_data).to.contain({"short_name": "argentina"}))
            {
                console.log('data posted is correct');
                console.log('it is posted as'+ JSON.stringify(psot_data));
            }


        });


        return chakram.wait();
    });
});

