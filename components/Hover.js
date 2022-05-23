import styled from "styled-components";
import theme from "../styles/theme";

const UnstyledHover = (props) => {
    return <p className={props.className}>{props.children}</p>;
};

const Hover = styled(UnstyledHover)({
    // color: "red",
    textDecoration: "none",
    "&:hover": {
        color: theme.color.primary.Cyan,
        // fill: theme.color.primary.Cyan,
        // fill: "red",
        // filter: theme.color.primary.Cyan,
        filter: "invert(0.5)",
        cursor: "pointer",
    },
    // "&:first-child": {
    //     fill: "red",
    //     filter: "invert(0.5)",
    //     "&:hover": {
    //         background: "yellow",
    //         fill: "red",
    //     },
    // },
});
export default Hover;
