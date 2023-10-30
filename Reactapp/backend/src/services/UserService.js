const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = newUser;

    try {
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser != null) {
        resolve({
          status: "ok",
          messaage: "the email is already",
        });
      }
      const hash = bcrypt.hashSync(password, 10);
      console.log("hash", hash);

      const createdUser = await User.create({
        name,
        email,
        password: hash,
        phone,
      });
      if (createdUser) {
        resolve({
          status: "ok",
          message: "success",
          data: createdUser,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
      const { name, email, password, confirmPassword, phone } = userLogin;
  
      try {
        const checkUser = await User.findOne({
          email: email,
        });
        if (checkUser === null) {
          resolve({
            status: "ok",
            messaage: "the user is not definded",
          });
        }
       
        // const createdUser = await User.create({
        //   name,
        //   email,
        //   password: hash,
        //   phone,
        // });
        if (createdUser) {
          resolve({
            status: "ok",
            message: "success",
            data: createdUser,
          });
        }
      } catch (e) {
        reject(e);
      }
    });
  };

module.exports = {
  createUser,
  loginUser
};
