const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>  // landing page
{
    res.send('This is the index page')
});








module.exports=router;