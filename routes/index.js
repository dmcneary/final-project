const router = require("express").Router();
const apiRoutes = require("./backendCalls");
const userRoutes = require('./user')

// API Routes
router.use("/user", userRoutes);
router.use("/api", apiRoutes);

module.exports = router;