const sqlConnection = require("../database");

exports.CreateUser = (data, callback) => {
  let values = Object.values(data);
  console.log(data);
  const sql = `INSERT INTO USER ( first_name,
        middle_name,
        last_name,
        address,
        city,
        state,
        pincode,
        bloodgroup,
        mobile_number) values (?,?,?,?,?,?,?,?,?)`;
  sqlConnection.executeQuery(sql, values, function (err, result) {
    callback(err, result);
  });
};





//Akshaya
// Lokesh
// Mahalakshmi
// 








// function PatientLoginCheck(data, callback) {
//   let values = Object.values(data);
//   const sql = "select * from patient where email=? and password=?";

//   sqlConnection.executeQuery(sql, values, function (err, result) {
//     callback(err, result);
//   });
// }
