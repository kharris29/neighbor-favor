import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neighbor Favor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/neighborfavor.ico" />
      </Head>
      <div className={styles.nav}> 
        <div className={styles.logo}>
          <a>NEIGHBOR FAVOR</a>
        </div>
        <div className={styles.navlinks}>
          <a href="http://localhost:3000/login/">LOGIN</a>
        </div>
      </div>

    <div className={styles.hero}>
      <div className={styles.leftcolumn}>
        <h1>Welcome to Neighbor Favor!</h1>
        <p>Need a favor? No worries, your neighbors have your back!
        </p>
        <div className={styles.button}>
          <a href="http://localhost:3000/signup/">
            SIGN UP
          </a>
        </div>
      </div>

      <div className={styles.rightcolumn}>
        <img src= "/neighborfavor.ico" alt= "big pic"/>
      </div>

    </div>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Request, accept, get the help you need right here...
        </h1>

        <p className={styles.description}>
          Ever wish that you brought that one thing you left at home? Well, with a simple favor request, 
          you can now ask countless friendly neighbors for their help!
        </p>
        <p className={styles.description}>
          Let's keep the good karma chain going! Spread the love and help each other out!
        </p>

        <div className={styles.grid}>
          <a href="http://localhost:3000/login/" className={styles.card}>
            <h2>Login Page &rarr;</h2>
            <p>Click here to log in!</p>
          </a>
        

          <a href="http://localhost:3000/signup/" className={styles.card}>
            <h2>Sign Up Page &rarr;</h2>
            <p>Click here to sign up!</p>
          </a>
        </div>
      </main>
    </div>
  )
}