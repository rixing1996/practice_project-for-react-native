import React from "react";
import {NavigationPage, NavigationBar} from "teaset";
import {Text, TouchableOpacity} from "react-native";
import Theme from "../lib/Theme";
import Icon from "react-native-vector-icons/Ionicons";

class MyBasePage extends NavigationPage {
    static defaultProps = {
        ...NavigationPage.defaultProps,
        title: "",
        showBackButton: false,
        isDark: false,
        defaultHeaderBgColor: Theme.defaultHeaderBgColor,
        darkHeaderBgColor: Theme.darkHeaderBgColor,
        defaultStatusBgColor: Theme.defaultStatusBgColor,
        darkStatusBgColor: Theme.darkStatusBgColor,
        defaultStatusColor: Theme.defaultStatusColor,
        darkStatusColor: Theme.darkStatusColor
    }

    constructor(props) {
        super(props);
    }

    renderHeaderLeft() {
        return this.props.showBackButton ? (
            <TouchableOpacity
                onPress={this.baseGoToBack.bind(this)}
                style={{
                    paddingVertical: 3,
                    paddingHorizontal: 3
                }}
            >
                <Icon
                    name="chevron-back"
                    size={Theme.headerBackIconSize}
                    color={
                        this.props.isDark ?
                            Theme.darkHeaderTextColor :
                            Theme.defaultHeaderTextColor
                    }
                />
            </TouchableOpacity>
        ) : null;
    }

    baseGoToBack() {
        this.navigator.pop();
    }

    renderHeaderCenter() {
        return null;
    }

    renderHeaderRight() {
        return null;
    }

    renderHeaderBackGround() {
        return null;
    }

    renderStatusBgColor() {
        return null;
    }

    renderStatusStyle() {
        return null;
    }

    renderHeaderBgColor() {
        return null;
    }

    renderNavigationBar() {
        return (
            <NavigationBar
                background={this.renderHeaderBackGround()}
                title={
                    this.renderHeaderCenter() ?
                        this.renderHeaderCenter() :
                        this.props.title
                }
                titleStyle={{
                    color: this.props.isDark ?
                        Theme.darkHeaderTextColor :
                        Theme.defaultHeaderTextColor
                }}
                style={{
                    backgroundColor: this.renderHeaderBgColor() ?
                        this.renderHeaderBgColor() :
                        (this.props.isDark ?
                            this.props.darkHeaderBgColor :
                            this.props.defaultHeaderBgColor)
                }}
                statusBarColor={
                    this.renderHeaderBackGround() ? "" :
                        (this.renderStatusBgColor() ? this.renderStatusBgColor() :
                            (this.props.isDark ?
                                this.props.darkStatusBgColor :
                                this.props.defaultStatusBgColor))}
                statusBarStyle={
                    this.renderStatusStyle() ?
                        this.renderStatusStyle() : (
                            this.props.isDark ?
                                this.props.darkStatusColor :
                                this.props.defaultStatusColor
                        )}
                rightView={this.renderHeaderRight()}
                leftView={this.renderHeaderLeft()}
            />
        );
    }

}

export default MyBasePage;
