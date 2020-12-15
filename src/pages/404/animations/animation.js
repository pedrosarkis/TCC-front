// UncontrolledLottie.jsx
import React from "react";
import Lottie from "react-lottie";
import animationData from "./404.json";

function UncontrolledLottie(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return <Lottie options={defaultOptions} />;
}

export default UncontrolledLottie;
