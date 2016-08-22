/**
 * Created by daxes on 8/19/2016.
 */

function Pubsub(){

    var succ=[];
    var fails =[];


    this.then(fn)
    {
        succ.push(fn);
        return this;

    }

    this.error(func)
    {
        fails.push(func);
        return this;

    }

    var resolve= function(response,body)
    {
        for(var i in suuc)
        {
            succ[i](request,body);
        }

    }

    var fail = function(err)
    {
        for(var j in fails)
        {
            fails[j](err);
        }

    }

    this.request(url,function(err,response,body){

        if(err)
        {
            fail(err);
        }
        else{

            resolve(response,body);
        }


    });

    return this;
}

module.exports = new Pubsub();