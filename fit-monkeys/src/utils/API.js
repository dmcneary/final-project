import axios from "axios";

export default {
    newUser: () => {
        return axios.post("users/signup");
    },
    userLogin: () => {
        return axios.get("users/login");
    }
}