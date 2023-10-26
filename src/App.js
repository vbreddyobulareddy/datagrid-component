import logo from "./logo.svg";
import HeaderComponent from "./components/header";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/voters");
      return await response.json();
    };
    const voters = fetchData();
    console.log(voters);
  }, []);
  return (
    <>
      <HeaderComponent />
      <div className="flex flex-col justify-start w-screen items-start m-4 p-4">
        <div>Grid</div>
        <div>Selected Item</div>
      </div>
    </>
  );
}

export default App;
