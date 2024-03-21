import React, { useState } from "react";
import "./Signin.css";

import emailIcon from "../../assets/email.png";
import personIcon from "../../assets/person.png";
import passwordIcon from "../../assets/password.png";
import { Paper } from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Center } from "@chakra-ui/layout";


const Signin = () => {
    const [action, setAction] = useState("Sign Up");

    return (
        <Paper className="container">
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"}onClick={() => {setAction("Sign Up");}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login");}}>Login</div>
            </div>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div>:
                    <div className="input">
                        <img src={personIcon} alt="" />
                        <input type="text" placeholder="Name" />
                    </div>
                }
                <div className="input">
                    <img src={emailIcon} alt="" />
                    <input type="email" placeholder="Email Id" />
                </div>
                <div className="input">
                    <img src={passwordIcon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Sign Up" ? <div></div>:<div className="forget-password">Lost Password? <span>Click Here</span></div>}
            <Stack spacing={2} direction="row" justifyContent= "Center" marginTop= "30px">
                <Button href="#text-buttons" variant="contained" color="primary">{action}</Button>
            </Stack>
        </Paper>
    );
};

export default Signin;
