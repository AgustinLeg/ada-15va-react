import { suma } from "./suma";

const App = () => {
  const total = suma(1, 2);
  // console.log(total);

  const nombre = "Agustin";
  const apellido = "Leguizamon"

  return (
    <div>
      <h1>{nombre}</h1>
      <h2>{apellido}</h2>
      <p>El total de la suma es: {total}</p>
    </div>
  );
};

export default App;
