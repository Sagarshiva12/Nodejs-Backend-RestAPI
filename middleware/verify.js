const con=require("../config/database")



module.exports= {
    Adminenter: (req,res,next)=>{
        if((req.body.User_type) ===  "Admin" )
        {
            return next();
        }
        if((req.body.User_type) !=  "Admin" )
        {
            return res.send("not allowed")
        }
    },
    Customerenter: (req,res,next)=>{
        if((req.body.User_type) ===  "Customer" )
        {
            return next();
        }
        if((req.body.User_type) !=  "Customer" )
        {
            return res.send("not allowed")
        }
    },
    emptycheck: (req,res,next)=>{
        if((!req.body.User_ID))
        {
            return res.send("All field should be required!")
        }
        else{
            return next()
        }
      
   }
}
   


// Admin/Manager/Salesman/Customer
 

