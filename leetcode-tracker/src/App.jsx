import { useState, useEffect } from "react";

export default function App() {
  const totalDays = 75;

  const [progress, setProgress] = useState({});
  const [messages, setMessages] = useState({});

  const sarcasmMessages = {
    done: [
      "🎉 Oh wow, you actually did it?",
      "👏 Miracles do happen.",
      "🏆 Hero of the day.",
      "😏 Look at you go.",
    ],
    notDone: [
      "🙄 Skipped again? Big surprise.",
      "💤 Procrastinator mode: ON.",
      "😬 Tomorrow, right? Sure...",
      "📉 This stock is tanking.",
    ],
  };

  // Load saved state once on mount
  useEffect(() => {
    try {
      const savedProgress =
        JSON.parse(localStorage.getItem("leetcodeProgress")) || {};
      const savedMessages =
        JSON.parse(localStorage.getItem("leetcodeMessages")) || {};
      setProgress(savedProgress);
      setMessages(savedMessages);
    } catch {
      // If parsing fails, just start fresh
      setProgress({});
      setMessages({});
    }
  }, []);

  // Save to localStorage any time progress or messages change
  useEffect(() => {
    localStorage.setItem("leetcodeProgress", JSON.stringify(progress));
    localStorage.setItem("leetcodeMessages", JSON.stringify(messages));
  }, [progress, messages]);

  const toggleDay = (day) => {
    const isDone = !progress[day];
    const newProgress = { ...progress, [day]: isDone };

    const newMsg = isDone
      ? sarcasmMessages.done[
          Math.floor(Math.random() * sarcasmMessages.done.length)
        ]
      : sarcasmMessages.notDone[
          Math.floor(Math.random() * sarcasmMessages.notDone.length)
        ];

    setProgress(newProgress);
    setMessages({ ...messages, [day]: newMsg });
  };

  const completedCount = Object.values(progress).filter(Boolean).length;
  const percentage = ((completedCount / totalDays) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        🏆 75 Days LeetCode Challenge (Sarcastic Edition)
      </h1>

      {/* Progress bar */}
      <div className="w-full max-w-lg bg-white p-4 rounded shadow mb-6">
        <div className="w-full bg-gray-300 rounded-full h-4 mb-2">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-center text-gray-700 font-medium">
          {completedCount}/{totalDays} Days Completed ({percentage}%)
        </p>
      </div>

      {/* Table-like layout */}
      <div className="w-full max-w-3xl">
        {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className="grid grid-cols-3 gap-4 bg-white p-3 shadow rounded mb-2 items-center"
          >
            {/* Column 1 - Checkbox with Day */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={progress[day] || false}
                onChange={() => toggleDay(day)}
                className="w-5 h-5 mr-3 accent-green-500"
              />
              <span className="text-gray-800 font-medium">Day {day}</span>
            </div>

            {/* Column 2 - Dummy text */}
            <div className="text-gray-600 text-sm">
              Dummy text {Math.ceil(Math.random() * 3)}
            </div>

            {/* Column 3 - Blank until clicked */}
            <div
              className={`text-sm ${
                progress[day] ? "text-green-600" : "text-red-600"
              }`}
            >
              {messages[day] || ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
