import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AddTask from "./components/AddTask";
import UpdateTask from "./components/UpdateTask";
import { useState } from "react";
export default function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/updatetask/:taskId"
          element={<UpdateTask tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/addtask"
          element={<AddTask tasks={tasks} setTasks={setTasks} />}
        />
      </Routes>
    </Router>
  );
}
