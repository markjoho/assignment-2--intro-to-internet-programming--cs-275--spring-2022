window.onload = () => {
    let leftButton = document.getElementById(`white-rice`),
        rightButton = document.getElementById(`california-rice`),
        errorStyles = `background-color: red;
            padding: 2px;
            color: white;
            font-family: monospace;
            border-radius: 4px;`,
        resetStyles = `background-color: inherit;
            padding: inherit;
            font-family: inherit;
            border-radius: none`;

    function showAlert () {
        alert(`You clicked the ${this.id}`);
    }

    if (null !== leftButton) {
        leftButton.addEventListener(`click`, showAlert);
    } else {
        console.error(`A reference to ID %c left-button %c could not be established`, errorStyles, resetStyles);
    }

    if (null !== rightButton) {
        rightButton.addEventListener(`click`, showAlert);
    } else {
        console.error(`A reference to ID %c right-button %c could not be established`, errorStyles, resetStyles);
    }
};
