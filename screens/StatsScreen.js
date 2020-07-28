import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import CustomButton from "../components/button/CustomButton";
import BackIcon from "../components/icons/BackIcon";
import { fetchHistory } from "../state/actions/history";
import { ContributionGraph } from "react-native-chart-kit";

const StatsScreen = ({ navigation, history, fetchHistory }) => {
    const { fulldateMap } = history ? history : {};
    useEffect(() => {
        fetchHistory();
    }, []);
    console.log("datemap at statsscreen", fulldateMap);
    return (
        <View style={styles.main}>
            <View style={styles.heatmap}>
                <Text style={styles.headmapMessage}>
                    Your last 2 months goal completion heat map
                </Text>
                {fulldateMap && fulldateMap.length > 0 && (
                    <ContributionGraph
                        values={fulldateMap}
                        endDate={new Date()}
                        numDays={60}
                        width={300}
                        height={220}
                        chartConfig={{
                            backgroundColor: "#FFCB77",
                            backgroundGradientFrom: "#05B2DC",
                            backgroundGradientTo: "#FFCB77",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) =>
                                `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) =>
                                `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726",
                            },
                        }}
                    />
                )}
            </View>
            <View style={styles.buttons}>
                <CustomButton
                    title={"add goal"}
                    onPress={() => {
                        navigation.pop();
                    }}
                    ChildComponent={BackIcon}
                    style={styles.button}
                ></CustomButton>
            </View>
        </View>
    );
};

const mapStateToProps = (state) => {
    console.log("logging redux state", state);
    return { history: state.history };
};
const mapActionsToProps = { fetchHistory };
export default connect(mapStateToProps, mapActionsToProps)(StatsScreen);

const styles = StyleSheet.create({
    main: {
        height: "99.99%",
        width: "100%",
        alignItems: "center",
        textAlign: "center",
        // justifyContent: "center",
    },
    heatmap: {},
    headmapMessage: {
        textAlign: "center",
    },
    buttons: {
        position: "absolute",
        width: "100%",
        // height: "100%",
        bottom: 50,
        right: 30,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    button: {
        backgroundColor: null,
        width: 50,
        height: 50,
    },
});
