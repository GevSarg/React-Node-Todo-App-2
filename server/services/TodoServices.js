class TodoServices {
  constructor(models) {
    this.models = models;
  }
  async getTodos() {
    try {
      const todos = await this.models.todos.find();
      return todos;
    } catch (error) {
      throw new Error("Error fetching todos items");
    }
  }
  async addTodo(body) {
    try {
      body.isDone = false;
      const doc = await this.models.todos(body);
      const todo = await doc.save();
      return todo;
    } catch (error) {
      throw new Error("Error adding new todo");
    }
  }
  async updateTodoStatus(id, isDone) {
    try {
      const todo = await this.models.todos.findByIdAndUpdate(id, {
        isDone: isDone,
      });
      return todo;
    } catch (error) {
      throw new Error("Error updating todo status");
    }
  }
  async deleteTodo(id) {
    try {
      const delId = await this.models.todos.findByIdAndDelete(id);
      return delId;
    } catch (error) {
      throw new Error("Error deleting todo");
    }
  }
}

module.exports = TodoServices;
