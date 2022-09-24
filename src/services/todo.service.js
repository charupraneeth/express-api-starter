let todos = [{
    id: 1,
    status: 'done',
    content: 'Clean the car'
}]

const list = () => {
    return todos
}

const create = (payload) => {
    const todo = {
        id: todos[todos.length - 1]?.id + 1 || 1,
        ...payload
    }

    todos.push(todo)
    return todo
}

const update = (id, payload) => {
    _validateTodoId(id)
    const todo = { ...todos[todoIndex], ...payload }
    todos[todoIndex] = todo
    return todo
}

const remove = (id) => {
    _validateTodoId(id)
    const removedTodo = todos.find(todo => todo.id = id)
    todos = todos.filter(todo => todo.id != id)
    return removedTodo
}

const _validateTodoId = (id) => {
    if (todos.findIndex(todoItem => todoItem.id == id) === -1)
        throw new Error(`Todo with id : ${id} not found`)
}

module.exports = {
    list,
    create,
    update,
    remove
}