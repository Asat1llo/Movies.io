'use client';

import { User, Lock } from 'lucide-react';
import { useState } from 'react';

const  LoginCard=()=> {
 
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #dba8a8 0%, #2a4a7a 100%)',
      }}
    >
      <div className="relative w-80 rounded-2xl bg-white bg-opacity-20 backdrop-blur-md shadow-lg p-8 pt-16">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#0f2a4a] rounded-full w-20 h-20 flex items-center justify-center">
          <User className="text-white w-8 h-8" />
        </div>

        <form className="space-y-4" >
          {/* Email input */}
          <div className="flex">
            <div className="bg-[#0f2a4a] w-12 flex items-center justify-center rounded-l-md">
              <User className="text-white w-5 h-5" />
            </div>
            <input
              type="email"
              placeholder="Email ID"
              className="bg-[#3a587a] text-white placeholder-white placeholder-opacity-50 rounded-r-md w-full px-4 py-2 focus:outline-none"
              required
            />
          </div>

          {/* Password input */}
          <div className="flex">
            <div className="bg-[#0f2a4a] w-12 flex items-center justify-center rounded-l-md">
              <Lock className="text-white w-5 h-5" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="bg-[#3a587a] text-white placeholder-white placeholder-opacity-50 rounded-r-md w-full px-4 py-2 focus:outline-none"
              required
            />
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-xs text-white text-opacity-70">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-3 h-3 text-[#0f2a4a] bg-white border border-gray-300 rounded"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="italic hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-b from-[#a3b7d9] to-[#5a6f9e] text-white text-sm tracking-widest rounded-lg py-2 shadow-lg hover:brightness-110 transition"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginCard