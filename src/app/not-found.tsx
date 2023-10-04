import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="font-system ui font-segoe-ui font-roboto font-helvetica font-arial font-sans-serif font-apple-color-emoji font-segoe-ui-emoji h-screen text-center flex flex-col items-center justify-center bg-white dark:bg-black dark:text-white">
      <div className="flex items-center justify-center">
        <style>
          {`
            .next-error-h1 {
              border-right: 1px solid rgba(0, 0, 0, 0.3);
            }
          `}
        </style>
        <h1 className="next-error-h1 inline-block mr-5 pr-6 text-4xl font-semibold leading-12">
          404
        </h1>
        <div className="inline-block">
          <h2 className="text-base font-normal leading-12">This page could not be found.</h2>
        </div>
      </div>
      <Link href="/" className="mt-6">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
