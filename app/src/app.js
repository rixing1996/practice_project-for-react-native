import React from "react";
import {initialMode, eventEmitter} from "react-native-dark-mode";
import store from "./redux";
import {Provider} from "react-redux";
import {TeaNavigator, TopView} from "teaset";
import Home from "./pages/home";

class App extends React.Component {
    constructor() {
        super();
    }

    // 设置主题
    setTheme(theme) {
        store.dispatch({type: "themeChange", data: theme === "dark"});
    }

    componentDidMount() {
        // 设置默认暗黑模式
        this.setTheme(initialMode);

        // 监听暗黑模式的变化
        eventEmitter.on('currentModeChanged', newMode => {
            this.setTheme(newMode);
        })
    }

    render() {
        return (
            <Provider store={store}>
                <TopView>
                    <TeaNavigator
                        rootView={<Home/>}
                    />
                </TopView>
            </Provider>
        )
    }
}

export default App;
