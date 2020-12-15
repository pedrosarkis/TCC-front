import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

import { LoginArea, LinkCreateAccount } from "./styles.js";

import { useForm } from "react-hook-form";

function SwitchPages(props) {
    const alert = useAlert();
    const { register, handleSubmit } = useForm();

    const handleChange = (evt) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({ [name]: newValue });
    };

    const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }), {
        userName: "",
        userPassword: "",
        news: 0,
        emails: 0,
    });

    const loginPage = async (data) => {
        const settings = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        };
        try {
            const response = await fetch("https://tcspedroverani.herokuapp.com/user/login", settings);
            const dataReturned = await response.json();
            if (dataReturned.error === "A senha está incorreta" || dataReturned.error === "Usuário não encontrado") {
                alert.show("E-mail ou senha está incorreta");
            }
            if (dataReturned.success) {
                window.localStorage.setItem("qwert", dataReturned.token);
                window.localStorage.setItem("user", data.userName);
                window.location.href = "/detector";
            }
        } catch (error) {
            alert.show("Erro ao fazer login");
        }
    };

    return (
        <>
            <LinkCreateAccount>
                <Link to="/createaccount" style={{ textDecoration: "none" }}>
                    <span>Crie sua conta</span>
                </Link>
            </LinkCreateAccount>
            <LoginArea>
                <form onSubmit={handleSubmit(loginPage)}>
                    <div>
                        <span>E-mail</span>
                        <input name="userName" value={userInput.userName} onChange={handleChange} ref={register({ required: true })} />
                    </div>
                    <div>
                        <span>Senha</span>
                        <input type="password" name="userPassword" value={userInput.userPassword} onChange={handleChange} ref={register({ required: true })} />
                        <Link to="/lostaccount" style={{ textDecoration: "none" }}>
                            <small className="lostaccount">Esqueceu sua senha?</small>
                        </Link>
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </LoginArea>
        </>
    );
}

export default SwitchPages;
