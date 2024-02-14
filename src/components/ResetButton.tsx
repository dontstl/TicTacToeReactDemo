import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
export const ResetButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FFF',
    borderWidth: "5px",
    borderColor: '#OOF',
    width: '100px',
    height: '45px',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '&:hover': {
        background: "#0087ff",
    },
    variant:'contained'
}));