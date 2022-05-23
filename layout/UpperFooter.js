import Typography from "../components/Typography";
import Button from "../components/Button";
import theme from "../styles/theme";
import Meteor from "../assets/Meteor.svg";

const UpperFooter = () => {
    return (
        <div style={{ background: `url(${Meteor.src})`, backgroundRepeat: "repeat", textAlign: "center", padding: "32px 0 60px" }}>
            <Typography component="h6" color="white" fontSize="32px" margin="24px">
                Boost your links today
            </Typography>
            <Button variant="oval" fontSize="24px" padding="10px 20px">Get Started</Button>
        </div>
    );
};

export default UpperFooter;
