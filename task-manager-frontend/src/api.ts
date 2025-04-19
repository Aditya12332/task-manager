import axios from "axios";
import { Task } from "./types/task";

const API = "http://localhost:5000/api/tasks";

export const fetchTasks = () => axios.get<Task[]>(API);
export const createTask = (task : Task) => axios.post<Task>(API, task);
export const updateTask = (task : Task) => axios.put<Task>(`${API}/${task._id}`, task);
export const deleteTask = (id : string) => axios.delete<Task>(`${API}/${id}`);