import { useState } from "react";
import "./App.css";
import GithubForm from "./components/GithubForm.jsx";

function App() {
    const [res, setRes] = useState({});
    return (
        <div className="App">
            <h1>Hello Elliot!!</h1>
            <GithubForm res={res} setRes={setRes} />
        </div>
    );
}

export default App;
