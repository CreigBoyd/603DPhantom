// components/modal/Modal.jsx
"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function Modal({ isOpen, onClose, children, title }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (typeof window === "undefined" || !isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div
        aria-modal="true"
        role="dialog"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
        onClick={onClose} // close modal if clicking outside content
      >
        <div
          className="bg-gray-900 rounded-xl max-w-3xl w-full p-8 relative text-slate-300"
          onClick={(e) => e.stopPropagation()} // stop click inside modal content from closing
        >
          <h2 id="modal-title" className="text-3xl font-bold mb-6 text-cyan-400">
            {title}
          </h2>
          <button
            aria-label="Close modal"
            onClick={onClose}
            className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-200 text-2xl font-bold"
          >
            &times;
          </button>
          <div>{children}</div>
        </div>
      </div>
    </>,
    document.body
  );
}