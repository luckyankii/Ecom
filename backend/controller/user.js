const express = require("express");
const path = require("path");
const { upload } = require("../multer");
const Errorhandler = require("../utils/ErrorHandler");
const User = require("../model/user");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/SendMail");
const catchAsyncError = require("../middlewares/catchAsyncError");
const sendToken = require("../utils/jwtToken");
const { isAuthenticated } = require("../middlewares/Auth");
/*-------------------------Here we have send Email to use For Sign in with jwt Token ---------------*/
/* -----------------Logic --------------------
   1.check is user is in data base 
   2.store profile pic using multer 
   3.Generate activation Token 
   4. Send jwt token for activation using Node mailer 
*/
router.post("/create-user", upload.single("file"), async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    console.log(email, password);
    const userEmail = await User.findOne({ email: email });
    if (userEmail) {
      // Before Returning we will delete the image we have uploaded here
      // As user exists means we have an image so do not need to post an image for an already signed-in user-[21]
      if (req.file) {
        const filename = req.file.filename;
        const filepath = `uploads/${filename}`;
        fs.unlink(filepath, (err) => {
          if (err) {
            console.error(err);
            res.status(404).json({ error: "Deleting file failed" });
          }
        });
      }
      return next(
        new Errorhandler("User already Exists from create-user Route", 400)
      );
    }

    if (!req.file) {
      // Handle the case where no file is uploaded
      return next(new Errorhandler("Please upload a file", 400));
    }

    const filename = req.file.filename;
    const fileurl = path.join(filename);
    const newuser = {
      name: name,
      email: email,
      password: password,
      avatar: fileurl,
    };
    console.log(newuser);
    const activationToken = createActivationToken(newuser);
    console.log(activationToken);
    const activationUrl = `http://localhost:3000/activation/${activationToken}`;
    try {
      await sendMail({
        email: newuser.email,
        subject: "Activate Your Account",
        message: `Hello ${newuser.name}, please click on the link to activate your account: ${activationUrl}`,
      });
      console.log("success");

      res.status(201).json({
        success: true,
        message: `Please check your email: ${newuser.email} to activate your account`,
      });
    } catch (e) {
      // const errorMessage = err.message + "This is from create-user Route";
      return next(new Errorhandler(e.message, 500));
    }
  } catch (error) {
    return next(new Errorhandler(error.message, 400));
  }
});

// create activation Token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET);
};

// activate User
/*-------------------------- Here we Create user Account After clicking on Email -----------------  
Logic -:>
 1.check is valid user 
 2.Check is this is registered before
 3.Create user and send Token

*/

router.post(
  "/activation",
  catchAsyncError(async (req, res, next) => {
    try {
      const { activation_token } = req.body;
      console.log(activation_token);
      const newuser = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newuser) {
        return next(
          new Errorhandler(
            "Invalid token... returned from activation route",
            400
          )
        );
      }
      const { name, email, password, avatar } = newuser;
      const existinguser = await User.findOne({ email });
      console.log(existinguser, email);
      if (existinguser !== null) {
        return next(
          new Errorhandler(
            "user Already exist This error id from activation route ",
            400
          )
        );
      }

      const createduser = await User.create({
        name: name,
        email: email,
        password: password,
        avatar: avatar,
      });
      sendToken(createduser, 201, res);
    } catch (err) {
      // const errorMessage = err.message + "This is from activation Route";
      return next(new Errorhandler(err.message, 500));
    }
  })
);

/*----------------------Login Functionality ---------------------------------------- */
router.post(
  "/login-user",
  catchAsyncError(async (req, res, next) => {
    try {
      console.log("here1 ");
      const { email, password } = req.body;
      if (!email || !password) {
        return next(
          new Errorhandler(
            "Please provide all fields err from login-user route",
            400
          )
        );
      }

      const user = await User.findOne({ email }).select("+password");
      console.log(user);
      if (!user) {
        return next(
          new Errorhandler(
            "Please provide correct info : from-> login-user route",
            400
          )
        );
      }
      console.log("here2 ");
      const ispasswordvalid = await user.comparePassword(password);
      if (!ispasswordvalid) {
        return next(
          new Errorhandler("User Does not exist from login-user route", 400)
        );
      }
      sendToken(user, 201, res);
    } catch (err) {
      const errorMessage = err.message + "This is from Login Route";
      return next(new Errorhandler(errorMessage, 500));
    }
  })
);

// Load user
router.get(
  "/getuser",
  isAuthenticated,
  catchAsyncError(async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user)
        return next(
          new Errorhandler(
            "Please provide correct info : from-> get-user route",
            400
          )
        );
      res.status(200).json({
        success: true,
        user,
      });
    } catch (err) {
      const errorMessage = err.message + "This is from getuser route";
      return next(new Errorhandler(errorMessage, 500));
    }
  })
);

module.exports = router;
