import React, { useState } from "react";

import { Menu, MenuMobile } from "./styles";

import { Link } from "react-router-dom";

import HomeIcon from "../../assets/home.svg";
import FakeIcon from "../../assets/fakenewsicon.svg";
import GroupIcon from "../../assets/group.svg";
import AboutIcon from "../../assets/about.svg";
import Logout from "../../assets/logout.svg";
import Profile from "../../assets/profile.svg";
import Suggestions from "../../assets/suggestions.svg";

function MenuComponent() {
    const [widthscreen, setWidthscreen] = useState(window.screen.width);

    const logout = () => {
        localStorage.removeItem("qwert");
        document.location.reload(true);
    };

    return (
        <>
            {/* {
                widthscreen < 900 && <MenuMobile id="section1">
                    
                </MenuMobile> 
            }
            {widthscreen >= 900 && (  */}
            <Menu>
                <Link to="/detector" style={{ textDecoration: "none" }}>
                    <button>
                        <div className="cell">
                            <img className="icon" src={FakeIcon} alt="" />
                            <p>Detector</p>
                        </div>
                    </button>
                </Link>
                <Link to="/groups" style={{ textDecoration: "none" }}>
                    <button>
                        <div className="cell">
                            <img className="icon" src={GroupIcon} alt="" />
                            <p>Grupos</p>
                        </div>
                    </button>
                </Link>
                <Link to="/suggestions" style={{ textDecoration: "none" }}>
                    <button>
                        <div className="cell">
                            <img className="icon" src={Suggestions} alt="" />
                            <p>Sugestão</p>
                        </div>
                    </button>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                    <button>
                        <div className="cell">
                            <img className="icon" src={AboutIcon} alt="" />
                            <p>Sobre Nós</p>
                        </div>
                    </button>
                </Link>
                {widthscreen < 900 && (
                    <>
                        <Link to="/profile" style={{ textDecoration: "none" }}>
                            <button>
                                <div className="cell">
                                    <img className="icon" src={Profile} alt="" />
                                </div>
                            </button>
                        </Link>
                        <a onClick={logout} style={{ textDecoration: "none" }}>
                            <button>
                                <div className="cell">
                                    <img className="icon" src={Logout} alt="" />
                                </div>
                            </button>
                        </a>
                    </>
                )}
                {widthscreen >= 900 && (
                    <>
                        <Link to="/profile" style={{ textDecoration: "none", position: "absolute", left: "80vw" }}>
                            <button>
                                <div className="cell">
                                    <img className="icon" src={Profile} alt="" />
                                </div>
                            </button>
                        </Link>
                        <a onClick={logout} style={{ textDecoration: "none", position: "absolute", left: "80vw", marginLeft: 80 }}>
                            <button>
                                <div className="cell">
                                    <img className="icon" src={Logout} alt="" />
                                </div>
                            </button>
                        </a>
                    </>
                )}
            </Menu>
            {/* )} */}
        </>
    );
}

export default MenuComponent;
