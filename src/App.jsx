import style from './App.module.css';
import InputText from "./components/InputText";
import InputPassword from './components/InputPassword';
import Button from './components/Button';

function App() {
  
  const frutas = ["banana", "mação", "melancia", "kiwi", "manga"];

  return (
    <div className={style.App}>
        <h1>Olá mundo!</h1>

        {
          frutas.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }

        <InputPassword />
        <InputText />
        <Button name="botaozinho-legal"children="Entrar" />

    </div>
  );
}

export default App;
