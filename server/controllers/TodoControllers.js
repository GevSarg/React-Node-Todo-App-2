class TodoControllers {
  async getTodos(req, res) {
    try {
      const todos = await req.app.locals.services.todos.getTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async addTodo(req, res) {
    try {
      const todo = await req.app.locals.services.todos.addTodo(req.body);
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async updateTodoStatus(req, res) {
    try {
      const { id } = req.params;
      const { isDone } = req.body;
      await req.app.locals.services.todos.updateTodoStatus(id, isDone);
      res.status(200).json("Update");
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async deleteTodo(req, res) {
    try {
      const { id } = req.params;
      await req.app.locals.services.todos.deleteTodo(id);
      res.status(201).json({ msg: "Deleted" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = TodoControllers;
