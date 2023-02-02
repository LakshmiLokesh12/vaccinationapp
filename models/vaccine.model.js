const sqlConnection = require("../database");

exports.CreateVaccinationCertificate = (data, callback) => {
  let values = Object.values(data);
  console.log(data);
  values.push(new Date());
  console.log(values);

  const sql = `INSERT INTO vaccination_certificate (
    id,
    first_name,
    city,
    vaccine_number,
    blood_group,
    age,
    vaccinate_date) values (?,?,?,?,?,?,?)`;
  sqlConnection.executeQuery(sql, values, function (err, result) {
    callback(err, result);
  });
};

exports.GetVaccinationCertificateByName = (data, callback) => {
  let values = Object.values(data);

  console.log(data);

  console.log(values);

  const sql = `SELECT * FROM vaccination_certificate WHERE FIRST_NAME = ?`;
  sqlConnection.executeQuery(sql, values, function (err, result) {
    callback(err, result);
  });
};

exports.GetVaccinationCertificateByCity = (data, callback) => {
  let values = Object.values(data);

  console.log(data);

  console.log(values);

  const sql = `SELECT * FROM vaccination_certificate WHERE CITY = ?`;
  sqlConnection.executeQuery(sql, values, function (err, result) {
    callback(err, result);
  });
};

exports.GetVaccinationCertificateByblood_group = (data, callback) => {
  let values = Object.values(data);

  console.log(data);

  console.log(values);

  const sql = `SELECT * FROM vaccination_certificate WHERE blood_group = ?`;
  sqlConnection.executeQuery(sql, values, function (err, result) {
    callback(err, result);
  });
};

exports.GetVaccinationCertificateByState = (data, callback) => {
  let values = Object.values(data);

  console.log(data);

  console.log(values);

  const sql = `SELECT * FROM vaccination_certificate WHERE state = ?`;
  sqlConnection.executeQuery(sql, values, function (err, result) {
    callback(err, result);
  });
};

// function PatientLoginCheck(data, callback) {
//   let values = Object.values(data);
//   const sql = "select * from patient where email=? and password=?";

//   sqlConnection.executeQuery(sql, values, function (err, result) {
//     callback(err, result);
//   });
// }
