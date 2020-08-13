import React from "react";
import {View, Text} from "react-native";
import BasePage from "../components/BasePage";
import {connect} from "react-redux";

class Login extends BasePage {
    static defaultProps = {
        ...BasePage.defaultProps,
        title: "登录",
        showBackButton: true
    }

    constructor(props) {
        super(props);
    }

    renderPage() {
        return (
            <View>
                <Text>登录</Text>
            </View>
        )
    }
}

let mapStateToProps = state => {
    return {
        isDark: state.common.isDark
    }
}

export default connect(mapStateToProps, null, null, {forwardRef: true})(Login);
