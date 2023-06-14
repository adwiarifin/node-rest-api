const getAllUsers = () => {
  return ["agus", "budi", "cahya"];
};

const getUserDetails = (userId) => {
  console.log(userId);
  if (!userId) {
    return "";
  }
  return userId;
};

const registerUser = (userModel) => {
  // proses insert

  // return data yang sudah dimasukkan
  return {
    name: "agus",
    phone: "+62123",
  };
};

module.exports = {
  getAllUsers,
  getUserDetails,
  registerUser,
};
