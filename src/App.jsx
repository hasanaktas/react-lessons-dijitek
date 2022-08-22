import * as React from "react";

const App = () => {
  const [number, setNumber] = React.useState(0);

  const arttir = () => {
    setNumber(number + 1);
  };

  return <div>Vitejs Anasayfa</div>;
};

export default App;
