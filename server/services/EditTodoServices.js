class EditTodoServices {
  constructor(models) {
    this.models = models;
  }
  async getTodo(id) {
    try {
      const todo = await this.models.todos.findById(id);
      return todo;
    } catch (error) {
      throw new Error("Error fetching todos item");
    }
  }
  async updateTodo(id, title) {
    try {
      const todo = await this.models.todos.findByIdAndUpdate(id, {
        title: title,
      });
      return todo;
    } catch (error) {
      throw new Error("Error updating todo");
    }
  }
}

module.exports = EditTodoServices;
