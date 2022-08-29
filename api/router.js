const router = require("express").Router();
const { checkadminToken,checkmanagerToken,Customerlogintoken,salesmanlogintoken } = require("../Auth/tokenvalidation");

const {emptycheck,Adminenter,Customerenter}=require("../middleware/verify")

const {Usersignup,adminlogin,createmanagerUser,createsalesmanUser,managerlogin,managercreatesalesmanUser,Customersignup,Customerlogin
    ,insertcustomerdata,manageradditionaldata,Salesmanlogin,salesmanadditionaldata,Adminsecret}=require("./controller")


// user signup as a admin 
router.post("/user",emptycheck,Adminenter,Usersignup)


//admin login and created a jwt token
router.post("/user/adminlogin",adminlogin)


//with adminlogin jwt token admin can store his data in usersecret table
router.post("/user/Adminsecret",checkadminToken,Adminsecret)


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


//with jwt token of customerlogin,customer can store extra data in customer table
router.post("/user/insertcustomerdata",Customerlogintoken,insertcustomerdata)


//salesman login if sales man user exist in usertable,then it will create a jwt token
router.post("/user/Salesmanlogin",Salesmanlogin)


//with jwt token of manager can store extra information in employee table
router.post("/user/Salesmanadditionaldata",salesmanlogintoken,salesmanadditionaldata)




module.exports=router;