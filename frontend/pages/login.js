import React, { useState } from "react";
import styles from "../styles/LoginAndRegister.module.css";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          sessionStorage.setItem("username", data.username);
          sessionStorage.setItem("firstname", data.firstname);
          sessionStorage.setItem("lastname", data.lastname);
          sessionStorage.setItem("building", data.building);
          sessionStorage.setItem("phone_number", data.phone_number);
          setTimeout(() => {
            router.push("/main");
          }, 800);
        } else {
          console.log("No Such User");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className={styles.login_register_container}>
      <form
        id="my-form"
        onSubmit={handleLogin}
        className={styles.login_register_form}
      >
        <h1>Login Here</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
}

export default Login;
