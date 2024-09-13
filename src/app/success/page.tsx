import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <section>
      <div className="mx-auto w-fit">
        <div className="flex flex-col justify-center gap-8">
          <div>
            <h1 className="text-3xl font-bold text-center mb-2">Success!</h1>
            <p className="text-center">
              Thank you for your submission. I&apos;ll get back to you as soon
              as I put down this paint brush!
            </p>
          </div>
          <Link className="btn btn-primary" href="/">
            Go Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
