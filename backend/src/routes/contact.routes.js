const express = require("express");

const ContactController =
    require("../controllers/ContactController");

const router = express.Router();

const authMiddleware =
  require("../middlewares/auth.middleware");

router.post(
    "/contacts",
    ContactController.create
);

router.get(
    "/contacts",
    authMiddleware,
    ContactController.index
);

router.get(
    "/contacts/:id",
    authMiddleware,
    ContactController.show
);

router.put(
    "/contacts/:id",
    authMiddleware,
    ContactController.update
);

router.delete(
    "/contacts/:id",
    authMiddleware,
    ContactController.delete
);

module.exports = router;