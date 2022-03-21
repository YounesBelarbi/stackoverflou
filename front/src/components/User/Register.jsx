
import { StyledRegister, StyledRegisterButton } from "../Styles/User/Register.styled";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebookSquare } from 'react-icons/fa';

import { useState } from "react";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickName, setNickName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onSubmitForm = () => {
        const data = {
            firstName,
            lastName,
            nickName,
            email,
            password
        }

        console.log(data);
    }
    return (
        <StyledRegister>
            <div className="register-container">

                <div className="left-section">
                    <h2>Register</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, placeat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nisi aliquam aut!</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <span></span>
                </div>
                <div className="right-section">
                    <div className="buttons">
                        <StyledRegisterButton bg="#fff" color="#2f3337"><FcGoogle className="google-icon" size="1.3em" /> s'inscrire avec Google</StyledRegisterButton>
                        <StyledRegisterButton bg="#2f3337" color="#fff"><FaGithub className="google-icon" size="1.3em" />s'inscrire avec GitHub</StyledRegisterButton>
                        <StyledRegisterButton bg="#385499" color="#fff"><FaFacebookSquare className="google-icon" size="1.3em" />s'inscrire avec Facebook</StyledRegisterButton>
                    </div>
                    <div className="form-container">
                        <form action=""
                            onSubmit={(e) => {
                                e.preventDefault();
                                onSubmitForm();
                            }}
                        >
                            <div>
                                <label htmlFor="firstName">
                                    Prénom
                                </label>
                                <input type="text" name="firstName" value={firstName} onChange={(e) => { setFirstName(e.target.value); console.log(e.target.value) }} />
                            </div>
                            <div>

                                <label htmlFor="lastname">
                                    Nom
                                </label>
                                <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div>

                                <label htmlFor="nickName">
                                    Pseud
                                </label>
                                <input type="text" name="nickName" value={nickName} onChange={(e) => setNickName(e.target.value)} />
                            </div>
                            <div>

                                <label htmlFor="email">
                                    Email
                                </label>
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>

                                <label htmlFor="password">
                                    Mot de passe
                                </label>
                                <input type="password" name="password" password={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <span></span>

                            <StyledRegisterButton bg="#0a95ff" color="#fff" type="submit">Valider</StyledRegisterButton>

                        </form>
                    </div>
                </div>
            </div>
        </StyledRegister>
    )
}

export default Register;