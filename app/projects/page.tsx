"use client";

import React, {FunctionComponent, useState} from "react";
import styles from '../page.module.css'
import { Button } from "@mantine/core";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  const [greet, setGreet]  = useState("Hello fellow Humans!");
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>{greet}</p>
        <Button onClick={()=> setGreet("We will destroy you!")}>Click</Button>
      </div>
    </main>
  )
}

export default Page
