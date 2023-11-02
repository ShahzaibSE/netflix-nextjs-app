"use client";
import React, { useState } from "react";
import { useCallback } from "react";
import Image from "next/image";
import Input from "../components/input";

export default function AuthComponent() {
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [password, setPassword] =
    useState<string>();
  const [variant, setVariant] =
    useState<string>("login");
  //
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login"
        ? "register"
        : "login"
    );
  }, []);
  //
  return (
    <div className="w-full h-full">
      <nav className="px-12 py-5">
        <Image
          alt="Logo"
          src="/assets/logo.png"
          className="h-12 aspect-auto"
          width={200}
          height={200}
        />
      </nav>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full flex flex-col justify-center items-center">
          <h2 className="text-white text-4xl mb-8 font-semibold">
            {variant === "login"
              ? "Sign In"
              : "Create an account"}
          </h2>

          <div className="flex flex-col gap-4 w-full">
            {variant === "register" && (
              <Input
                label="Username"
                onChange={() => {}}
                id="username"
                type="text"
                value={name as string}
              />
            )}
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
          <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
            Login
          </button>
          <div className="mt-12">
            <p className="text-neutral-500">
              {variant === "login" ? "First time using Netflix?" : "Already have an account"}
              <span
                className="text-white ml-1 hover:underline cursor-pointer"
                onClick={toggleVariant}
              >
                Create an account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
