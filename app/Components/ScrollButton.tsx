"use client";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollButton() {
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY>300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll); // Clean up
        };
    }, []);

    return (
        visible && (
            <div className="fixed z-50 right-28 bottom-6">
                <div className="transition-transform duration-500 ease-in-out">
                    <button
                        onClick={handleScroll}
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 text-gray-300 shadow-sm transition-transform transform hover:scale-105 hover:bg-slate-100"
                    >
                        <FaArrowCircleUp className="text-3xl" />
                    </button>
                </div>
            </div>
        )
    );
}
