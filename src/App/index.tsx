import * as React from 'react';

const logo = require('./logo.svg');
const {app, appLogo, appHeader, appTitle, appIntro} = require('./App.css');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={app}>
                <header className={appHeader}>
                    <img
                        src={logo}
                        className={appLogo}
                        alt="logo"
                    />
                    <h1 className={appTitle}>Welcome to React</h1>
                </header>
                <p className={appIntro}>
                    To get started, edit <code>src/App/index.tsx</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
