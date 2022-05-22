import Typography from "../components/Typography";
import Button from "../components/Button";
import theme from "../styles/theme";

export default function Home() {
    return (
        <>
            <Typography component="h1" fontSize="70px" color={theme.color.GrayishViolet} toUpper>
                Deepdarshan
            </Typography>
            <Button
                variant="oval"
                color="black"
                padding="10px 20px"
                fontSize="60px"
                fontWeight="500"
                hoverBackgroundColor="blue"
            >
                Deepdarshan
            </Button>
        </>
    );
}
