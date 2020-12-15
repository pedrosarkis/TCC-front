import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { CreateArea } from "./styles";

import axios from "axios";
import { useForm } from "react-hook-form";

import LeftArrow from "../../../../assets/left-arrow.svg";

function SwitchPages() {
    const { register, handleSubmit } = useForm();

    const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }), {
        email: "",
        password: "",
        passAgain: "",
    });

    const handleChange = (evt) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({ [name]: newValue });
    };

    const createAccount = async (data) => {
        if (userInput.password !== userInput.passAgain) {
            alert("As senhas não conferem");
            return false;
        }
        console.log(data);

        try {
            const response = await axios.post("https://tcspedroverani.herokuapp.com/user/create", data);
            if (response.data.auth) {
                localStorage.setItem("qwert", response.data.token);
                localStorage.setItem('user', response.data.user);
                window.location.href = "/detector";
            }
        } catch (error) {}
    };

    return (
        <CreateArea>
            <div className="header">
                <div>
                    <Link to="/">
                        <img src={LeftArrow} alt="" className="back-icon" />
                    </Link>
                </div>
                <div className="div-title-header">
                    <p className="title-header">Criação de conta</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(createAccount)}>
                <div>
                    <span>E-mail</span>
                    <input name="email" value={userInput.email} onChange={handleChange} ref={register({ required: true })} />
                </div>
                <div>
                    <span>Senha</span>
                    <input name="password" type="password" value={userInput.password} onChange={handleChange} ref={register({ required: true })} />
                </div>
                <div>
                    <span>Repita sua senha</span>
                    <input name="passAgain" type="password" value={userInput.passwordAgain} onChange={handleChange} ref={register({ required: true })} />
                </div>
                <button type="submit">Criar</button>
            </form>
        </CreateArea>
    );
}

export default SwitchPages;
