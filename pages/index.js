import Typography from "../components/Typography";
import theme from "../styles/theme";

export default function Home() {
    return (
        <>
            <Typography component="h1" fontSize="70px" color={theme.color.GrayishViolet} toUpper>
                Deepdarshan
            </Typography>
        </>
    );
}
