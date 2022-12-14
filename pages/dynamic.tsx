import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useEffect, useState } from 'react'
const Home: NextPage = () => {

  // list of fruits
  const fruits = ['peach']
  // list many fruits
  const additionalFruits = [
    "apple",
    "apricot",
    "avocado",
    "banana",
    "bell pepper",
    "bilberry",
    "blackberry",
    "blackcurrant",
    "blood orange",
    "blueberry",
    "boysenberry",
    "breadfruit",
    "canary melon",
    "cantaloupe",
    "cherimoya",
    "cherry",
    "chili pepper",
    "clementine",
    "cloudberry",
    "coconut",
    "cranberry",
    "cucumber",
    "currant",
    "damson",
    "date",
    "dragonfruit",
    "durian",
    "eggplant",
    "elderberry",
    "feijoa",
    "fig",
    "goji berry",
    "gooseberry",
    "grape",
    "grapefruit",
    "guava",
    "honeydew",
    "huckleberry",
    "jackfruit",
    "jambul",
    "jujube",
    "kiwi fruit",
    "kumquat",
    "lemon",
    "lime",
    "loquat",
    "lychee",
    "mandarine",
    "mango",
    "mulberry",
    "nectarine",
    "nut",
    "olive",
    "orange",
    "papaya",
    "passionfruit",
    "peach",
    "pear",
    "persimmon",
    "physalis",
    "pineapple",
    "plum",
    "pomegranate",
    "pomelo",
    "purple mangosteen",
    "quince",
    "raisin",
    "rambutan",
    "raspberry",
    "redcurrant",
    "rock melon",
    "salal berry",
    "satsuma",
    "star fruit",
    "strawberry",
    "tamarillo",
    "tangerine",
    "tomato",
    "ugli fruit",
    "watermelon"
  ]



  const [state, setState] = useState(fruits)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const placeholder = document.querySelector("#thirdPartyContainer")
      if (!placeholder) return;
      placeholder.insertAdjacentHTML("afterbegin", "<div>here is the 3rd party injected stuff</div>")

    }
    return () => {
      // cleanup
    }
  }, [])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container}>

        <header className={styles.header}>Header</header>
        <main className={styles.main}>
          <div>Dynamic Page</div>
          {state.map((fruit, index) => {
            return <div key={index}>{fruit}</div>
          })}
          <div id="thirdPartyContainer"></div>
          {state.map((fruit, index) => {
            return <div key={index}>{fruit}</div>
          })}

          <button className={styles.addFruit} onClick={() => {
            setState((prevState) => {
              // random fruit from list of additionalFruits
              const randomFruit = additionalFruits[Math.floor(Math.random() * additionalFruits.length)]
              return [...prevState, randomFruit]
            })
          }
          }>Add Fruit</button>

        </main>

        <footer className={styles.footer}>
          This is the footer for dynamic page
        </footer>
      </section>
    </>
  )
}

export default Home
