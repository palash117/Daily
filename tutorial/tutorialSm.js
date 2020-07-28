import React, { useState } from "react";

import WelcomeToTutorial from "./WelcomeToTutorial";
import AddGoalTutorial from "./AddGoalTutorial";
import CheckUncheckTutorial from "./CheckUncheckTutorial";
import EditAndDeleteGoalTutorial from "./EditAndDeleteGoalTutorial";
const { default: HomePageTutorial } = require("./HomePageTutorial");

class TutorialSm {
    constructor() {
        this.states = [
            WelcomeToTutorial,
            HomePageTutorial,
            AddGoalTutorial,
            CheckUncheckTutorial,
            EditAndDeleteGoalTutorial,
        ];
        this.size = this.states.length;
        this.index = 0;
    }
    prevAvailable = () => {
        if (this.index == 0) {
            return false;
        }
        return true;
    };
    nextAvailable = () => {
        if (this.index == this.size - 1) {
            return false;
        }
        return true;
    };
    prev = () => {
        if (this.prevAvailable()) {
            this.index--;
        }
        return this.states[this.index];
    };
    next = () => {
        if (this.nextAvailable()) {
            this.index++;
        }
        return this.states[this.index];
    };
    start = () => {
        this.index = 0;
        return this.states[this.index];
    };
}

export default createTutorialSm = () => {
    return new TutorialSm();
};
