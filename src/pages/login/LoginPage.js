import React, { useState } from "react";

// react router
import { useNavigate, Link } from "react-router-dom";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// firebase
import { auth } from "libs/firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

// ui
import { LogInButton } from "ui/buttons";
import { FormCheck } from "react-bootstrap";

// icons
import * as BiIcons from "react-icons/bi";

// styles
import {
    SplitScreen,
    Left,
    Right,
    MainHeading,
    SectionFirst,
    Form,
    SectionCopy,
    InputContainer,
    InputLabel,
    InputBox,
    CheckBoxZone,
} from "./styles";

function LoginPage(props) {
    let navigator = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const notify = (error) =>
        toast.error(error.code, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            icon: <BiIcons.BiMessageSquareError />,
        });

    function onHandleSubmit(e) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // move dashboard page
                // useNavigate() react router
                navigator("dashboard");
            })
            .catch((error) => {
                notify(error);
            });
    }

    return (
        <>
            <SplitScreen>
                <ToastContainer />
                <Left>
                    <SectionFirst>
                        <MainHeading>JCFigures Dashboard</MainHeading>
                        <p>
                            JC Storefront which sells gaming statues and
                            figurines
                        </p>
                    </SectionFirst>
                </Left>
                <Right>
                    <Form onSubmit={onHandleSubmit}>
                        <SectionCopy>
                            <h2>Sign In</h2>
                            <div>
                                <p>
                                    Don't have an account?{" "}
                                    <Link to="/">
                                        <strong>Sign Up</strong>
                                    </Link>
                                </p>
                                {/* <Link to="/">Login Page</Link>
                                <Link to="/dashboard">Dashboard Page</Link> */}
                            </div>
                        </SectionCopy>

                        <InputContainer>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <InputBox
                                type="text"
                                placeholder="janedoe@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                            ></InputBox>
                        </InputContainer>

                        <InputContainer>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <InputBox
                                type="password"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                            ></InputBox>
                        </InputContainer>

                        <CheckBoxZone>
                            <FormCheck />
                            <p>Remember Password</p>
                        </CheckBoxZone>

                        <LogInButton
                            type="submit"
                            bg="orange"
                            padding="1rem"
                            color="#212121"
                        >
                            Sign In
                        </LogInButton>
                    </Form>
                </Right>
            </SplitScreen>
        </>
    );
}

export default LoginPage;
