// utils.useAuth.js

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

const secret_key = "tasting_coffee";

const useAuth = () => {
  const [loginUser, setLoginUser] = useState("");
  const router = useRouter();
  //
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/user/login");
    }
    try {
      const decoded = jwt.verify(token, secret_key, { algorithms: ["HS256"] });
      setLoginUser(decoded.email);
    } catch (err) {
      router.push("/user/login");
    }
  }, [router]);
  return loginUser;
};

export default useAuth;
