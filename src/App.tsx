import React, {useState} from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import {addSlash, removeClassNameByPrefix} from "./utils/addRemoveSlash";
import {GridButton} from "./components/GridButton"
import {ResetButton} from "./components/ResetButton"
import Snackbar from "@mui/material/Snackbar";
import {Alert} from "@mui/material";


let playerXSelections: number[] = [];
let playerOSelections: number[] = [];
let winningSelection: string = "";

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function App() {

    const [winner, setWinner] = useState<string>("");
    const [currentPlayer, setCurrentPlayer] = useState<string>("X");
    const [xScore, setXscore] = useState<number>(0);
    const [oScore, setOscore] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    const winCheck = (arr: any[], target: any[]) => target.every(v => arr.includes(v));
    const reset = () => {
        const buttonsList = document.querySelectorAll(".tickButton");
        buttonsList.forEach(function (btn, currentIndex, listObj) {
            btn.innerHTML = "";
            btn.removeAttribute("disabled");

        })
        const slashCont = document.getElementById("slash-cont")!;
        setWinner("");
        setCurrentPlayer("X");
        playerXSelections = [];
        playerOSelections = [];
        if (winningSelection.length) {
            removeClassNameByPrefix(slashCont, "slash-");
        }
        winningSelection = "";
    }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        if (winner.length) return
        if (playerOSelections.length >= 4 && playerXSelections.length >= 4 && winner === "") {
            setWinner("No winner this time :(");
            setOpen(true);
        }

        if (currentPlayer === "X") {
            setCurrentPlayer("O");
            const selectedPosition: number = Number(event.currentTarget.id.split("item")[1]);
            playerXSelections.push(selectedPosition);
            const square: HTMLFormElement = (document.getElementById(event.currentTarget.id) as HTMLFormElement)!;
            square.innerHTML = "X";
            square.disabled = true;

            for (let i = 0; i < winningConditions.length; i++) {
                if (winCheck(playerXSelections, winningConditions[i])) {
                    winningSelection = (winningConditions[i].toString())
                    setWinner("The winner is X");
                    setXscore(xScore + 1)
                    addSlash(winningSelection)
                    setOpen(true);
                }
            }

        } else if (currentPlayer === "O") {
            setCurrentPlayer("X")
            const selectedPosition: number = Number(event.currentTarget.id.split("item")[1]);
            playerOSelections.push(selectedPosition);
            const square: HTMLFormElement = (document.getElementById(event.currentTarget.id) as HTMLFormElement)!;
            square.innerHTML = "O";
            square.disabled = true;

            for (let i = 0; i < winningConditions.length; i++) {
                if (winCheck(playerOSelections, winningConditions[i])) {
                    winningSelection = (winningConditions[i].toString())
                    setWinner("The winner is O");
                    setOscore(oScore + 1)
                    addSlash(winningSelection)
                    setOpen(true)
                }
            }
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <h2 data-testid="header">Tic Tac Toe</h2>
            </header>
            <section className="score">
                <div>Score</div>
                <table>
                    <thead>
                    <tr>
                        <th className="top-left">
                            <span>Player X</span>
                        </th>
                        <th>
                            <span>Player O</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-testid="xScore">
                            {xScore}
                        </td>
                        <td className="bottom-right" data-testid="oScore">
                            {oScore}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <div id="slash-cont" data-testid="slash-cont"  className="column1Down"></div>
                <Grid container spacing={3} width={250} rowSpacing={1} columnSpacing={1}>
                    <Grid item xs={4}>
                        <GridButton className="tickButton" disableRipple={true} onClick={handleClick} id="item0"
                                    data-testid="item0"></GridButton>
                    </Grid>
                    <Grid item xs={4}>
                        <GridButton className="tickButton" disableRipple={true} onClick={handleClick} id="item1"
                                    data-testid="item1"></GridButton>
                    </Grid>
                    <Grid item xs={4}>
                        <GridButton className="tickButton" disableRipple={true} onClick={handleClick} id="item2"
                                    data-testid="item2"></GridButton>
                    </Grid>
                    <Grid item xs={4}>
                        <GridButton className="tickButton" disableRipple={true} onClick={handleClick} id="item3"
                                    data-testid="item3"></GridButton>
                    </Grid>
                    <Grid item xs={4}>
                        <GridButton className="tickButton" disableRipple={true} onClick={handleClick} id="item4"
                                    data-testid="item4"></GridButton>
                    </Grid>
                    <Grid item xs={4}>
                        <GridButton className="tickButton" disableRipple={true} onClick={handleClick} id="item5"
                                    data-testid="item5"></GridButton>
                    </Grid>
                    <Grid item xs={4}>
                        <GridButton className="tickButton" disableRipple={true} onClick={handleClick} id="item6"
                                    data-testid="item6"></GridButton>
                    </Grid>
                    <Grid item xs={4}>
                        <GridButton className="tickButton" disableRipple={true} onClick={handleClick} id="item7"
                                    data-testid="item7"></GridButton>
                    </Grid>
                    <Grid item xs={4}>
                        <GridButton className="tickButton" disableRipple={true} onClick={handleClick} id="item8"
                                    data-testid="item8"></GridButton>
                    </Grid>
                </Grid>

            </section>
            <section>
                <Grid container width={250}>
                    <Grid item xs={4}>
                        <br/>
                        <ResetButton className="reset-button" onClick={reset} id="reset" data-testid="reset"
                                     disableRipple={true}>Reset</ResetButton>
                    </Grid>
                </Grid>
            </section>
            <Snackbar
                className="snack-bar"
                data-testid="snack-bar"
                open={open}
                onClose={handleClose}
                autoHideDuration={2000}
                message={winner}
                anchorOrigin={{vertical: "top", horizontal: "center"}}
            >
                <Alert
                    data-testid="alert"
                    onClose={handleClose}
                    severity="success"
                    icon={false}
                    sx={{width: "500px"}}
                >{winner}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default App;
