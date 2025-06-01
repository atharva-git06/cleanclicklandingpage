const express = require('express');
const router = express.Router();
const passport = require('passport');
const authMiddleware = require('../middlewares/auth-middleware')
const authController = require('../controllers/auth-controller');

router.route("/").get(authController.home);
router.route("/register").post(authController.register);
router.route("/login").post(authController.login);
router.route("/user").get(authMiddleware, authController.user);


// Google OAuth login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// auth-router.js
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  async (req, res) => {
    try {
      const token = await req.user.generateToken();
      // Redirect to your React app, passing the token as a query param:
      return res.redirect(`http://localhost:3000/oauth-success?token=${token}`);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  }
);

  

module.exports = router;
