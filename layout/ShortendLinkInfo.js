import Typography from "../components/Typography";
import Button from "../components/Button";
import theme from "../styles/theme";
import { useState } from "react";

const ShortendLinkInfo = (props) => {
    const [copyState, setCopyState] = useState("Copy");
    const handleClick = (e) => {
        e.preventDefault();
        setCopyState("Copied");
        navigator.clipboard.writeText(props.shortLink);
        setTimeout(() => setCopyState("Copy"), 1000);
    };

    return (
        <>
            <div
                style={{
                    background: "orange",
                    margin: "10px 20px",
                    padding: "3px 25px",
                    borderRadius: "5px",
                    display: "flex",
                    // alignItems: "space-between",
                    justifyContent: "space-between",
                }}
            >
                <Typography component="p">{props.link}</Typography>
                <span style={{ margin: "auto 0", display: "flex" }}>
                    <Typography component="p">{props.shortLink}</Typography>
                    <span style={{ margin: "auto 0 auto 20px" }}>
                        <Button
                            variant="rect"
                            fontWeight="500"
                            padding="5px 20px"
                            hoverBackgroundColor={theme.color.secondry.Red}
                            onClick={handleClick}
                        >
                            {copyState}
                        </Button>
                    </span>
                </span>
            </div>
        </>
    );
};

export default ShortendLinkInfo;
