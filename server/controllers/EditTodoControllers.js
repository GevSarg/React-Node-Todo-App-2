class EditTodoControllers {
  async getTodo(req, res) {
    try {
      const { id } = req.params;
      const todo = await req.app.locals.services.edit.getTodo(id);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async updateTodo(req, res) {
    try {
      const { id } = req.params;
      const { title } = req.body;
      const todo = await req.app.locals.services.edit.updateTodo(id, title);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = EditTodoControllers;
