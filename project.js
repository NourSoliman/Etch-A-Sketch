const container = document.getElementById("container");


function makeRows(rows, cols) {
    while (document.querySelector("button") !== null) {
        document.querySelector("button").remove();
    }
    // create grid
container.style.setProperty('--grid-rows', rows);
container.style.setProperty('--grid-cols', cols);

  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.style.backgroundColor = `black`
    cell.style.overflow = `hidden`
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover" , () => {
        cell.style.backgroundColor = `gold`
    })  
};
button();
};

makeRows(16, 16);

function button() {
    const buttondiv = document.querySelector(".button")
    const resetButton = document.createElement("button")
    buttondiv.appendChild(resetButton);
    resetButton.textContent = `Reset Button`
    resetButton.style.margin = `10px`
    resetButton.addEventListener(`click` , () => {
    document.querySelectorAll(".grid-item").forEach(e => e.remove());
    let userGrid = prompt(`Enter the numbers of grid`);
    if (userGrid > 100) {
        alert(`please enter number less than 100`);
        return;
    }
    rows = userGrid;
    cols = userGrid;
    makeRows(rows , cols)
    })

}

