const todoService = require('../services/todo.service')

/**
 * List all todos.
 * @function
 * @param {import('express').Request} req - Request Object
 * @param {import('express').Response} res - Response Object
 * @param {import('express').NextFunction} next - Next function
 * 
 */
const list = (req, res, next) => {
    try {
        return res.json(todoService.list())
    } catch (error) {
        next(error)
    }
}

/**
 * Create a todo.
 * @function
 * @param {import('express').Request} req - Request Object
 * @param {import('express').Response} res - Response Object
 * @param {import('express').NextFunction} next - Next function
 * 
 */
const create = (req, res, next) => {
    try {
        const { content } = req.body
        return res.status(201).json(todoService.create({ content, status: 'pending' }))
    } catch (error) {
        next(error)
    }
}

/**
 * Update a todo.
 * @function
 * @param {import('express').Request} req - Request Object
 * @param {import('express').Response} res - Response Object
 * @param {import('express').NextFunction} next - Next function
 * 
 */

const update = (req, res, next) => {
    try {
        const id = req.params.id
        const { content, status } = req.body
        const payload = {}
        if (content) payload.content = content
        if (status) payload.status = status

        console.log(id, payload);
        return res.json(todoService.update(id, payload))
    } catch (error) {
        next(error)
    }
}


/**
 * Delete a todo.
 * @function
 * @param {import('express').Request} req - Request Object
 * @param {import('express').Response} res - Response Object
 * @param {import('express').NextFunction} next - Next function
 * 
 */

const remove = (req, res, next) => {
    try {
        const id = req.params.id
        return res.json(todoService.remove(id))
    } catch (error) {
        next(error)
    }
}


module.exports = { list, create, update, remove }