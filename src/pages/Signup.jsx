import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F7F2] px-4 py-12">
      <div className="w-full max-w-md">

        {/* Logo */}
        <NavLink to="/" className="flex items-center justify-center gap-2 text-2xl font-bold text-[#62826B] mb-8">
          <span className="text-3xl">🌿</span> Shunno Yoga
        </NavLink>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col gap-1 mb-8">
            <h1 className="text-2xl font-bold text-[#11141B]">Create an account</h1>
            <p className="text-sm text-gray-500">Join thousands on their wellness journey</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#11141B]">Full Name</label>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 focus-within:border-[#62826B] transition-colors">
                <FaUser size={15} className="text-gray-400 shrink-0" />
                <input
                  type="text" name="name" value={form.name} onChange={handleChange} required
                  placeholder="Your full name"
                  className="flex-1 text-sm outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#11141B]">Email</label>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 focus-within:border-[#62826B] transition-colors">
                <MdOutlineEmail size={18} className="text-gray-400 shrink-0" />
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  placeholder="your@email.com"
                  className="flex-1 text-sm outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#11141B]">Password</label>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 focus-within:border-[#62826B] transition-colors">
                <RiLockPasswordLine size={18} className="text-gray-400 shrink-0" />
                <input
                  type={showPass ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange} required
                  placeholder="Min. 8 characters"
                  className="flex-1 text-sm outline-none bg-transparent"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="text-gray-400 hover:text-[#62826B] transition-colors">
                  {showPass ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#11141B]">Confirm Password</label>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 focus-within:border-[#62826B] transition-colors">
                <RiLockPasswordLine size={18} className="text-gray-400 shrink-0" />
                <input
                  type={showPass ? 'text' : 'password'} name="confirm" value={form.confirm} onChange={handleChange} required
                  placeholder="Repeat password"
                  className="flex-1 text-sm outline-none bg-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#62826B] text-[#FFEFC5] font-medium hover:bg-[#11141B] transition-colors duration-300 mt-2"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <NavLink to="/auth/signin" className="text-[#62826B] font-medium hover:underline">
              Sign in
            </NavLink>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;
