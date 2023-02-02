const userModel = require("../models/user.model");
exports.CreateUser = (req, res) => {
  const data = req.body;
  console.log("from create User Controller \n", data);
  userModel.CreateUser(data, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ err });
    }
    return res.status(200).send({ result });
  });
};
