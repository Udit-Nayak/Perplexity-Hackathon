"use client";

import { useRef, useState } from "react";

export default function ChatWithAIPage() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      if (data.status === 'success') {
        console.log('Message sent successfully');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setMessage("");
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="min-h-screen flex bg-light-2">
      {/* Left Sidebar for Chat History */}
      <aside className="w-64 bg-white shadow-lg flex flex-col p-6 gap-4 min-h-screen">
        <h2 className="text-lg font-bold text-dark-700 mb-4">Chat History</h2>
        <div className="flex-1 overflow-y-auto flex flex-col gap-2">
          {/* Placeholder chat history items */}
          {[1,2,3].map(i => (
            <div key={i} className="p-3 rounded-lg bg-dark-100 text-dark-700 cursor-pointer hover:bg-dark-200 transition">
              Chat Session {i}
            </div>
          ))}
        </div>
      </aside>
      {/* Main Chat Container */}
      <main className="flex-1 flex flex-col items-center justify-center p-10">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl min-h-[500px] flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center flex-1">
            <h1 className="text-2xl font-bold mb-4 text-dark-700">System Diagnosis (AI Chat)</h1>
            <p className="text-dark-600 text-center">AI chat integration will be added here soon.</p>
          </div>
          {/* Bottom Input Container */}
          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-dark-200 p-4 bg-white">
            <label className="flex items-center cursor-pointer">
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-100 hover:bg-dark-200 transition mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-dark-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m-3 3h13.5m-10.5 0v6.75A2.25 2.25 0 0010.5 21h3a2.25 2.25 0 002.25-2.25V12" />
                </svg>
              </span>
            </label>
            {file && <span className="text-xs text-dark-600 mr-2 truncate max-w-[120px]">{file.name}</span>}
            <input
              type="text"
              className="flex-1 border border-dark-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              required={!file}
            />
            <button
              type="submit"
              className="ml-2 bg-green-500 text-white rounded px-6 py-2 hover:bg-green-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
} 