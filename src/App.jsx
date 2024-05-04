import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-indigo-600 w-full h-screen">
        <h1 className="pt-[50rem] text-white text-center">
          Aspiring Developer
        </h1>
      </div>
    </div>
  );
}

export default App;
