import React, { useState } from "react";
import styles from "../styles/LoginAndRegister.module.css";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
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
        setAnswerFromServer(data);
        document.getElementById("my-form").reset();
        setTimeout(() => {
          router.push("/login");
        }, 4000);
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

        <select
          name="building"
          id="building"
          onChange={(e) => setBuilding(e.target.value)}
        >
          <option value="">Choose the building</option>
          <option value="Centennial Hall">Centennial Hall</option>
          <option value="De Neve Plaza">De Neve Plaza</option>
          <option value="Dykstra Hall">Dykstra Hall</option>
          <option value="Hedrick Court">Hedrick Court</option>
          <option value="Olympic Hall">Olympic Hall</option>
          <option value="Rieber Court">Rieber Court</option>
          <option value="Sproul Plaza">Sproul Plaza</option>
        </select>

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
