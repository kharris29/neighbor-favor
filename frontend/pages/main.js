import React, { useState } from "react";
import styles from "../styles/main.module.css";
import Router from "next/router";

// Get data from database to show in table
export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3001/favor_requests');
    const data = await res.json();

    return {
        props: { favor_data: data }
    }
}

function Main({favor_data}) {

    // Add a favor into database
    const [username, setUsername] = useState("");
    const [building, setBuilding] = useState("");
    const [favor_item, setFavorItem] = useState("");
    const [favor_description, setFavorDescription] = useState("");

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
            favor_item: favor_item,
            favor_description: favor_description
        }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            // Refresh page
            Router.reload();
        })
        .catch((e) => console.log(e));
    };

    // Remove a favor from database
    const handleRemoveFavor = async (id, e) => {

        e.preventDefault();
    
        await fetch("http://localhost:3001/remove_favor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({id})
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Successfully removed")
            console.log(data);
            
            //console.log("ID is: " + data._id);

            // Reload pge
            Router.reload();
          })
          .catch((e) => console.log(e));
    };

    const handleSignOut = async (e) => {
        e.preventDefault();
        const message = "signing out";

        await fetch("http://localhost:3001/sign_out", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({message}),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("signing out");
            Router.push("/");
        })
        .catch((e) => console.log(e));
    };

    const [favors, setFavors] = useState(favor_data);
    const [addTableData, setAddTableData] = useState({
        username: '',
        building: '',
        favor_item: '',
        favor_description: ''
    })

    return (
        <div className={styles.main_table_container}>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Building</th>
                        <th>Favor Item</th>
                        <th>Favor Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
            <tbody>
                {favors.map((favor)=>  (
                    <tr>
                        <td>{favor.username}</td>
                        <td>{favor.building}</td>
                        <td>{favor.favor_item}</td>
                        <td>{favor.favor_description}</td>
                        <td>
                        <button onClick={(e)=>handleRemoveFavor(favor._id, e)}>Accept Favor</button>
                        </td>
                    </tr> 
                ))}
            </tbody>
            </table>

            <h2>Request a favor!</h2>
            <form onSubmit = {handleAddFavor}>
                {/* <input 
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
                /> */}

                 <input 
                type = "text"
                name = "favor_item"
                required = "required"
                placeholder = "Enter a favor item..."
                onChange={(e) => setFavorItem(e.target.value)}
                />

                <input 
                type = "text"
                name = "favor_description"
                required = "required"
                placeholder = "Enter a favor description..."
                onChange={(e) => setFavorDescription(e.target.value)}
                />
                <button type = "submit"> Request </button>
            </form>

            <button onClick={(e)=>handleSignOut(e)}>Sign Out</button>
        </div>
    );
}

export default Main