import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 11,
                    },
                },
                {
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: 9,
                    },
                },
            ],
        },
    },
    customGradient: {
        main: "linear-gradient(90deg, rgb(0, 61, 165) 2.6%, rgb(70, 219, 140) 100%)",
    },
});
export default theme;
