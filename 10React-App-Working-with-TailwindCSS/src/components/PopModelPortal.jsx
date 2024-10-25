import { createPortal } from 'react-dom';

export default function PopModelPortal({ isPopOpen, setIsPopOpen, header, footer, children}) {
  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 ${isPopOpen ? '' : 'hidden'}`}
      onClick={() => setIsPopOpen(false)}
    >
      <div
        className="relative w-96 rounded-lg bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button  */}
        <button
          className="absolute right-3 top-3 text-gray-600 hover:text-gray-800"
          aria-label="Close"
          onClick={() => setIsPopOpen(false)}
        >
          &times;
        </button>

        {/* Header  */}
        {header}

        {/* Children */}
        {children}

        {/* Footer  */}
       {footer}
      </div>
    </div>,
    document.getElementById('portal')
  );
}
