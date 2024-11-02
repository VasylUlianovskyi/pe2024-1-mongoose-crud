const mongoose = require('mongoose');

(async function () {
  try {
    // connection
    await mongoose.connect('mongodb://localhost:27017/chat');
    console.log('Connection to MongoDb Ok');

    // model
    const taskSchema = new mongoose.Schema({ body: String });
    const Task = mongoose.model('Task', taskSchema);

    // CRUD
    // C - INSERT - insertOne/Many - create (save) /insertMany
    const newTask = { body: 'Go for a walk' };
    // const createdTask = await Task.create(newTask);
    // console.log(createdTask);

    // R - SELECT - find - find...
    const foundTasks = await Task.find();
    // console.log(foundTasks);

    const foundTask = await Task.findById('672632e48c0adf7f585dc80e');
    // console.log(foundTask);

    const updateTask = await Task.findByIdAndUpdate(
      '672632e48c0adf7f585dc80e',
      { body: 'Watch TV Show' },
      { new: true }
    );

    // console.log(updateTask);

    const deletedTask = await Task.findByIdAndDelete(
      '6726331c57bc0edd29fb7eba'
    );

    console.log(deletedTask);
  } catch (error) {
    console.log('err :>> ', error);
  }
})();
