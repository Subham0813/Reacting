/* eslint-disable react/prop-types */
export default function PopModel({ isPopOpen, setIsPopOpen }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 ${isPopOpen ? '' : 'hidden'}`}
        onClick={() => setIsPopOpen(false)}
      >
        <div className="relative w-96 rounded-lg bg-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
          {/* Close Button  */}
          <button
            className="absolute right-3 top-3 text-gray-600 hover:text-gray-800"
            aria-label="Close"
            onClick={() => setIsPopOpen(false)}
          >
            &times;
          </button>

          {/* Header  */}
          <h2 className="mb-4 text-center text-xl font-semibold">Sign In</h2>

          {/* Input Fields  */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded border p-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded border p-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          {/* Buttons  */}
          <div className="flex justify-between">
            <button
              className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700 focus:outline-none"
              onClick={() => setIsPopOpen(false)}
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

          {/* Footer  */}
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
        </div>
      </div>
    </>
  );
}
