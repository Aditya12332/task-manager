const Task = require('../models/Task');

exports.getTasks = async (req , res) => {
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }
    catch(err){
        res.status(500).Task({ message: err.message });
    }
};

exports.createTask = async (req , res) => {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
};

exports.updateTask = async (req,res) => {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {  new: true});
    res.json(updateTask);
};

exports.deleteTask = async (req,res) => {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    res.json(deleteTask);
};