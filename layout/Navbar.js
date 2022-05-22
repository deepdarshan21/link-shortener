import Typography from "../components/Typography";
import theme from "../styles/theme";

const Navbar = (props) => {
    return (
        <header style={{ display: "inline-flex" }}>
            <Typography component="h4" fontSize="26px">
                Shortly
            </Typography>
            <Typography component="h6" margin="auto 16px auto 32px" color={theme.color.Gray} hover>
                Features
            </Typography>
            <Typography component="h6" margin="auto 16px" color={theme.color.Gray} hover>
                Pricing
            </Typography>
            <Typography component="h6" margin="auto 16px" color={theme.color.Gray} hover>
                Resources
            </Typography>
        </header>
    );
};

export default Navbar;
