const mysql=require("mysql");

const con=mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "",
    database: "usermanagement", 
})

// con.connect((err)=>{
//     if (err)
//     {
//         console.log(err)
//     } 
//     else 
//     {
//         console.log("Server connected successfully to the database") 
//     }
// })

module.exports=con;