"use client";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";

interface CallingButtonProps {
  call: string;
  whatsapp: string;
}

export default function CallingButton({ call, whatsapp }: CallingButtonProps) {
  const [click, setClick] = useState<boolean>(false);

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className={`transition-transform duration-300 ease-in-out `}>
        {click && (
          <div className="flex flex-col gap-4 mb-4 transform transition-opacity duration-300 ease-in-out">
            {" "}
            <a
              href={`tel:${call}`}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
              onClick={() => setClick(false)} // Close dropdown after click
            >
              <IoCallOutline className="text-2xl" />
            </a>
            <a
              href={`https://wa.me/${whatsapp}`}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
              onClick={() => setClick(false)} // Close dropdown after click
            >
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        )}
        <button
          type="button"
          onClick={() => setClick(!click)}
          className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 `}
        >
          {click ? (
            <IoMdSend className="text-3xl" />
          ) : (
            <IoIosSend className="text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
}
