const use_express=require('express');
const router=use_express.Router();

router.get('/',(req,res)=>{    //landing guest page
    res.send("Welcome to the Guest Support Page page.")
});

router.get('/register',(req,res)=>{   //guest/register
    res.send("Thank you for registering for this site.")
});

router.get('/contact/:phone_number',(req,res)=>{ //accepts 1 parameter and sends a message.
    res.send(`Thank you. We will contact you shortly at ${req.params.phone_number} . `)
});




module.exports=router;

