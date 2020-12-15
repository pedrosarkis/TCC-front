import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { LostAccountArea } from "./styles";

import { useForm } from "react-hook-form";

import LeftArrow from "../../../../assets/left-arrow.svg";
import Animation from "./animation";

function SwitchPages() {
    const { register, handleSubmit } = useForm();

    const [email, setEmail] = useState("");
    const [play, setPlay] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
        setPlay(false);
    };

    const submit = async (data) => {
        const response = await axios.post("https://tcspedroverani.herokuapp.com/user/recover", data);
        if (response.data.success === "ok") alert("Uma nova senha foi enviada para o e-mail informado");
        setPlay(false);
    };

    return (
        <>
            <LostAccountArea>
                <div className="header">
                    <div>
                        <Link to="/">
                            <img src={LeftArrow} alt="" className="back-icon" />
                        </Link>
                    </div>
                    <div className="div-title-header">
                        <p className="title-header">Recuperação de conta</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <div>
                        <span>E-mail</span>
                        <input name="email" onChange={handleChange} ref={register({ required: true })} />
                    </div>
                    <div>
                        <Animation autoplay={false} />
                    </div>

                    <button type="submit">Recuperar</button>
                </form>
            </LostAccountArea>
        </>
    );
}

export default SwitchPages;
