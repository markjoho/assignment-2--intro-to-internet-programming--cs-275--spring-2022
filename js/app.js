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
        isWhiteRice = new Boolean(false);
        isCalRice = new Boolean(false);
        var HowMuch;

    function showAlertWhiteRice () {
        HowMuch = document.getElementById(`number-box`).value;
        document.getElementById("Instruction").innerHTML ="Combine " + HowMuch + " cup of rice with " + HowMuch*2 + " cups of water and 1 Tbsp olive oil. Bring to a boil, then reduce heat to the lowest setting. Cook for about 18 minutes.";
    }

    function showAlertCaliforniaRice () {
        HowMuch = document.getElementById(`number-box`).value;
        document.getElementById("Instruction").innerHTML ="For slightly al dente rice: Combine " + HowMuch + " cups of rice with " + HowMuch*1.6 + " cups of water or broth and 1 Tbsp olive oil. Bring to a boil and stir once to mix. Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes. Remove from heat and let stand for 5 minutes. Fluff with a fork and serve. For softer rice: Increase liquid by " + HowMuch*0.4 + " cup and cook time by 5 minutes.";
    }

    if (null !== leftButton) {
        leftButton.addEventListener(`click`, showAlertWhiteRice);
        isWhiteRice = true;
        isCalRice = false;
    } else {
        console.error(`A reference to ID %c white-rice %c could not be established`, errorStyles, resetStyles);
    }

    if (null !== rightButton) {
        rightButton.addEventListener(`click`, showAlertCaliforniaRice);
        isWhiteRice = false;
        isCalRice = true;
    } else {
        console.error(`A reference to ID %c california-rice %c could not be established`, errorStyles, resetStyles);
    }
};
