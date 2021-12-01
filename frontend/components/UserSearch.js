import React, { useState, useEffect } from "react";
import styles from "../styles/UserSearch.module.css";

function UserSearch() {
  const [allUsers, setAllUsers] = useState([]);
  const [itemToSearch, setItemToSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((data) => setAllUsers(data));
  }, []);

  const filterUsers = (array) => {
    return array.filter((singleUser) =>
      singleUser.building.includes(itemToSearch)
    );
  };

  return (
    <div className={styles.user_search_container}>
      <div className={styles.user_search_container_form}>
        <h1>Find a fellow neighbor by building!</h1>
        <input
          type="text"
          placeholder="Type in building here"
          onChange={(e) => setItemToSearch(e.target.value)}
        />
        {/*  */}

        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {filterUsers(allUsers).map((item) => (
              <tr key={item._id}>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.phone_number}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*  */}
      </div>
    </div>
  );
}

export default UserSearch;
