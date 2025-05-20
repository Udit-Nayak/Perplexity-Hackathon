"use client";

import { useState } from "react";

const bloodGroupOptions = [
  { label: "Select Blood Group", value: "select" },
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
];

const genderOptions = [
  { label: "Select Gender", value: "select" },
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
  { label: "Prefer not to say", value: "not_specified" },
];

export default function ProfilePage() {
  const [form, setForm] = useState({
    bloodGroup: "select",
    dateOfBirth: "",
    gender: "select",
    weight: "",
    height: "",
    emergencyContact: "",
    emergencyContactPhone: "",
    address: "",
  });
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save logic here
    alert("Saved! " + JSON.stringify(form, null, 2));
  };
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Password change logic here
    if (passwords.new !== passwords.confirm) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password changed!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light-2 py-12">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-5xl">
        <h1 className="text-2xl font-bold mb-8 text-dark-700">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <label className="text-dark-700 font-medium flex flex-col gap-1">Blood Group
            <select
              name="bloodGroup"
              value={form.bloodGroup}
              onChange={handleChange}
              className="border border-dark-400 rounded px-3 py-2 bg-white"
              required
            >
              {bloodGroupOptions.map(opt => (
                <option key={opt.value} value={opt.value} disabled={opt.value === "select"}>{opt.label}</option>
              ))}
            </select>
          </label>
          <label className="text-dark-700 font-medium flex flex-col gap-1">Date of Birth
            <input
              type="date"
              name="dateOfBirth"
              className="border border-dark-400 rounded px-3 py-2"
              value={form.dateOfBirth}
              onChange={handleChange}
              required
            />
          </label>
          <label className="text-dark-700 font-medium flex flex-col gap-1">Gender
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="border border-dark-400 rounded px-3 py-2 bg-white"
              required
            >
              {genderOptions.map(opt => (
                <option key={opt.value} value={opt.value} disabled={opt.value === "select"}>{opt.label}</option>
              ))}
            </select>
          </label>
          <label className="text-dark-700 font-medium flex flex-col gap-1">Weight (kg)
            <input
              type="text"
              name="weight"
              className="border border-dark-400 rounded px-3 py-2"
              value={form.weight}
              onChange={handleChange}
              required
            />
          </label>
          <label className="text-dark-700 font-medium flex flex-col gap-1">Height (cm)
            <input
              type="text"
              name="height"
              className="border border-dark-400 rounded px-3 py-2"
              value={form.height}
              onChange={handleChange}
              required
            />
          </label>
          <label className="text-dark-700 font-medium flex flex-col gap-1">Emergency Contact Name
            <input
              type="text"
              name="emergencyContact"
              className="border border-dark-400 rounded px-3 py-2"
              value={form.emergencyContact}
              onChange={handleChange}
              required
            />
          </label>
          <label className="text-dark-700 font-medium flex flex-col gap-1">Emergency Contact Phone
            <input
              type="text"
              name="emergencyContactPhone"
              className="border border-dark-400 rounded px-3 py-2"
              value={form.emergencyContactPhone}
              onChange={handleChange}
              required
            />
          </label>
          <label className="text-dark-700 font-medium flex flex-col gap-1 md:col-span-2">Address
            <textarea
              name="address"
              className="border border-dark-400 rounded px-3 py-2 min-h-[80px]"
              value={form.address}
              onChange={handleChange}
              required
            />
          </label>
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="bg-green-500 text-white rounded px-8 py-2 hover:bg-green-600 transition">Save</button>
          </div>
        </form>
        {/* Change Password Section */}
        <div className="bg-dark-100 rounded-lg p-8 shadow-inner">
          <h2 className="text-xl font-semibold mb-4 text-dark-700">Change Password</h2>
          <form onSubmit={handlePasswordSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <label className="text-dark-700 font-medium flex flex-col gap-1">Current Password
              <input
                type="password"
                name="current"
                className="border border-dark-400 rounded px-3 py-2"
                value={passwords.current}
                onChange={handlePasswordChange}
                required
              />
            </label>
            <label className="text-dark-700 font-medium flex flex-col gap-1">New Password
              <input
                type="password"
                name="new"
                className="border border-dark-400 rounded px-3 py-2"
                value={passwords.new}
                onChange={handlePasswordChange}
                required
              />
            </label>
            <label className="text-dark-700 font-medium flex flex-col gap-1">Confirm New Password
              <input
                type="password"
                name="confirm"
                className="border border-dark-400 rounded px-3 py-2"
                value={passwords.confirm}
                onChange={handlePasswordChange}
                required
              />
            </label>
            <div className="md:col-span-3 flex justify-end">
              <button type="submit" className="bg-green-500 text-white rounded px-8 py-2 hover:bg-green-600 transition">Change Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 