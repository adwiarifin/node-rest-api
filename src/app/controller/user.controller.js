const userService = require("../service/user.service");

const getAllUsers = (req, res) => {
  // take input

  // transform if needed, combine body + headers together

  // calling service
  const response = userService.getAllUsers();

  // response to client
  res.send(response);
};

const getUserDetails = (req, res) => {
  console.log(req.params);
  const response = userService.getUserDetails(req.params.id);
  res.send(response);
};

const registerUser = (req, res) => {
  const models = req.body;

  const response = userService.registerUser(models);
  res.send(response);
};

module.exports = {
  getAllUsers,
  getUserDetails,
  registerUser,
};
