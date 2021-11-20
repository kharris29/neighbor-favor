import React, { useState } from "react";
import styles from "../styles/LoginAndRegister.module.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [building, setBuilding] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [answerFromServer, setAnswerFromServer] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
        building: building,
        phone_number: phone_number,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAnswerFromServer(data);
        document.querySelector("my-form").request();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className={styles.login_register_container}>
      <form
        id="my-form"
        onSubmit={handleRegister}
        className={styles.login_register_form}
      >
        <h1>Register Here</h1>
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
        <input
          type="text"
          placeholder="First Name..."
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name..."
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Building..."
          onChange={(e) => setBuilding(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number..."
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <input type="submit" value="REGISTER" />
        {answerFromServer && <h2>{answerFromServer}</h2>}
      </form>
    </div>
  );
}

export default Signup;
