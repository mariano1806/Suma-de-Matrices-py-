document.addEventListener("DOMContentLoaded", function () {
    const matrixForm = document.getElementById("matrix-form");
    const matrixContainer = document.getElementById("matrix-container");
    const resultContainer = document.getElementById("result-container");

    matrixForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const rows = parseInt(document.getElementById("rows").value);
        const cols = parseInt(document.getElementById("cols").value);

        if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
            alert("Por favor, ingrese valores válidos.");
            return;
        }

        matrixContainer.innerHTML = "";
        createMatrixInputs(matrixContainer, rows, cols, "Matriz 1", "matrix1");
        createMatrixInputs(matrixContainer, rows, cols, "Matriz 2", "matrix2");

        const sumButton = document.createElement("button");
        sumButton.textContent = "Sumar Matrices";
        sumButton.addEventListener("click", () => sendMatrices(rows, cols));
        matrixContainer.appendChild(sumButton);
    });

    function createMatrixInputs(container, rows, cols, title, prefix) {
        const section = document.createElement("div");
        section.innerHTML = `<h3>${title}</h3>`;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const input = document.createElement("input");
                input.type = "number";
                input.id = `${prefix}-${i}-${j}`;
                input.style.width = "50px";
                section.appendChild(input);
            }
            section.appendChild(document.createElement("br"));
        }
        container.appendChild(section);
    }

    function sendMatrices(rows, cols) {
        let matrix1 = [];
        let matrix2 = [];

        for (let i = 0; i < rows; i++) {
            let row1 = [];
            let row2 = [];
            for (let j = 0; j < cols; j++) {
                let val1 = parseFloat(document.getElementById(`matrix1-${i}-${j}`).value);
                let val2 = parseFloat(document.getElementById(`matrix2-${i}-${j}`).value);

                if (isNaN(val1) || isNaN(val2)) {
                    alert("Todos los valores deben ser numéricos.");
                    return;
                }

                row1.push(val1);
                row2.push(val2);
            }
            matrix1.push(row1);
            matrix2.push(row2);
        }

        fetch("/sumar_matrices", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ matrix1, matrix2 }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                displayResult(data.result);
            }
        })
        .catch(error => console.error("Error:", error));
    }

    function displayResult(matrix) {
        resultContainer.innerHTML = "<h3>Matriz Resultante</h3>";
        matrix.forEach(row => {
            resultContainer.innerHTML += row.join(" ") + "<br>";
        });
    }
});
