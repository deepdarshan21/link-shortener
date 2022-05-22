import styled from "styled-components";
import { variant } from "styled-system";

const TypographyBase = (props) => {
    return <props.component className={props.className}>{props.children}</props.component>;
};

const Typography = styled(TypographyBase)({
    fontSize: (props) => (props.fontSize ? props.fontSize : "14px"),
    color: (props) => props.color,
    textTransform: (props) => (props.toUpper ? "uppercase" : "none"),
    margin: (props) => props.margin,
    "&:hover": {
        color: (props) => props.hover && (props.hoverColor ? props.hoverColor : "black"),
        cursor: (props) => (props.hover ? "pointer" : "auto"),
    },
});

export default Typography;
