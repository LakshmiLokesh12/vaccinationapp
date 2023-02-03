const express = require("express");
const userController = require("../controllers/user.controller");
const vaccineController = require("../controllers/vaccine.controller");

const Router = express.Router();

Router.post("/signup", userController.CreateUser);
//Router.age = "20";
Router.post("/vaccination", vaccineController.CreateVaccinationCertificate);

// Vaccination

//
Router.post(
  "/get-vaccine-details-by-name",
  vaccineController.getVaccineDetailsByName
);

module.exports = Router;
