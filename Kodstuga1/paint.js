const height = 24;
const width = 24;
let selectedColor = "black";
let previousColor = "white";

window.onload = () => {
    const button = document.getElementById("knapp");
    button.onclick = () => {
        window.alert("Börja rita!");
    }

    const colors = document.getElementById("colors")
    colors.childNodes.forEach((colorEl) => {
        colorEl.onclick = () => {
            selectedColor = colorEl.style.backgroundColor;
        }
    })

    const canvas = document.getElementById("canvas");

    for(let index = 0; index < height; index++) {
        const row = document.createElement("div");
        row.className = "row";
        canvas.appendChild(row);

        for(let index = 0; index < width; index++) {
            const cell = document.createElement("div");
            cell.className = "cell";

           /*  cell.onclick = () => {
                cell.style.backgroundColor = selectedColor;
                previousColor = selectedColor;
            } */

            cell.ondragover = (event) => {
                event.preventDefault();
                cell.style.backgroundColor = selectedColor;
                previousColor = selectedColor;
            }

            /* cell.onmouseenter = () => {
                previousColor = cell.style.backgroundColor;
                cell.style.backgroundColor = selectedColor;
            }

            cell.onmouseleave = () => {
                cell.style.backgroundColor = previousColor;
            } */

            row.appendChild(cell);
        }
    }
}