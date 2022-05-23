import Navbar from "../layout/Navbar";
import ShortendLinkInfo from "../layout/ShortendLinkInfo";
import Typography from "../components/Typography";
import Button from "../components/Button";
import Input from "../components/Input";
import theme from "../styles/theme";
import People from "../assets/people-working.png";
import Meteor from "../assets/Meteor.png";
import { useState } from "react";
import axios from "axios";
import UpperFooter from "../layout/UpperFooter";

export default function Home() {
    const [record, updateRecord] = useState([]);
    const [url, setUrl] = useState("");

    const handleShortLinkClick = (e) => {
        e.preventDefault();
        if (url === "") {
            alert("Please enter the link...");
            return;
        }
        axios
            .post("https://api.shrtco.de/v2/shorten", null, {
                params: {
                    url,
                },
            })
            .then((res) =>
                updateRecord((old) => [
                    ...old,
                    { link: url, shortLink: res.data.result.short_link },
                ])
            )
            .catch((err) => {
                alert("Error");
            });
        setUrl("");
    };

    return (
        <>
            <Navbar />
            <Typography
                component="h1"
                fontSize="72px"
                color={theme.color.VeryDarkBlue}
                toUpper
                fontWeight="700"
                align="center"
                margin="25px 8vw"
            >
                More than just
                <br /> shorter links
            </Typography>
            <img
                src={People.src}
                alt="People"
                width="30%"
                style={{ display: "block", margin: "auto" }}
            />
            <div style={{ margin: "25px 8vw" }}>
                <div
                    style={{
                        background: `url(${Meteor.src})`,
                        padding: "30px 50px",
                        display: "flex",
                    }}
                >
                    <Input
                        type="url"
                        placeholder="Shorten a link here..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <span
                        style={{
                            margin: "auto",
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            variant="rect"
                            fontWeight="700"
                            padding="10px 24px"
                            hoverBackgroundColor={theme.color.secondry.Red}
                            onClick={handleShortLinkClick}
                        >
                            Shorten it!
                        </Button>
                    </span>
                </div>
                {record.map((item) => (
                    <ShortendLinkInfo link={item.link} shortLink={item.shortLink} />
                ))}
            </div>
            <Typography
                component="h5"
                fontSize="44px"
                color={theme.color.VeryDarkBlue}
                fontWeight="700"
                align="center"
                margin="60px 8vw 20px"
            >
                Advanced Statistics
            </Typography>
            <Typography
                component="p"
                fontSize="20px"
                color={theme.color.GrayishViolet}
                align="center"
                margin="25px 8vw"
            >
                Track how your links are performing accross the web with
                <br />
                our advanced statistics dashboard.
            </Typography>
            <UpperFooter />
        </>
    );
}
