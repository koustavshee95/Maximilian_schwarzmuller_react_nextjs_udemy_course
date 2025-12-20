import { useState } from "react";

export const NewTask = ({ onAdd }) => {
  const [enterTask, setEnterTask] = useState("");

  const handleChange = (event) => {
    setEnterTask(event.target.value);
  };
  const handleAddClick = () => {
    if (enterTask.trim() === "") {
      return;
    }
    onAdd(enterTask);
    setEnterTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        onChange={handleChange}
        value={enterTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleAddClick}
      >
        Add Task
      </button>
    </div>
  );
};
