const etchSketch = document.querySelector("#etchSketch");

for (let r = 1; r <= 16; r++) {
	const row = document.createElement("div");
	row.classList.add("row");
	// row.textContent = r;
	for (let c = 1; c <= 16; c++) {
		const column = document.createElement("div");
		column.classList.add("column");
		column.textContent = c;
		row.append(column);
	}
	etchSketch.append(row);
}
