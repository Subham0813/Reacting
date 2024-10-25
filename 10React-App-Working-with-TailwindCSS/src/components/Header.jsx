import { NavLink } from 'react-router-dom';
import PopModelPortal from './PopModelPortal';
import { useState } from 'react';

export default function Header() {
  const [isPopOpen, setIsPopOpen] = useState(false);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <header className="flex items-center justify-between px-4 py-4 md:px-8">
      <h1 className="text-4xl font-bold text-slate-600">Logo</h1>
      <ul className="flex gap-4 text-xl font-semibold">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-sky-600 underline' : ''
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-sky-600 underline' : ''
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-sky-600 underline' : ''
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button
            className="hover:text-cyan-500"
            onClick={() => setIsPopOpen(true)}
          >
            Sign In
          </button>
          <PopModelPortal

            isPopOpen={isPopOpen}
            setIsPopOpen={setIsPopOpen}
            header={
              <h2 className="mb-4 text-center text-xl font-semibold">
                Sign In
              </h2>
            }
            footer={
              <div className="mt-4 text-center text-sm text-gray-600">
                {`Don't have an account?`}{' '}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                  onClick={() => setIsPopOpen(false)}
                >
                  Sign up
                </a>
              </div>
            }
          >
            {/* Input Fields  */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full rounded border p-2 focus:outline-none focus:ring focus:ring-blue-500"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded border p-2 focus:outline-none focus:ring focus:ring-blue-500"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Buttons  */}
            <div className="flex justify-between">
              <button
                className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700 focus:outline-none"
                onClick={() => {
                  setIsPopOpen(false)
                  setUsername('')
                  setPassword('')
                  console.log(username, password)
                }}
              >
                Sign In
              </button>
              <button
                className="ml-2 w-full rounded bg-gray-300 p-2 text-gray-800 hover:bg-gray-400 focus:outline-none"
                onClick={() => setIsPopOpen(false)}
              >
                Login
              </button>
            </div>
          </PopModelPortal>
        </li>
      </ul>
    </header>
  );
}
