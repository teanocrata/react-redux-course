import { schema } from 'normalizr';

// Define a task schema
const taskSchema = new schema.Entity('tasks', {}, { idAttribute: 'id' });

// Define a taskList schema
const taskListSchema = new schema.Array(taskSchema);

export default taskListSchema;
