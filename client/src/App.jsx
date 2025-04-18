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
  const [complete, setComplete] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              setTasks={setTasks}
              setComplete={setComplete}
              complete={complete}
            />
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/updatetask/:taskId"
          element={
            <UpdateTask title={"Update"} tasks={tasks} setTasks={setTasks} />
          }
        />
        <Route
          path="/addtask"
          element={
            <UpdateTask title={"Add"} tasks={tasks} setTasks={setTasks} />
          }
        />
      </Routes>
    </Router>
  );
}
