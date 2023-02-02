const vaccineModel = require("../models/vaccine.model");
exports.CreateVaccinationCertificate = (req, res) => {
  const data = req.body;
  console.log("from create CreateVaccinationCertificate Controller \n", data);
  vaccineModel.CreateVaccinationCertificate(data, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ err });
    }
    return res.status(200).send({ result });
  });
};

exports.getVaccineDetailsByName = (req, res) => {
  const data = req.body;
  console.log("from create getVaccineDetailsByName Controller \n", data);
  vaccineModel.GetVaccinationCertificateByName(data, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ err });
    }
    return res.status(200).send({ result });
  });
};

exports.getVaccineDetailsByCity = (req, res) => {
  const data = req.body;
  console.log("from create getVaccineDetailsByCity Controller \n", data);
  vaccineModel.GetVaccineDetailsByCity(data, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ err });
    }
    return res.status(200).send({ result });
  });
};

exports.getVaccineDetailsByCity = (req, res) => {
  const data = req.body;
  console.log(
    "from create GetVaccinationCertificateByState Controller \n",
    data
  );
  vaccineModel.GetVaccinationCertificateByState(data, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ err });
    }
    return res.status(200).send({ result });
  });
};
