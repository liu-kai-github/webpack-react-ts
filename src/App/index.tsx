import * as React from "react";

import {boxStyle} from "./App.less";
import * as logo from "./logo.svg";

class App extends React.Component<{}, {}> {

    constructor(props) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div className={boxStyle}>
                <header className="appHeader">
                    <img src={logo} className="appLogo" alt="logo" />
                    <h1 className="appTitle">Welcome to React</h1>
                </header>
                <p className="appIntro">
                    To get started, edit <code>src/App/index.tsx</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
