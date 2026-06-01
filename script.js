const etchSketch = document.querySelector("#etchSketch");

let size = 16;

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

const pixels = document.querySelectorAll("#column");
const test = document.querySelector("p");

pixels.forEach((element) => {
	element.addEventListener("mouseover", (event) => {
		element.setAttribute("style", "background-color: red");
	});
});
