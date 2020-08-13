import React from "react";
import {connect} from "react-redux";
import {TabView, BasePage} from "teaset";
import HomeMime from "./home_mime";
import HomeIndex from "./home_index";
import Theme from "../lib/Theme";
import Icon from "react-native-vector-icons/Ionicons";
import {Text} from "react-native";

function TabTitle(props) {
    let {isDark, active, title} = props;
    return <Text
        style={{
            fontSize: Theme.tabTitleSize,
            color: isDark ? (active ? Theme.tabDarkActiveTextColor : Theme.tabDarkTextColor)
                : (active ? Theme.tabDefaultActiveTextColor : Theme.tabDefaultTextColor)
        }}
    >
        {title}
    </Text>;
}

function TabIcon(props) {
    let {isDark, active, name} = props;
    return <Icon
        name={name}
        size={Theme.tabIconSize}
        color={isDark ? (active ? Theme.tabDarkActiveTextColor : Theme.tabDarkTextColor)
            : (active ? Theme.tabDefaultActiveTextColor : Theme.tabDefaultTextColor)}
    />
}

class Home extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0
        }
    }

    renderPage() {
        let {isDark} = this.props;
        let {tabIndex} = this.state;
        return (
            <TabView
                style={{flex: 1}}
                barStyle={{backgroundColor: isDark ? Theme.darkTabBgColor : Theme.defaultTabBgColor}}
                activeIndex={tabIndex}
                onChange={index => {
                    this.setState({
                        tabIndex: index
                    })
                }}
            >
                <TabView.Sheet
                    title={<TabTitle title="首页" isDark={isDark} active={tabIndex === 0}/>}
                    icon={<TabIcon name="home" active={false} isDark={isDark}/>}
                    activeIcon={<TabIcon name="home" active={true} isDark={isDark}/>}
                >
                    <HomeIndex/>
                </TabView.Sheet>
                <TabView.Sheet
                    title={<TabTitle title="个人中心" isDark={isDark} active={tabIndex === 1}/>}
                    icon={<TabIcon name="person" active={false} isDark={isDark}/>}
                    activeIcon={<TabIcon name="person" active={true} isDark={isDark}/>}
                >
                    <HomeMime/>
                </TabView.Sheet>
            </TabView>
        )
    }
}

let mapStateToProps = state => {
    return {
        isDark: state.common.isDark
    }
}

Home = connect(mapStateToProps, null, null, {forwardRef: true})(Home);

export default Home;
