import React, { useState, useEffect, useReducer } from "react";
import Menu from "../../components/menu/index";
import News from "./news/index";
import { useHistory, Link } from "react-router-dom";

import { useAlert, types } from "react-alert";
import { useForm } from "react-hook-form";

import { BiLeftArrowAlt, BiTimeFive } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { MdClose } from "react-icons/md";

import { Container, ViewNews } from "./styles";

const Profile = () => {
    const alert = useAlert();
    const history = useHistory();

    const [showSettings, setshowSettings] = useState(false);

    const [email, setEmail] = useState("");
    const [historicNews, setHistoricNews] = useState([]);

    const { register, handleSubmit } = useForm();

    const handleChange = (evt) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({ [name]: newValue });
    };

    const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }), {
        oldPassword: "",
        newPassword: "",
        newPasswordAgain: "",
        isFakeNews: [],
    });

    const handleshowSettings = () => {
        showSettings === true ? setshowSettings(false) : setshowSettings(true);
    };

    const getProfileData = async () => {
        const user = localStorage.getItem("user");
        const authorization = localStorage.getItem("qwert");
        const settings = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: authorization,
            },
        };
        try {
            const response = await fetch(`https://tcspedroverani.herokuapp.com/user/history?user=${user}`, settings);
            const data = await response.json();
            return data;
        } catch (error) {}
    };

    const changePassword = async (data) => {
        const user = localStorage.getItem("user");

        const oldPassword = data.oldPassword;
        const newPassword = data.newPassword;
        const newPasswordAgain = data.newPasswordAgain;

        if (newPassword !== newPasswordAgain) alert.show("As senhas não conferem");

        const authorization = localStorage.getItem("qwert");
        const settings = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: authorization,
            },
            body: JSON.stringify({ oldPassword, newPassword, email: user }),
        };

        try {
            const response = await fetch(`https://tcspedroverani.herokuapp.com/user/changePassword`, settings);
            const data = await response.json();
            console.log(data);
            if (data.success === true) {
                alert.show(data.message, { type: types.SUCCESS });
            } else if (data.success === false) {
                alert.show(data.error, { type: types.ERROR });
            } else {
                alert.show("Problemas no servidor, tente novamente mais tarde.");
            }
        } catch (error) {}
    };

    const cleanUserHistory = async () => {
        const authorization = localStorage.getItem("qwert");
        const user = localStorage.getItem("user");
        alert.show("Histórico limpo.", { type: types.SUCCESS });
        const settings = {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: authorization,
            },
            body: JSON.stringify({ user }),
        };

        try {
            const response = await fetch("https://tcspedroverani.herokuapp.com/user/clean ", settings);
            const data = await response.json();
            if (data.success) {
                console.log("Histórico limpo com sucesso");
                alert.show("Histórico limpo com sucesso");
                window.location.reload(true);
            }
        } catch (error) {}
    };

    const deleteAccount = async () => {
        const authorization = localStorage.getItem("qwert");
        const user = localStorage.getItem("user");

        const settings = {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: authorization,
            },
            body: JSON.stringify({ user }),
        };

        try {
            const response = await fetch("https://tcspedroverani.herokuapp.com/user/deleteAccount", settings);
            const data = await response.json();
            if (data.success) {
                localStorage.removeItem("qwert");
                document.location.reload(true);
            }
        } catch (error) {}
    };

    useEffect(() => {
        (async () => {
            const data = await getProfileData();

            setHistoricNews(data.news);

            let fakes = data.news.filter((elem) => elem.isFakeNews === true);
            setUserInput({ ["isFakeNews"]: fakes });
        })();

        setEmail(localStorage.getItem("user"));
    }, []);

    function overlay() {
        let el = document.getElementById("overlay");
        el.style.visibility = el.style.visibility == "visible" ? "hidden" : "visible";
    }
    return (
        <>
            <Menu />
            <Container>
                <div id="profile-container">
                    <div id="nav">
                        <button id="voltar" style={{ marginLeft: 5 }}>
                            <BiLeftArrowAlt
                                id="left-arrow"
                                onClick={() => {
                                    history.goBack();
                                }}
                            />
                        </button>
                        <p>Perfil</p>
                        <AiOutlineSetting id="change-password" onClick={handleshowSettings} />
                    </div>

                    {showSettings && (
                        <>
                            <div id="title-change-password">
                                <h2>Troque sua senha</h2>
                            </div>

                            <form id="div-change-settings" onSubmit={handleSubmit(changePassword)}>
                                <div>
                                    <p>Senha atual</p>
                                    <input
                                        name="oldPassword"
                                        type="password"
                                        value={userInput.oldPassword}
                                        onChange={handleChange}
                                        ref={register({ required: true })}
                                    />
                                </div>
                                <div>
                                    <p>Nova Senha</p>
                                    <input
                                        name="newPassword"
                                        type="password"
                                        value={userInput.newPassword}
                                        onChange={handleChange}
                                        ref={register({ required: true })}
                                    />
                                </div>
                                <div>
                                    <p>Repita a nova senha</p>
                                    <input
                                        name="newPasswordAgain"
                                        type="password"
                                        value={userInput.newPasswordAgain}
                                        onChange={handleChange}
                                        ref={register({ required: true })}
                                    />
                                </div>

                                <div>
                                    <button type="submit">Alterar</button>
                                </div>
                            </form>
                            <div id="div-footer-settings">
                                <div id="button-clean-historic">
                                    <button onClick={() => cleanUserHistory()}>Limpar Histórico</button>
                                </div>
                                <div id="button-delete-account">
                                    <button onClick={() => overlay()}>Deletar conta</button>
                                </div>

                                <div id="overlay">
                                    <div id="close-overlay">
                                        <button onClick={() => overlay()}>
                                            <MdClose style={{ cursor: "pointer" }} />
                                        </button>
                                    </div>
                                    <div id="confirm-delete">
                                        <h3>Você realmente deseja deletar sua conta?</h3>
                                        <button onClick={() => deleteAccount()}>
                                            <h4>Sim, desejo deletar minha conta</h4>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <div id="person">
                        <img id="image-profile" src={`https://avatars.dicebear.com/api/initials/${email}.svg`} alt="" />
                        <p>{email}</p>
                    </div>
                    <div id="infos">
                        <div>
                            <p>{historicNews.length}</p>
                            <small>Noticias Pesquisadas</small>
                        </div>
                        <div>
                            <p>{userInput.isFakeNews.length}</p>
                            <small>Noticias Falsas</small>
                        </div>
                    </div>
                    <div id="content">
                        <h2>Historico</h2>
                        {historicNews == "" && <p>Você ainda não detectou noticias.</p>}
                        {historicNews.map((elem) => (
                            <Link
                                to={{
                                    pathname: `/profile/${elem._id}`,
                                    state: { content: elem.content, date: elem.createdAt, isFakeNews: elem.isFakeNews },
                                }}
                                key={elem._id}
                                style={{ textDecoration: "none" }}
                            >
                                <button id="news">
                                    <div id="news-image">
                                        {elem.url ? (
                                            <img src={`https://s2.googleusercontent.com/s2/favicons?domain=${elem.url}`} alt="" />
                                        ) : (
                                            <img src={`https://cdn2.iconfinder.com/data/icons/picol-vector/32/news-512.png`} alt="" />
                                        )}
                                    </div>
                                    {elem.url ? <p>{elem.url}aa</p> : <p>{elem.content}</p>}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Profile;
