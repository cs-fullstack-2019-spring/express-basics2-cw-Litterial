var run_express= require('express');
var my_app=run_express();
const index=require('./index'); //requires index module
var members=require('./routes/member'); //requires member module
var guests=require('./routes/guest'); //requires guess module

my_app.use('/',index); // sends user to index route
my_app.use('/member',members); //sends user to member route
my_app.use('/guest',guests); //sends user to guess route

my_app.listen(8000,()=> //test to see if server is running
{
    console.log('Server is running');
});