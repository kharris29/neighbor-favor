import React, { useState } from "react";
import styles from "../styles/Main.module.css";
import Popup from "./Popup";
import Router from "next/router";
import Head from 'next/head'
import UserSearch from "../components/UserSearch";

// Get data from database to show in table
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3001/favor_requests");
  const data = await res.json();

  return {
    props: { favor_data: data },
  };
};

function Main({ favor_data }) {

  const [username, setUsername] = useState("");
  const [building, setBuilding] = useState("");
  const [favor_item, setFavorItem] = useState("");
  const [favor_description, setFavorDescription] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false); // *****
  const [popupUsername, setPopupUsername] = useState("");
  const [popupFirstName, setPopupFirstName] = useState("");
  const [popupLastName, setPopupLastName] = useState("");
  const [popupBuilding, setPopupBuilding] = useState("");
  const [popupPhoneNum, setPopupPhoneNum] = useState("");
  const [currentFirstName, setCurrentFirstName] = useState("");
  const [popupNotif, setPopupNotif] = useState("");
  const [notifNum, setNotifNum] = useState("0");
  const [noNotifsTrigger, setNoNotifsTrigger] = useState(false);
  const [popupNotifTrigger, setPopupNotifTrigger] = useState(false);

  // Get current first name for "hello" top right box
  getCurrentFirstName();
  // Update user's notification box if they have a notification
  getNotification();


  async function getCurrentFirstName() {
    const res = await fetch("http://localhost:3001/first_name");
    const data = await res.json();

    setCurrentFirstName(data);
  }

  async function getNotification() {
    const res = await fetch('http://localhost:3001/curr_user');
    const data = await res.json();

    if(data.notification && data.notification != '')
    {
      setNotifNum("1");
    }  
  }

  async function getCurrAcctInfo() {
    const res = await fetch('http://localhost:3001/curr_user');
    const acct = await res.json();
    let popupString;

    try { 
        // Set notification string accordingly
        popupString = acct.notification;  

        // If string is not null or empty
        if (popupString) {
          console.log("NOTIF: " + popupString);
          setPopupNotif(popupString);
          // Call popup here!
          setPopupNotifTrigger(true);

          // Delete notification
          handleRemoveNotif();
        }

        else {
          setNoNotifsTrigger(true);
          console.log("notif string is empty");
        }


    } catch (error) {
        console.log("notif string does not exist\n");
    }
  }
  
  // Remove notification for current user
  const handleRemoveNotif = async (e) => {
  
  //  e.preventDefault();

    await fetch("http://localhost:3001/remove_notif", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Notif successfully removed (i think)");
      })
      .catch((e) => console.log(e));
  };

  const handleAddFavor = async (e) => {
    e.preventDefault();
    console.log("Attempting to add favor");

    await fetch("http://localhost:3001/add_favor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        building: building,
        favor_item: favor_item,
        favor_description: favor_description,
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
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Successfully removed");
        console.log(data);

        // Assign popup info
        setPopupUsername(data.username);
        setPopupFirstName(data.firstname);
        setPopupLastName(data.lastname);
        setPopupBuilding(data.building);
        setPopupPhoneNum(data.phone_number);

        // Trigger popup
        setButtonPopup(true);
      })
      .catch((e) => console.log(e));
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    const message = "signing out";

    await fetch("http://localhost:3001/sign_out", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
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
    username: "",
    building: "",
    favor_item: "",
    favor_description: "",
  });

  return (
    <div className={styles.main_container}>
        <div style={{ backgroundImage: `url("/main_background.png")` }}>
          <Head>
            <title>Neighbor Favor</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/neighborfavor.ico" />
          </Head>
          <h1 className={styles.my_header}>Neighbor Favor</h1>
          <div className={styles.my_header3}>?????????????????</div>
          <h3 className={styles.my_header2}>~ Help out a fellow neighbor ~</h3>
          <br></br>
          <br></br>
          <br></br>

          <div className={styles.grid_header}>
            <div>Username</div>
            <div>Building</div>
            <div>Favor Item</div>
            <div>Favor Description</div>
            <div>Action</div>
          </div>

          {favors.map((favor) => (
            <div className={styles.grid}>
              <div className={styles.td}>{favor.username}</div>
              <div className={styles.td}>{favor.building}</div>
              <div className={styles.td}>{favor.favor_item}</div>
              <div className={styles.td}>{favor.favor_description}</div>
              <div className={styles.td}>
                <button onClick={(e) => handleRemoveFavor(favor._id, e)}>
                  Accept Favor
                </button>
              </div>
            </div>
          ))}

          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h2>Thanks for helping! :)</h2>
            <br></br>
            <h4>Here's your neighbor's contact information:</h4>
            <p>Username: {popupUsername} </p>
            <p>First Name: {popupFirstName}</p>
            <p>Last Name: {popupLastName}</p>
            <p>Building: {popupBuilding}</p>
            <p>Phone Number: {popupPhoneNum}</p>
          </Popup>
          
          <Popup trigger={popupNotifTrigger} setTrigger={setPopupNotifTrigger}>
            <h2>You have a new notification!</h2>
            <br></br>
            <p>{popupNotif}</p>
          </Popup>

          <Popup trigger={noNotifsTrigger} setTrigger={setNoNotifsTrigger}>
            <h2>You have no new notifications</h2>
          </Popup>

          <div className={styles.rectangle}>
            <p>Hello, {currentFirstName}!</p>
          </div>

          <div className={styles.request}>  
          <h2 >Request a favor!</h2>
          <form onSubmit={handleAddFavor}>
            <input
              className={styles.form_input}
              type="text"
              name="favor_item"
              required="required"
              placeholder="Enter a favor item..."
              onChange={(e) => setFavorItem(e.target.value)}
            />

            <input
              className={styles.form_input}
              type="text"
              name="favor_description"
              required="required"
              placeholder="Enter a favor description..."
              onChange={(e) => setFavorDescription(e.target.value)}
            />
            <button className={styles.requestbutton} type="submit"> Request </button>
          </form>
          </div>   
           
          <button className={styles.notif} onClick={(e) => getCurrAcctInfo()}>
            Check Notifications ({notifNum})
          </button>

          <div>
            <UserSearch />
          </div>

          <button className={styles.sign_out} onClick={(e) => handleSignOut(e)}>
            Sign Out
          </button>

        </div>

    </div>
  );
}

export default Main;
