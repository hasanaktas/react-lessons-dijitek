// import * as React from "react";
// import Box from "./components/Box";

// const App = () => {
//   const [result, setResult] = React.useState("");
//   const [sayac, setSayac] = React.useState(5);

//   const isSuccess = React.useMemo(() => result === "hasan", [result]);

//   React.useEffect(() => {
//     if (sayac === 0 || isSuccess) {
//       return;
//     }

//     const sayacInterval = setInterval(() => {
//       setSayac((prev) => prev - 1);
//     }, 1000);

//     return () => {
//       clearInterval(sayacInterval);
//     };
//   }, [sayac, isSuccess]);

//   return (
//     <div style={{ padding: 20 }}>
//       <div
//         style={{
//           backgroundColor: "red",
//           color: "white",
//           width: 50,
//           height: 50,
//           dipslay: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {sayac}
//       </div>
//       <input
//         value={result}
//         onChange={(event) => setResult(event.target.value)}
//         style={{ width: "100%" }}
//         disabled={(sayac === 0) | isSuccess}
//       />
//       {sayac === 0 && (
//         <div>
//           Gecen Sure boyunca aranan kelimeyi bulamadin
//           <button
//             onClick={() => {
//               setResult("");
//               setSayac(10);
//             }}
//           >
//             Tekrar Basla
//           </button>
//         </div>
//       )}
//       {sayac !== 0 && result === "hasan" && (
//         <>
//           <div
//             style={{ border: "1px solid black", padding: 20, marginTop: 20 }}
//           >
//             Aranan Kelimeyi Buldun
//           </div>
//           <button
//             onClick={() => {
//               setResult("");
//               setSayac(10);
//             }}
//             style={{ width: "100%", marginTop: 20 }}
//           >
//             Sifirla
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

import * as React from "react";

const App = () => {
  const sayi = 25.12;
  const [sayi1, setSayi1] = React.useState(0);
  const [sayi2, setSayi2] = React.useState(15);
  const [name, setName] = React.useState("");
  const toplam = React.useMemo(() => sayi1 + sayi2, [sayi1, sayi2]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input
        type={"number"}
        value={sayi1}
        onChange={(e) => setSayi1(parseInt(e.target.value))}
      />
      <input
        type={"number"}
        value={sayi2}
        onChange={(e) => setSayi2(parseFloat(e.target.value))}
      />
      <div>Iki sayinin toplami sudur {toplam}</div>
    </div>
  );
};

export default App;
