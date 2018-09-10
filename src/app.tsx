import * as React from "react";
import * as ReactDOM from "react-dom";
import { MainPage } from "./Components/MainPage";

const root = document.getElementById("oz-app") as HTMLElement;

ReactDOM.render(<MainPage InitDataSource={root.dataset.app} />, root);