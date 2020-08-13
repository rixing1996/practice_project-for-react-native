import React from "react";
import {View, Text} from "react-native";
import BasePage from "../components/BasePage";
import {connect} from "react-redux";

class HomeMime extends BasePage {
    static defaultProps = {
        ...BasePage.defaultProps,
        title: "个人中心"
    }

    constructor(props) {
        super(props);
    }

    renderPage() {
        return (
            <View style={{backgroundColor: "white"}}>
                <Text>我的</Text>
            </View>
        )
    }
}

let mapStateToProps = state => {
    return {
        isDark: state.common.isDark
    }
}

export default connect(mapStateToProps, null, null, {forwardRef: true})(HomeMime);
