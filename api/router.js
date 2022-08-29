const router = require("express").Router();
const { checkadminToken,checkmanagerToken,Customerlogintoken } = require("../Auth/tokenvalidation");

const {emptycheck,Adminenter,Customerenter}=require("../middleware/verify")

const {Usersignup,adminlogin,createmanagerUser,createsalesmanUser,managerlogin,managercreatesalesmanUser,Customersignup,Customerlogin
    ,insertcustomerdata,manageradditionaldata}=require("./controller")


// user signup as a admin 
router.post("/user",emptycheck,Adminenter,Usersignup)


//admin login and created a jwt token
router.post("/user/adminlogin",adminlogin)


//with jwt token of admin,admin can create manager user
router.post("/user/createmanageruser",checkadminToken,createmanagerUser)


//with jwt token of admin ,admin can create sales man user
router.post("/user/createsalesmanUser",checkadminToken,createsalesmanUser)


//admin after creating manager user , manager will login get a jwt token
router.post("/user/managerlogin",managerlogin)


//with jwt token of manager login ,manager can create sales man user
router.post("/user/managercreatesalesmanUser",checkmanagerToken,managercreatesalesmanUser)



//with jwt token of manager can store extra information in employee table
router.post("/user/manageradditionaldata",checkmanagerToken,manageradditionaldata)


// user signup as a customer ,check all field is filled or not and user is customer type or not 
router.post("/user/customersignup",emptycheck,Customerenter,Customersignup)


//Customer will login after signup ,will get a jwt token
router.post("/user/Customerlogin",Customerlogin)


//with jwt token of customerlogin,customer can store extra data in cudtomer table
router.post("/user/insertcustomerdata",Customerlogintoken,insertcustomerdata)

module.exports=router;