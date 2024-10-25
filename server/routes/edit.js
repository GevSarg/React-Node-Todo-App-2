const express = require("express");
const router = express.Router();

const EditTodoControllers = require("../controllers/EditTodoControllers");

const controller = new EditTodoControllers();

/* GET home page. */
router.get("/:id", controller.getTodo);

router.patch("/:id", controller.updateTodo);

module.exports = router;
