const express = require("express");
const router = express.Router();

const TodoControllers = require("../controllers/TodoControllers");

const controller = new TodoControllers();

/* GET home page. */
router.get("/", controller.getTodos);

router.post("/", controller.addTodo);

router.patch("/:id", controller.updateTodoStatus);

router.delete("/:id", controller.deleteTodo);

module.exports = router;
