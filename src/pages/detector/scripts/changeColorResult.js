function changecolor(news) {
    switch (news) {
        case true:
            return "#ccffdd";
        // case "provavelmente verdadeira":
        //     return "#e6ffee";
        // case "neutra":
        //     return "rgb(255, 219, 83)";
        // case "provavelmente falsa":
        //     return "#ffe6e6";
        case false:
            return "#ffcccc";
        default:
            return "rgb(255, 255, 255)";
    }
}

export { changecolor };
