import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./components/SplashScreen";
import LandingPage from "./components/LandingPage";
import { createStore } from "redux";
import store from "./state/Store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstTime from "./screens/FirstTime";
import MainTitle from "./components/header/MainTitle";

import { resetAsyncStorage } from "./state/actions/firstUse";
import HomePage from "./screens/HomePage";
import AddGoal from "./screens/AddGoal";
import EncouragementScreen from "./components/encouragementWords/EncouragementScreen";
import SettingButton from "./components/button/SettingButton";
import CustomButton from "./components/button/CustomButton";
import GoalOptions from "./screens/GoalOptions";
import EditGoal from "./screens/EditGoal";
import Tutorial from "./tutorial/Tutorial";
import StatsIcon from "./components/icons/StatsIcon";
import StatsScreen from "./screens/StatsScreen";
import History from "./screens/History";

const Stack = createStackNavigator();
export default function App() {
    // store.dispatch(resetAsyncStorage());
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Landing">
                    <Stack.Screen
                        name="FirstVisit"
                        component={FirstTime}
                        options={{
                            ...defaultNavigationOptions,
                            headerLeft: null,
                        }}
                    />
                    <Stack.Screen
                        name="Tutorial"
                        component={Tutorial}
                        options={{
                            ...defaultNavigationOptions,
                            headerLeft: null,
                        }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={HomePage}
                        options={{
                            ...defaultNavigationOptions,
                            // ...homepageSettings,
                        }}
                    />

                    <Stack.Screen
                        name="Landing"
                        component={LandingPage}
                        options={{
                            ...defaultNavigationOptions,
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="AddGoal"
                        component={AddGoal}
                        options={defaultNavigationOptions}
                    />
                    <Stack.Screen
                        name="EditGoal"
                        component={EditGoal}
                        options={defaultNavigationOptions}
                    />
                    <Stack.Screen
                        name="GoalOptions"
                        component={GoalOptions}
                        options={defaultNavigationOptions}
                    />
                    <Stack.Screen
                        name="Encourage"
                        component={EncouragementScreen}
                        options={{
                            ...defaultNavigationOptions,
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Stats"
                        component={StatsScreen}
                        options={{
                            ...defaultNavigationOptions,
                        }}
                    />
                    <Stack.Screen
                        name="History"
                        component={History}
                        options={{
                            ...defaultNavigationOptions,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
const defaultNavigationOptions = {
    headerTitle: (props) => <MainTitle {...props} />,
    headerStyle: {
        backgroundColor: "#64dfdf",
    },
    headerTintColor: "#fff",
    headerLeft: null,
};
const homepageSettings = {
    headerTitle: (props) => (
        <View style={styles.settingHeader}>
            <CustomButton
                style={styles.setting}
                ChildComponent={SettingButton}
                // onPress={}
            />
            <MainTitle {...props} />
        </View>
    ),
};
const statsMenu = {
    headerTitle: (props) => (
        <View style={styles.settingHeader}>
            <CustomButton
                style={styles.setting}
                ChildComponent={StatsIcon}
                onPress={() => {
                    props.navigation.push("Stats");
                }}
            />
            <MainTitle {...props} />
        </View>
    ),
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    settingHeader: {
        // flexDirection: "row",
        // backgroundColor: "red",
    },
    setting: {
        position: "absolute",
        backgroundColor: null,
        top: 0,
    },
});
