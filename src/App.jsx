import './App.css'
import BadJSXinJS from "bad-jsx-in-js-component/js/BadJSXinJS";
import GoodJSX from "bad-jsx-in-js-component/js/GoodJSX";
import BadTSXInTs from "bad-jsx-in-js-component/ts/BadTSXInTs";
import GoodTSX from "bad-jsx-in-js-component/ts/GoodTSX";
import LocalJsxInJsComponent from "./LocalJsxInJsComponent.js";

function App() {
  return (
    <div className="App">
      <LocalJsxInJsComponent />
      <BadJSXinJS />
      <GoodJSX />
      <BadTSXInTs />
      <GoodTSX />
    </div>
  )
}

export default App
