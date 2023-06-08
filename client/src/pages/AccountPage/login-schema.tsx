import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    username: Yup.string().ensure()
    .required("Please enter your usrname")
    .max(100,"Too long username"),
    password: Yup.string().ensure()
    .required("Please enter your password")
    .min(2,"Your password is too short")
});