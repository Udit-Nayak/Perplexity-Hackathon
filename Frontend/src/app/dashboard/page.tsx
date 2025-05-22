"use client";

import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  // Placeholder user data
  const userName = "John Doe";
  const userAge = 28;

  return (
    <div className="min-h-screen bg-light-2 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        <div className="flex items-center gap-6">
          <img src="/assets/icons/logo-full.svg" alt="logo" className="h-8 w-auto" />
          <span className="text-dark-700 text-base font-semibold">{userName}, {userAge}</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard/profile" className="text-dark-700 hover:text-green-500 transition">Profile</Link>
          <button className="text-dark-700 hover:text-green-500 transition">Logout</button>
        </div>
      </nav>

      {/* Dashboard Features */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-4xl px-4">
          {/* Feature 1: System Diagnosis */}
          <Link href="/dashboard/chatwithai" className="flex flex-col items-center justify-center rounded-xl bg-white shadow-lg p-10 cursor-pointer hover:shadow-2xl transition">
            <div className="w-16 h-16 bg-dark-400 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-white">1</span>
            </div>
            <span className="text-lg font-semibold text-dark-700 mt-2">System Diagnosis</span>
          </Link>
          {/* Feature 2: Lab Report */}
          <Link href="/dashboard/labreport" className="flex flex-col items-center justify-center rounded-xl bg-white shadow-lg p-10 cursor-pointer hover:shadow-2xl transition">
            <div className="w-16 h-16 bg-dark-400 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-white">2</span>
            </div>
            <span className="text-lg font-semibold text-dark-700 mt-2">Lab Report</span>
          </Link>
          {/* Feature 3: Medical History */}
          <Link href="/dashboard/medicalhistory" className="flex flex-col items-center justify-center rounded-xl bg-white shadow-lg p-10 cursor-pointer hover:shadow-2xl transition">
            <div className="w-16 h-16 bg-dark-400 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-white">3</span>
            </div>
            <span className="text-lg font-semibold text-dark-700 mt-2">Medical History</span>
          </Link>
          {/* Feature 4: Book an Appointment */}
          <Link href="/dashboard/bookappointment" className="flex flex-col items-center justify-center rounded-xl bg-white shadow-lg p-10 cursor-pointer hover:shadow-2xl transition">
            <div className="w-16 h-16 bg-dark-400 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-white">4</span>
            </div>
            <span className="text-lg font-semibold text-dark-700 mt-2">Book an Appointment</span>
          </Link>
        </div>
      </main>
      {/* Footer */}
      {/* Footer */}
<footer className="w-full bg-dark-400 text-white mt-auto">
  <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <h3 className="font-bold mb-3">Get to Know Us</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">About CarePluse</a></li>
        <li><a href="#" className="hover:underline">Careers</a></li>
        <li><a href="#" className="hover:underline">Press Releases</a></li>
        <li><a href="#" className="hover:underline">CarePluse Science</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-3">Connect with Us</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Facebook</a></li>
        <li><a href="#" className="hover:underline">Twitter</a></li>
        <li><a href="#" className="hover:underline">Instagram</a></li>
        <li><a href="#" className="hover:underline">LinkedIn</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-3">Make Money with Us</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Sell on CarePluse</a></li>
        <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
        <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
        <li><a href="#" className="hover:underline">Self-Publish</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-3">Let Us Help You</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Your Account</a></li>
        <li><a href="#" className="hover:underline">Returns Centre</a></li>
        <li><a href="#" className="hover:underline">100% Purchase Protection</a></li>
        <li><a href="#" className="hover:underline">Help</a></li>
      </ul>
    </div>
  </div>
  <div className="border-t border-dark-200 py-4 text-center text-xs text-dark-100 bg-dark-500">
    © 2024 CarePluse. All rights reserved. | Designed for healthcare excellence.
  </div>
</footer>
    </div>
  );
} 