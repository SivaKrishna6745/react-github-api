import { useState } from "react";
import "./App.css";
import GithubDetails from "./components/GithubDetails";
import GithubForm from "./components/GithubForm.jsx";

function App() {
    const [res, setRes] = useState({});
    return (
        <div className="App">
            <h1>Hello Elliot!!</h1>
            <GithubForm setRes={setRes} />
            {Object.keys(res).length > 0 && <GithubDetails res={res} />}
        </div>
    );
}

export default App;
