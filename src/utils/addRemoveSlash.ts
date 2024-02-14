
export const removeClassNameByPrefix = (element:HTMLElement, prefix:string) => {
        const regx = new RegExp('\\b' + prefix + '[^ ]*[ ]?\\b', 'g');
        element.className = element.className.replace(regx, '');
        return element;
}

export const addSlash = (winningSelections: string) => {

    const slashCont = document.getElementById("slash-cont")!;
    switch (winningSelections) {
        case"0,1,2":
            slashCont.classList.add("slash-row1-across");
            break;
        case"3,4,5":
            slashCont.classList.add("slash-row2-across");
            break;
        case"6,7,8":
            slashCont.classList.add("slash-row3-across");
            break;
        case"0,3,6":
            slashCont.classList.add("slash-column1-down");
            break;
        case"1,4,7":
            slashCont.classList.add("slash-column2-down");
            break;
        case"2,5,8":
            slashCont.classList.add("slash-column3-down");
            break;
        case"0,4,8":
            slashCont.classList.add("slash-diagonalL2R");
            break;
        case"2,4,6":
            slashCont.classList.add("slash-diagonalR2L");
            break;
        default:

    }
}