import * as React from "react";

const Box = () => {
  React.useEffect(() => {
    const sayac = setInterval(() => {
      console.log("sayac calisiyor");
    }, 1000);

    return () => {
      clearInterval(sayac);
    };
  }, []);
  return (
    <div
      style={{
        backgroundColor: "red",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 200,
      }}
    >
      Box
    </div>
  );
};

export default Box;
