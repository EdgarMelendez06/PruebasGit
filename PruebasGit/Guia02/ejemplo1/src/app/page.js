import Image from "next/image";
import styles from "./page.module.css";

const element  = 
  <> 
    <h1>Hola, Mundo</h1>
    <h2>Son la {new Date().toTimeString()}</h2>
  </>

export default function Home() {
  return (
    <main className="{styles.main}">
      <div className="App">
        {element}
      </div>
    </main>
  );
}
