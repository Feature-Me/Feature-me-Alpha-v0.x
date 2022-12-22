import React from "react";
import { createRoot } from 'react-dom/client';

import ErrorBoundary from "Components/errorBoundary/errorBoundary";

import version from "Config/versions.json";

import style from "./app.module.scss";
import initLocalStorage from "Utils/Storage/LocalStorage/initLocalStorage";

const App:React.FC = () =>{
    return(
        <div className={style.app}>

        </div>
    )
}

function render(): void {
    const container: HTMLDivElement = document.querySelector("#root")!;
    createRoot(container).render(
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    );
}

function init(): void {
    initLocalStorage();
    render();

    console.log("Feature Me Alpha initialized. the Game is Ready!");
    console.log("%c Hold up!", "color:red;font-size:64px;border:4px solid black;");
    console.log("%c Please be careful when you paste anything to console.\n Attackers may steal your information.", "color:#ffa69f;background-color:#633023;font-size:16px;");
    console.log("%c  Do you know what you are supposed to do with this tool? If you do, how about contributing to this project?", "color:#1189da;font-size:24px;");
    console.log(`%c Running Feature Me Alpha ${version.version}.Build:${version.build}.`, "color:#a0d6a6;background-color:#2d3c2e;font-size:16px;");
    console.log(`%c React${React.version}\n PixiJS${0}`, "color:#f3c0e6;background-color:#3c2d38;font-size:16px;")

}
window.addEventListener('load', init);
window.addEventListener("contextmenu", (e) => e.preventDefault());