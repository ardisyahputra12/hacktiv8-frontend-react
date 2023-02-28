class CButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let text = this.attributes.getNamedItem("text").value;
        this.innerHTML = `<div class="button btn bg-secondary flex-fill text-white m-2 d-flex align-items-center justify-content-center rounded fs-4">${text}</div>`;
        const output = document.querySelector(".output");

        this.addEventListener("click", () => {
            let result = parseFloat(0);
            let currVal = 0;
            let operanVal = [];
            let tempVal = parseFloat(output.textContent);
            let val = output.textContent;
            const addVal = val.split("+");
            const subVal = val.split("-");
            const mulVal = val.split("*");
            const divVal = val.split("/");

            const add = () => parseFloat(addVal[0]) + parseFloat(addVal[1]);
            const sub = () => parseFloat(subVal[0]) - parseFloat(subVal[1]);
            const mul = () => parseFloat(mulVal[0]) * parseFloat(mulVal[1]);
            const div = () => parseFloat(divVal[0]) / parseFloat(divVal[1]);

            const changeOperation = () => {
                const operation = ["+", "-", "*", "/"];
                // tempVal = 0;
                operation.forEach((el1) => {
                    if (val.includes(el1)) {
                        operanVal.push(el1);
                    }
                    if (this.textContent == el1) {
                        if (operanVal.length > 1) {
                            currVal = tempVal;
                            switch (operanVal.length > 1 ? operanVal[operanVal - 2] : operanVal[0]) {
                                case '+': result += parseFloat(currVal);
                                case '-': result -= parseFloat(currVal);
                                case '*': result *= parseFloat(currVal);
                                case '/': result /= parseFloat(currVal);
                            }
                        } else {
                            result = tempVal;
                        }
                    }
                    operation.forEach((el2) => {
                        if (val[val.length - 1] == el1 && val[val.length - 2] == el2) {
                            val = val.substring(0, val.length - 2) + val[val.length - 1];
                        }
                    });
                });
            };

            // if (val.includes("+") && this.textContent == "=") {
            //     val = add();
            // } else if (val.includes("-") && this.textContent == "=") {
            //     val = sub();
            // } else if (val.includes("*") && this.textContent == "=") {
            //     val = mul();
            // } else if (val.includes("/") && this.textContent == "=") {
            //     val = div();
            if (this.textContent == '=') {
                val = result;
            } else if (this.textContent == "CE") {
                val.length == 1 ? (val = 0) : (val = val.substring(0, val.length - 1));
            } else if (this.textContent == "AC") {
                val = 0;
            } else {
                val.startsWith(0) ? (val = text) : (val += text);
                changeOperation();
            }
            output.textContent = val;
            console.log(result);

        });
    }
}

customElements.define("c-button", CButton);
