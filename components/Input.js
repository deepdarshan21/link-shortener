import styled from "styled-components";
import theme from "../styles/theme";

const Input = styled("input")({
    fontSize: "16px",
    padding: "10px 25px",
    margin: "10px 20px",
    background: "white",
    border: "none",
    borderRadius: "8px",
    "&::placeholder": {
        color: theme.color.GrayishViolet,
    },
    flex: "6",
    width: "100%"
});

export default Input;
