function createCalculator() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        clearDisplay() {
            this.display.value = '';
        },

        inicia() {
            this.clickButtons();
        },

        clickButtons() {
            document.addEventListener('click', (event) => {
                const element = event.target;

                if (element.classList.contains('btn-num')) {
                    this.btnForDisplay(element.innerText);
                }
                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
            });
        },

        btnForDisplay(valor) {
            this.display.value += valor
        },

    };
}

createCalculator()
createCalculator.inicia