class CButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let text = this.attributes.getNamedItem('text').value;
        this.innerHTML = `<div class="button btn bg-primary text-white m-2 d-flex align-items-center justify-content-center rounded fs-4">${text}</div>`;
        const output = document.querySelector(".output");

        this.addEventListener('click', () => {
            let val = output.textContent;
            const addVal = val.split('+');
            const subVal = val.split('-');
            const mulVal = val.split('*');
            const divVal = val.split('/');

            const add = () => parseFloat(addVal[0]) + parseFloat(addVal[1]);
            const sub = () => parseFloat(subVal[0]) - parseFloat(subVal[1]);
            const mul = () => parseFloat(mulVal[0]) * parseFloat(mulVal[1]);
            const div = () => parseFloat(divVal[0]) / parseFloat(divVal[1]);

            const changeOperation = (...operation) => {
                let lastChar = val[val.length - 1];
                operation.forEach(el => {
                    if (val.endsWith(el)) {
                        val = val.substring(0, val.length - 1);
                    }
                });
            }

            if (val.includes('+') && this.textContent == '=') {
                val = add();
            } else if (val.includes('-') && this.textContent == '=') {
                val = sub();
            } else if (val.includes('*') && this.textContent == '=') {
                val = mul();
            } else if (val.includes('/') && this.textContent == '=') {

                val = div();
            } else if (this.textContent == 'CE') {
                val = val.substring(0, val.length - 1);
            } else if (this.textContent == 'AC') {
                val = 0;
            } else {
                val.startsWith(0)
                    ? val = text
                    : val += text;
            }

            output.textContent = val;
        });
    }
}

customElements.define("c-button", CButton);
