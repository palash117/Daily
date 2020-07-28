import React from "react";
import { View, Text } from "react-native";
import WelcomeToTutorial from "./WelcomeToTutorial";
import HomePageTutorial from "./HomePageTutorial";
import AddGoalTutorial from "./AddGoalTutorial";
import EditAndDeleteGoalTutorial from "./EditAndDeleteGoalTutorial";
import CheckUncheckTutorial from "./CheckUncheckTutorial";
import TutorialEnd from "./TutorialEnd";

const TutorialWrapper = (props) => {
    const { state } = props;
    switch (state + 1) {
        case 1:
        default:
            return <WelcomeToTutorial {...props} />;
        case 2:
            return <AddGoalTutorial {...props} />;
        case 3:
            return <CheckUncheckTutorial {...props} />;
        case 4:
            return <EditAndDeleteGoalTutorial {...props} />;
        case 5:
            return <TutorialEnd {...props} />;
    }
};

export default TutorialWrapper;
