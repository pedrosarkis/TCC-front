// UncontrolledLottie.jsx
import React from "react";
import Lottie from "react-lottie";
import animationData from "./done.json";

function UncontrolledLottie(props) {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return <Lottie options={defaultOptions} />;
}

export default UncontrolledLottie;
