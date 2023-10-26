"use client";
import React, { useState } from "react";
import Image from "next/image";
import Input from "../../components/input";

export default function AuthPage() {
  const [email, setEmail] = useState();
  //
  return (
    <div className="relative h-full w-full bg-[url('/assets/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
      <div className="bg-black w-full h-full lg:bg-black-opacity-50">
        <nav className="px-12 py-5">
          <Image
            alt="Logo"
            src="/assets/logo.png"
            className="h-12 aspect-auto"
            width={60}
            height={60}
          />
        </nav>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              Sign In
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <Input
              label="Username"
              onChange={() => {}}
              id="username"
              type="text"
              value=""
            />
            <Input
              label="Email"
              onChange={() => {}}
              id="email"
              type="email"
              value=""
            />
            <Input
              label="Password"
              onChange={() => {}}
              id="password"
              type="password"
              value=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
