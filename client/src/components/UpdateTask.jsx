import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateTask({ tasks, setTasks }) {
  const { taskId } = useParams(); // Assuming taskId is passed via URL params
  const taskToEdit = tasks.find((task) => task.id === taskId);
  const [title, setTitle] = useState(taskToEdit?.title || "");
  const [categories, setCategories] = useState(
    taskToEdit?.catagories || "Work"
  );
  const [date, setDate] = useState(taskToEdit?.date || "00:00");
  const [priority, setPriority] = useState(taskToEdit?.priority || "Low");
  const [description, setDescription] = useState(taskToEdit?.description || "");
  const [subtasks, setSubtasks] = useState(taskToEdit?.subtasks || []);
  const [subtaskInput, setSubtaskInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [tags, setTags] = useState(taskToEdit?.tags.join(" ") || "");
  const navigate = useNavigate();

  // Add a subtask to the list
  const handleAddSubtask = () => {
    if (subtaskInput.trim() !== "") {
      setSubtasks((prevSubtasks) => [...prevSubtasks, subtaskInput]);
      setSubtaskInput("");
    }
  };

  const handleEditSubtask = (index) => {
    setEditingIndex(index);
    setSubtaskInput(subtasks[index]);
  };

  const handleUpdateSubtask = () => {
    if (subtaskInput.trim() !== "") {
      const updatedSubtasks = [...subtasks];
      updatedSubtasks[editingIndex] = subtaskInput; // Update the specific subtask
      setSubtasks(updatedSubtasks);
      setSubtaskInput("");
      setEditingIndex(null);
    }
  };
  // Delete a subtask by index
  const handleDeleteSubtask = (index) => {
    const updatedSubtasks = subtasks.filter((_, i) => i !== index);
    setSubtasks(updatedSubtasks);
  };

  // Submit the updated task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !categories || !date || !priority || !description) return;

    const updatedTask = {
      id: taskId,
      title,
      catagories: categories,
      date,
      priority,
      description,
      subtasks, // Save the updated subtasks
      tags: tags.split(/\s+/),
    };

    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? updatedTask : task))
    );

    setTitle("");
    setCategories("Work");
    setDate("00:00");
    setPriority("Low");
    setDescription("");
    setTags("");
    setSubtasks([]);
    navigate("/");
  };

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setCategories(taskToEdit.catagories);
      setDate(taskToEdit.date);
      setPriority(taskToEdit.priority);
      setDescription(taskToEdit.description);
      setSubtasks(taskToEdit.subtasks);
      setTags(taskToEdit.tags.join(" "));
    }
  }, [taskToEdit]);

  return (
    <div className="mt-20">
      <div className="add-task-page max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-4">
          Update Task
        </h2>

        <form
          onSubmit={handleSubmit}
          id="task-form"
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
        >
          {/* Left Column */}
          <div className="form-group mb-2">
            <label
              htmlFor="task-title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Task Title
            </label>
            <input
              type="text"
              id="task-title"
              placeholder="Enter task title"
              required
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group mb-2">
            <label
              htmlFor="task-category"
              className="block text-gray-700 font-semibold mb-2"
            >
              Category
            </label>
            <select
              id="task-category"
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Shopping">Shopping</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group mb-2">
            <label
              htmlFor="task-due-date"
              className="block text-gray-700 font-semibold mb-2"
            >
              Due Date
            </label>
            <input
              type="date"
              id="task-due-date"
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group mb-2">
            <label
              htmlFor="task-priority"
              className="block text-gray-700 font-semibold mb-2"
            >
              Priority
            </label>
            <select
              id="task-priority"
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Right Column */}
          <div className="form-group mb-2">
            <label
              htmlFor="task-description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Task Description
            </label>
            <textarea
              id="task-description"
              placeholder="Enter task description"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group mb-2">
            <label
              htmlFor="task-subtasks"
              className="block text-gray-700 font-semibold mb-2"
            >
              Subtasks
            </label>
            <div
              id="subtasks-container"
              className="space-y-2 flex flex-col gap-1"
            >
              <input
                type="text"
                className="w-full p-1 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Add a subtask"
                value={subtaskInput}
                onChange={(e) => setSubtaskInput(e.target.value)}
              />
              <button
                type="button"
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={
                  editingIndex !== null ? handleUpdateSubtask : handleAddSubtask
                }
              >
                {editingIndex !== null ? "Update Subtask" : "Add Subtask"}
              </button>
            </div>
            <div className="border mt-3 rounded-md p-1">
              {subtasks.map((subtask, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="p-1">{subtask}</div>
                  <div className="flex gap-4 justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleEditSubtask(index);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDeleteSubtask(index);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group mb-2">
            <label
              htmlFor="task-tags"
              className="block text-gray-700 font-semibold mb-2"
            >
              Tags
            </label>
            <input
              type="text"
              id="task-tags"
              placeholder="Add tags (comma separated)"
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          {/* Centered Submit and Cancel Buttons */}
          <div className="col-span-2 flex justify-center gap-6 mt-6">
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update Task
            </button>
            <Link to={"/"}>
              <button
                type="button"
                id="close-add-task-page"
                className="w-full p-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
