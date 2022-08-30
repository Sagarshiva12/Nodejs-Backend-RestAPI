const {Usersignup,getUserByUserID,createmanagerUser,createsalesmanUser,managercreatesalesmanUser
,Customersignup,insertcustomerdata,manageradditionaldata,salesmanadditionaldata,Adminsecret,managersecret,salesmansecret
,Customersecret,getUserByUserIDfromusersecret,deleteoldpassword,createnewpassword,createadminbrand,updateadminbrand,deleteadminbrand}=require("./service")

const { genSaltSync, hashSync,compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");
module.exports = {
Usersignup: (req, res) => {
    const data = req.body;
    Usersignup(data, (err, results) => {
      if (err)
       {
        console.log(err)
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
       }
       return res.status(200).json({
          success: 1,
          data: results
        });
    });
  },
  Customersignup: (req, res) => {
    const data = req.body;
    Customersignup(data, (err, results) => {
      if (err)
       {
        console.log(err)
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
       }
       return res.status(200).json({
          success: 1,
          data: results
        });
    });
  },
  createmanagerUser: (req, res) => {
    const data = req.body;
    createmanagerUser(data, (err, results) => {
      if (err)
       {
        console.log(err)
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
       }
       return res.status(200).json({
          success: 1,
          data: results
        });
    });
  },
  createsalesmanUser: (req, res) => {
    const data = req.body;
    createsalesmanUser(data, (err, results) => {
      if (err)
       {
        console.log(err)
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
       }
       return res.status(200).json({
          success: 1,
          data: results
        });
    });
  },
  managercreatesalesmanUser: (req, res) => {
    const data = req.body;
    managercreatesalesmanUser(data, (err, results) => {
      if (err)
       {
        console.log(err)
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
       }
       return res.status(200).json({
          success: 1,
          data: results
        });
    });
  },
  adminlogin: (req, res) => {
    const body = req.body;
    getUserByUserID(body.User_ID, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid UserID or Username"
        });
      }
      const result = compare(body.Username, results.Username);
      if (result) {
        const jsontoken = sign({ result: results }, "qwe1234", {
          expiresIn: "1h"
        });
        return res.json({
          success: 1,
          message: "Admin login successfully",
          token: jsontoken
        });
      } 
    });
  },
  managerlogin: (req, res) => {
    const body = req.body;
    getUserByUserID(body.User_ID, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid UserID or Username"
        });
      }
      const result = compare(body.Username, results.Username);
      if (result) {
        const jsontoken = sign({ result: results }, "sp31234", {
          expiresIn: "1h"
        });
        return res.json({
          success: 1,
          message: "Manager login successfully",
          token: jsontoken
        });
      } 
    });
  },
  Customerlogin: (req, res) => {
    const body = req.body;
    getUserByUserID(body.User_ID, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid UserID or Username"
        });
      }
      const result = compare(body.Username, results.Username);
      if (result) {
        const jsontoken = sign({ result: results }, "sp31235", {
          expiresIn: "1h"
        });
        return res.json({
          success: 1,
          message: "Customer login successfully",
          token: jsontoken
        });
      } 
    });
  },
  insertcustomerdata: (req, res) => {
    const data = req.body;
    insertcustomerdata(data, (err, results) => {
      if (err)
       {
        console.log(err)
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
       }
       return res.status(200).json({
          success: 1,
          data: results
        });
    });
  },
  manageradditionaldata: (req, res) => {
    const data = req.body;
    manageradditionaldata(data, (err, results) => {
      if (err)
       {
        console.log(err)
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
       }
       return res.status(200).json({
          success: 1,
          data: results
        });
    });
  },
  salesmanadditionaldata: (req, res) => {
    const data = req.body;
    salesmanadditionaldata(data, (err, results) => {
      if (err)
       {
        console.log(err)
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
       }
       return res.status(200).json({
          success: 1,
          data: results
        });
    });
  },
  Salesmanlogin: (req, res) => {
    const body = req.body;
    getUserByUserID(body.User_ID, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid UserID or Username"
        });
      }
      const result = compare(body.Username, results.Username);
      if (result) {
        const jsontoken = sign({ result: results }, "sp31236", {
          expiresIn: "1h"
        });
        return res.json({
          success: 1,
          message: "Salesman login successfully",
          token: jsontoken
        });
      } 
    });
  },
  Adminsecret: (req, res) => {
    const body = req.body;
    Adminsecret(body, (err, results) => {
      if (err)
       {
        console.log(err)
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
       }
       return res.status(200).json({
          success: 1,
          data: results
        });
    });
  },
  managersecret: (req, res) => {
    const body = req.body;
    managersecret(body, (err, results) => {
      if (err)
       {
        console.log(err)
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
       }
       return res.status(200).json({
          success: 1,
          data: results
        });
    });
  },
  salesmansecret: (req, res) => {
    const body = req.body;
    salesmansecret(body, (err, results) => {
      if (err)
       {
        console.log(err)
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
       }
       return res.status(200).json({
          success: 1,
          data: results
        });
    });
  },
  Customersecret: (req, res) => {
    const body = req.body;
    Customersecret(body, (err, results) => {
      if (err)
       {
        console.log(err)
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
       }
       return res.status(200).json({
          success: 1,
          data: results
        });
    });   
},
resetpassword: (req, res) => {
  const body = req.body;
  getUserByUserIDfromusersecret(body.User_ID, (err, results) => {
    if (err) {
      console.log(err);
    }
    if (!results) {
      return res.json({
        success: 0,
        data: "Invalid UserID or Username"
      });
    }
    const result = compare(body.User_ID, results.User_ID);
    if (result) {
      const jsontoken = sign({ result: results }, "sp31237", {
        expiresIn: "1h"
      });
      return res.json({
        success: 1,
        message: "password reset token created successfully",
        token: jsontoken
      });
    } 
  });
},
deleteoldpassword: (req, res) => {
  const User_ID = req.params.User_ID;
  deleteoldpassword(User_ID, (err, results) => {
    if (err)
     {
      console.log(err)
      return res.status(500).json({
        success: 0,
        message: "Database connection errror"
      });
     }
    //  return res.status(200).json({
    //     success: 1,
    //     message: "Old password deleted successfully"
    //   });
    next();
  });   
},
createnewpassword: (req, res) => {
  const body = req.body;
  createnewpassword(body, (err, results) => {
    if (err)
     {
      console.log(err)
      return res.status(500).json({
        success: 0,
        message: "Database connection errror"
      });
     }
     return res.status(200).json({
        success: 1,
        Message: "Password reset successfully"
      });
  });   
},
createadminbrand: (req, res) => {
  const body = req.body;
  createadminbrand(body, (err, results) => {
    if (err)
     {
      console.log(err)
      return res.status(500).json({
        success: 0,
        message: "Database connection errror"
      });
     }
     return res.status(200).json({
        success: 1,
        message: "Admin brand created successfully"
      });
  }); 
},
updateadminbrand: (req, res) => {
  const body = req.body;
  updateadminbrand(body, (err, results) => {
    if (err)
     {
      console.log(err);
      return false;
    }
    if(!results)
    {
      return res.json({
        success: 0,
        message: "Admin not found "
      })
    }

    return res.json({
      success: 1,
      message: "Admin brand updated successfully "
    })
  });
},
deleteadminbrand: (req, res) => {
  const id = req.params.id;
  deleteadminbrand(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "Record Not Found"
      });
    }
    return res.json({
      success: 1,
      message: "Admin brand deleted successfully"
    });
  });
}

}  