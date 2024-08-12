import Todo from "../model/Todo.js"

export const addTodo =async (request, responce)=>{
    try {
        const newTodo = await Todo.create({
            data:request.body.data,
            createdAt: Date.now()
        })
        console.log(newTodo)
    
        await newTodo.save()
    
        return responce.status(200).json(newTodo)
    } catch (error) {
        return responce.status(500).json(error,message)
    }

}