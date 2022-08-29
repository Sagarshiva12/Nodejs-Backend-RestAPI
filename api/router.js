const router = require("express").Router();
const { checkadminToken,checkmanagerToken,Customerlogintoken,salesmanlogintoken,resetpasswordtoken} = require("../Auth/tokenvalidation");

const {emptycheck,Adminenter,Customerenter}=require("../middleware/verify")

const {Usersignup,adminlogin,createmanagerUser,createsalesmanUser,managerlogin,managercreatesalesmanUser,Customersignup,Customerlogin
    ,insertcustomerdata,manageradditionaldata,Salesmanlogin,salesmanadditionaldata,Adminsecret,managersecret,salesmansecret,Customersecret
,resetpassword,deleteoldpassword,createnewpassword}=require("./controller")

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

//with adminlogin jwt token manager can store his data in usersecret table
router.post("/user/managersecret",checkmanagerToken,managersecret)


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


//with  jwt token of customerlogin ,customer can store his data in usersecret table
router.post("/user/Customersecret",Customerlogintoken,Customersecret)


//salesman login if sales man user exist in usertable,then it will create a jwt token
router.post("/user/Salesmanlogin",Salesmanlogin)


//with jwt token of manager can store extra information in employee table
router.post("/user/Salesmanadditionaldata",salesmanlogintoken,salesmanadditionaldata)


//with  jwt token salesman login ,customer can store his data in usersecret table
router.post("/user/salesmansecret",salesmanlogintoken,salesmansecret)


//by going to this route i can check that userid is present or not,if present then it will create a jwt token
router.post("/user/createresetpasswordtoken",resetpassword)


//by jwt token of resetpassword ,i can update old password of perticular userid in usersecret table
router.put("/user/createnewpassword",resetpasswordtoken,createnewpassword)


module.exports=router;
