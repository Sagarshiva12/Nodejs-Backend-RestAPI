const con=require("../config/database")

module.exports={
  Usersignup: (data, callBack) => {
        con.query(
          `insert into user (Username, User_type, User_ID) 
                    values(?,?,?)`,
          [
            data.Username,
            data.User_type,
            data.User_ID
          ],
          (error, results, fields) => {
            if (error)
            {
              return callBack(error);
            }
              return callBack(null, results);   
          }
        );
      },
      Customersignup: (data, callBack) => {
        con.query(
          `insert into user (Username, User_type, User_ID) 
                    values(?,?,?)`,
          [
            
            data.Username,
            data.User_type,
            data.User_ID
          ],
          (error, results, fields) => {
            if (error)
            {
              return callBack(error);
            }
              return callBack(null, results);   
          }
        );
      },
      createmanagerUser: (data, callBack) => {
        con.query(
          `insert into user (Username, User_type, User_ID) 
                    values(?,?,?)`,
          [
            
            data.Username,
            data.User_type,
            data.User_ID
          ],
          (error, results, fields) => {
            if (error)
            {
              return callBack(error);
            }
              return callBack(null, results);   
          }
        );
      },
      createsalesmanUser: (data, callBack) => {
        con.query(
          `insert into user (Username, User_type, User_ID) 
                    values(?,?,?)`,
          [
           
            data.Username,
            data.User_type,
            data.User_ID
          ],
          (error, results, fields) => {
            if (error)
            {
              return callBack(error);
            }
              return callBack(null, results);   
          }
        );
      },
      managercreatesalesmanUser: (data, callBack) => {
        con.query(
          `insert into user (Username, User_type, User_ID) 
                    values(?,?,?)`,
          [
            
            data.Username,
            data.User_type,
            data.User_ID
          ],
          (error, results, fields) => {
            if (error)
            {
              return callBack(error);
            }
              return callBack(null, results);   
          }
        );
      },
      getUserByUserID: (User_ID, callBack) => {
        con.query(
          `select * from User where User_ID = ?`,
          [User_ID],
          (error, results, fields) => {
            if (error) {
             return callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      insertcustomerdata: (data, callBack) => {
        con.query(
          `insert into Customer (Customer_name, Address, City,State,Zip) 
                    values(?,?,?,?,?)`,
          [
            
            data.Customer_name,
            data.Address,
            data.City,
            data.State,
            data.Zip

          ],
          (error, results, fields) => {
            if (error)
            {
              return callBack(error);
            }
              return callBack(null, results);   
          }
        );
      },
      manageradditionaldata: (data, callBack) => {
        con.query(
          `insert into employee (Name, Department, Designation,Salary) 
                    values(?,?,?,?)`,
          [
            
            data.Name,
            data.Department,
            data.Designation,
            data.Salary

          ],
          (error, results, fields) => {
            if (error)
            {
              return callBack(error);
            }
              return callBack(null, results);   
          }
        );
      },
      salesmanadditionaldata: (data, callBack) => {
        con.query(
          `insert into employee (Name, Department, Designation,Salary) 
                    values(?,?,?,?)`,
          [
            
            data.Name,
            data.Department,
            data.Designation,
            data.Salary

          ],
          (error, results, fields) => {
            if (error)
            {
              return callBack(error);
            }
              return callBack(null, results);   
          }
        );
      },
      Adminsecret: (data, callBack) => {
        con.query(
          `insert into User_Secret (User_ID, Password) 
                    values(?,?)`,
          [
            data.User_ID,
            data.Password
          ],
          (error, results, fields) => {
            if (error)
            {
              return callBack(error);
            }
              return callBack(null, results);   
          }
        );
      },
      managersecret: (data, callBack) => {
        con.query(
          `insert into User_Secret (User_id, Password) 
                    values(?,?)`,
          [
            data.User_id,
            data.Password
          ],
          (error, results, fields) => {
            if (error)
            {
              return callBack(error);
            }
              return callBack(null, results);   
          }
        );
      },
      salesmansecret: (data, callBack) => {
        con.query(
          `insert into User_Secret (User_id, Password) 
                    values(?,?)`,
          [
            data.User_id,
            data.Password
          ],
          (error, results, fields) => {
            if (error)
            {
              return callBack(error);
            }
              return callBack(null, results);   
          }
        );
      },
      Customersecret: (data, callBack) => {
        con.query(
          `insert into User_Secret (User_id, Password) 
                    values(?,?)`,
          [
            data.User_id,
            data.Password
          ],
          (error, results, fields) => {
            if (error)
            {
              return callBack(error);
            }
              return callBack(null, results);   
          }
        );
      }
      

}