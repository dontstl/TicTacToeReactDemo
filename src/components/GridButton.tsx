import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
export const GridButton = styled(Button)(({theme}) => ({
    backgroundColor: "#FFF",
    borderColor: "",
    width: "75px",
    height: "75px",
    ...theme.typography.h2,
    textAlign: "center",
    disabled: false,
    color: theme.palette.text.secondary,
    typography: {
        fontSize: 7,
    },
    "&:hover": {
        background: "#FFF",
    },
}));