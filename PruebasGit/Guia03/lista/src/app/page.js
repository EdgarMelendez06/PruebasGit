import style from "./page.module.css";
import Form from "../components/Form";

export default function Page() {
  return (
    <main className={style.main}>
      <div className="App">
        <div>
          <p>
            Aqui haremo nuetro TO-DO list
          </p>
          <Form />
        </div>
      </div>
    </main>
  );
}