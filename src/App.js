import "./App.css";
import Candidature from "./candidature";
import Acceptation from "./Acceptation";
import Upload from "./upload";

function App() {
    const job = "Developer";
    return (
        <div className="App">
            <Candidature />
            <Acceptation />
            {/* <Upload></Upload> */}
        </div>
    );
}

export default App;
