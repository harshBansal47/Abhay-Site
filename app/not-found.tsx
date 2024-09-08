import Link from "next/link";
import ErrorImage from "@/public/not-found.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center px-6">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <Image
              width={266}
              height={200}
              className="mx-auto"
              src={ErrorImage}
              alt="Page not found"
            />
          </div>
          <div className="text-4xl font-bold mb-4 text-gray-800">
            Ohh! Page Not Found
          </div>
          <p className="text-lg text-gray-600 mb-6">
            The page you are requesting was not found.
          </p>
          <Link href="/" passHref>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
