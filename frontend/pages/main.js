import React, { useState } from "react";
import styles from "../styles/main.module.css";

// Get data from database to show in table
export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3001/favor_requests');
    const data = await res.json();

    return {
        props: { favor_data: data }
    }
}

function Main({favor_data}) {

    // Insert into database
    const [username, setUsername] = useState("");
    const [building, setBuilding] = useState("");
    const [favor_item, setFavorItem] = useState("");

    const handleAddFavor = async (e) => {

        e.preventDefault();
        console.log("Attempting to add favor")

        await fetch("http://localhost:3001/add_favor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            building: building,
            favor_item: favor_item
        }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log("hello");
            //setAnswerFromServer(data);
            //document.querySelector("my-form").request();
        })
        .catch((e) => console.log(e));
    };

    const [favors, setFavors] = useState(favor_data);
    const [addTableData, setAddTableData] = useState({
        username: '',
        building: '',
        favor_item: ''
    })

    return (
        <div className={styles.main_table_container}>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Building</th>
                        <th>Favor Item</th>
                    </tr>
                </thead>
            <tbody>
                {favors.map((favor)=>  (
                    <tr>
                        <td>{favor.username}</td>
                        <td>{favor.building}</td>
                        <td>{favor.favor_item}</td>
                    </tr> 
                ))}
            </tbody>
            </table>

            <h2>Request a favor!</h2>
            <form onSubmit = {handleAddFavor}>
                <input 
                type = "text"
                name = "username"
                required = "required"
                placeholder = "Enter a username..."
                onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                type = "text"
                name = "building"
                required = "required"
                placeholder = "Enter a building..."
                onChange={(e) => setBuilding(e.target.value)}
                />

                 <input 
                type = "text"
                name = "favor_item"
                required = "required"
                placeholder = "Enter a favor item..."
                onChange={(e) => setFavorItem(e.target.value)}
                />
                <button type = "submit"> Request </button>
            </form>
        </div>
    
    );
}

export default Main