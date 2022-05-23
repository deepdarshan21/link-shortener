import Typography from "../components/Typography";
import Hover from "../components/Hover";
import theme from "../styles/theme";
import Facebook from "../assets/icon-facebook.svg";
import Instagram from "../assets/icon-instagram.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import Twitter from "../assets/icon-twitter.svg";

const Footer = () => {
    return (
        <footer
            style={{
                background: "#232027",
                color: "white",
                padding: "20px 30px",
                display: "flex",
                justifyContent: "space-evenly",
            }}
        >
            <div style={{ width: "300px" }}>
                <Typography component="h4" fontSize="28px">
                    Shortly
                </Typography>
                <span style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                    <Hover>
                        <img src={Facebook.src} alt="Facebook" />
                    </Hover>
                    <Hover>
                        <img src={Twitter.src} alt="Twitter" />
                    </Hover>
                    <Hover>
                        <img src={Pinterest.src} alt="Pinterest" />
                    </Hover>
                    <Hover>
                        <img src={Instagram.src} alt="Instagram" />
                    </Hover>
                </span>
            </div>
            <div>
                <Typography component="h4">Features</Typography>
                <Hover>
                    <a>Link Shortening</a>
                </Hover>
                <Hover>
                    <a>Branded Links</a>
                </Hover>
                <Hover>
                    <a>Analytics</a>
                </Hover>
            </div>
            <div>
                <Typography component="h4">Resouces</Typography>
                <Hover>
                    <a>Blogs</a>
                </Hover>
                <Hover>
                    <a>Developers</a>
                </Hover>
                <Hover>
                    <a>Support</a>
                </Hover>
            </div>
            <div>
                <Typography component="h4">Company</Typography>
                <Hover>
                    <a>About</a>
                </Hover>
                <Hover>
                    <a>Our Team</a>
                </Hover>
                <Hover>
                    <a>Careers</a>
                </Hover>
                <Hover>
                    <a>Contacts</a>
                </Hover>
            </div>
        </footer>
    );
};

export default Footer;
