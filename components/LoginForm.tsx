import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        margin: 'auto',
        '& > *': {
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'white',
            paddingBottom: 0,
            marginTop: 40,
            fontWeight: 500
        },
    },
    button: {
        color: "grey",
        alignContent: "center"
    },
}));
interface Iprops {
    isLoggedIn: boolean,
    setLog: () => void
}
const LoginForm: React.FC<Iprops> = (props) => {
    const { isLoggedIn, setLog } = props;
    const classes = useStyles();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        }
        else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    };
    const Submit = () => {
        console.log(isLoggedIn, "submit start")
        let emailVal = email;
        let passwordVal = password;


        if (emailVal === "") {
            alert("Email is required");
            return false;
        } else {
            let rejex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
            if (rejex.test(emailVal) === false) {
                alert("Enter a valid Email");
            }
        }

        if (passwordVal === "") {
            alert("Enter a password");
            return false;
        } else {

            let min = 6;
            let max = 20;
            let rejex = /^[a-zA-Z0-9]{6,20}$/;
            if (passwordVal.length < min || passwordVal.length > max) {
                alert("Password must be between 6 to 20 character");
                return false;
            }
            if (!rejex.test(passwordVal)) {
                alert("Password should not have symbols");
                return false;
            }
        }
        setLog()
    }

    return (
        <div>
            <form className={classes.root}  >
                <TextField
                    name="email"
                    label="Email"
                    type="email"
                    value={email}
                    variant="filled"
                    onChange={handleChange} />
                <TextField
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    variant="filled"
                    onChange={handleChange}
                />
                <Button className={classes.button} onClick={Submit} variant="outlined" color="primary"> Log IN </Button>

            </form>
        </div>
    )
}

export default LoginForm
