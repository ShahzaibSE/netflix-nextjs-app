import React, { useState } from "react";
import Image from "next/image";
import Input from "../../components/input";

export default function AuthPage() {
  const [email, setEmail] = useState();
  //
  return (
    <div className="relative h-full w-full bg-[url('images/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
      <div className="bg-black w-full h-full lg:bg-black-opacity-50">
        <nav className="px-12 py-5">
          <Image
            alt="Logo"
            src="/images/logo.png"
            className="h-12"
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              Sign In
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <Input
              label="Email"
              onChange={() => {}}
              id="email"
              type="email"
              value=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
