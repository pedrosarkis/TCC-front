// UncontrolledLottie.jsx
import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./send-email.json";

function UncontrolledLottie(props) {
    const defaultOptions = {
        loop: false,
        autoplay: props.autoplay,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return <Lottie options={defaultOptions} />;
}

export default UncontrolledLottie;
