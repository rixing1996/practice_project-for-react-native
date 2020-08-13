import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import BasePage from "../components/BasePage";
import {connect} from "react-redux";
import Login from "./login";

class HomeIndex extends BasePage {
    static defaultProps = {
        ...this.defaultProps,
        title: "首页",
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    renderPage() {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.navigator.push({
                        view: <Login/>
                    })
                }}
            >
                <View>
                    <Text>首页1+{this.props.isDark ? "黑" : "白"}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

let mapStateToProps = state => {
    return {
        isDark: state.common.isDark
    }
}

export default connect(mapStateToProps, null, null, {forwardRef: true})(HomeIndex);
