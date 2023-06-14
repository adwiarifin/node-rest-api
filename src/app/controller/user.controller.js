const getAllUsers = (req, res) => {
  res.send("get /user");
};

const getUserDetails = (req, res) => {
  res.send("get /user/:id");
};

const registerUser = (req, res) => {
  res.send("post /user");
};

module.exports = {
  getAllUsers,
  getUserDetails,
  registerUser,
};
