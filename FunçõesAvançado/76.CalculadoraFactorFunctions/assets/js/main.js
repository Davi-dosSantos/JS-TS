function createCalculator() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        start() {
            this.clickButtons();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.executeCalc();
                }
            })
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.slice(0, -1)
        },

        executeCalc() {
            let calc = this.display.value;
            try {   //A função eval é perigosa trás varias frágilidades ao código, por executar o que recebe como js
                calc = eval(calc);
                if (!calc) {
                    alert('invalid calculation');
                    return;
                }

                this.display.value = String(calc);
            } catch (e) {
                alert('invalid calculation');
                return
            }

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
                if (element.classList.contains('btn-del')) {
                    this.deleteOne();
                }
                if (element.classList.contains('btn-eq')) {
                    this.executeCalc();
                }
            });
        },

        btnForDisplay(valor) {
            this.display.value += valor
        },

    };
}

const calculator = createCalculator();
calculator.start()