const etchSketch = document.querySelector("#etchSketch");

const sliderValue = document.querySelector("#sliderValue");
const slider = document.querySelector("input");

let pixels;
let size = slider.value;
displaySketchSize(size);
createSketchBoard(size);

slider.addEventListener("click", (event) => {
	size = slider.value;
	displaySketchSize(size);
	createSketchBoard(size);
});

function displaySketchSize(size) {
	sliderValue.textContent = `Sketch Size: ${size}x${size}`;
}

function createSketchBoard(size) {
	etchSketch.innerHTML = "";
	for (let r = 1; r <= size; r++) {
		const row = document.createElement("div");
		row.classList.add("row");
		// row.textContent = r;
		for (let c = 1; c <= size; c++) {
			const column = document.createElement("div");
			column.classList.add("column");
			column.setAttribute("id", "column");
			// column.textContent = c;
			row.append(column);
		}
		etchSketch.append(row);
	}
	pixels = document.querySelectorAll("#column");
	console.log(pixels);

	pixels.forEach((element) => {
		element.addEventListener("mouseover", (event) => {
			element.setAttribute("style", "background-color: red");
		});
	});
}
