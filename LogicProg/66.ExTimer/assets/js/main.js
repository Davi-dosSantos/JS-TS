function Timer() {
    function formatTime(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hours12: false,
            timeZone: 'UTC'
        })
    }

    const timer = document.querySelector('.Timer')
    // const startTimer = document.querySelector('.start')
    // const stopTimer = document.querySelector('.stop')
    // const resetTimer = document.querySelector('.reset')
    let seconds = 0;
    let timerSet;

    const timerInit = () => {
        timerSet = setInterval(function () {
            seconds++;
            timer.innerHTML = formatTime(seconds)
        }, 1000);
    }

    document.addEventListener('click', function (event) {
        const elements = event.target;

        if (elements.classList.contains('reset')) {
            timer.classList.remove('stopTimer');
            clearInterval(timerSet);
            seconds = 0;
            timer.innerHTML = formatTime(seconds)
        }
        if (elements.classList.contains('start')) {
            timer.classList.remove('stopTimer');
            clearInterval(timerSet);
            timerInit()
        }
        if (elements.classList.contains('stop')) {
            timer.classList.add('stopTimer');
            clearInterval(timerSet);
        }
    })

    // startTimer.addEventListener('click', function (event) {
    //     timer.classList.remove('stopTimer');
    //     clearInterval(timerSet);
    //     timerInit()
    // })

    // stopTimer.addEventListener('click', function (event) {
    //     timer.classList.add('stopTimer');
    //     clearInterval(timerSet);
    // })

    // resetTimer.addEventListener('click', function (event) {
    //     timer.classList.remove('stopTimer');
    //     clearInterval(timerSet);
    //     seconds = 0;
    //     timer.innerHTML = formatTime(seconds)
    // })

}
Timer()