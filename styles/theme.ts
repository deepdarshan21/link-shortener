const theme = {
    color: {
        primary: {
            Cyan: "#2acfcf",
            DarkViolet: "#3b3054",
        },
        secondry: {
            Red: " #f46262",
        },
        Gray: "#bfbfbf",
        GrayishViolet: "#9e9aa7",
        VeryDarkBlue: "#35323e",
        VeryDarkViolet: "#232127",
    },
    fontSizes: {
        body: "18px",
    },
    mediaQueries: {
        mobile: `@media screen and (min-width: "375px")`,
        desktop: `@media screen and (min-width: "1440px")`,
    },
} as const;

export default theme;
