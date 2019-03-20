const use_express=require('express');
const router=use_express.Router();  //user Router to pipeline everything
var payment_function=require('../payments');  //requires payment module

router.get('/',(req,res)=>{   //landing page when /member is entered
   res.send("Welcome to the Member's only page.")
});

router.get('/signin',(req,res)=>{    // member//signin
    res.send("Please sign-in your Member credentials.")
});

router.get('/contact/:phone_number/:member',(req,res)=>{  //accepts 2 parameters and sends message
    res.send(`Thank you ${req.params.member} . We will contact you shortly at ${req.params.phone_number} . `)
});


router.post('/chargebalance/:chargeme',(req,res)=>   // allows user to enter an amount charged and sends a post request
{ var sendThis=payment_function.getBalance(req.params.chargeme);
   res.send(sendThis)
});

router.post('/paybalance',(req,res)=>  // sends  post request that the user has a zero balance
{   var sendThis=payment_function.payBalance;
    res.send(sendThis)
});

module.exports=router;









