import styled from "styled-components";

const TypographyBase = (props) => {
    return <props.component className={props.className}>{props.children}</props.component>;
};

const Typography = styled(TypographyBase)({
    fontSize: (props) => props.fontSize,
    color: (props) => props.color,
    textTransform: (props) => (props.toUpper ? "uppercase" : "none"),
});

export default Typography;
