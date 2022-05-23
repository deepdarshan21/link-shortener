import styled from "styled-components";
import { variant } from "styled-system";
import theme from "../styles/theme";

const Button = styled("button")(
    {
        color: (props) => (props.color ? props.color : "white"),
        fontSize: (props) => (props.fontSize ? props.fontSize : "16px"),
        fontWeight: (props) => props.fontWeight,
        backgroundColor: (props) =>
            props.backgroundColor ? props.backgroundColor : theme.color.primary.Cyan,
        padding: (props) => props.padding,
        border: 0,
        "&:hover": {
            backgroundColor: (props) => props.hoverBackgroundColor,
            cursor: "pointer",
        },
    },
    (props) =>
        variant({
            variants: {
                rect: {
                    borderRadius: props.fontSize ? parseFloat(props.fontSize) / 3 : "5px",
                },
                oval: {
                    borderRadius: props.fontSize ? props.fontSize : "16px",
                },
            },
        })
);

export default Button;
