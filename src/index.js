import './styles.css';


// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.
class CountdownTimer {
    constructor(selector, targetDate) {
      this.targetDate = targetDate;
      this.daysRef = document.querySelector(`${selector} span[data-value="days"]`);
      this.hoursRef = document.querySelector(`${selector} span[data-value="hours"]`);
      this.minsRef = document.querySelector(`${selector} span[data-value="mins"]`);
      this.secsRef = document.querySelector(`${selector} span[data-value="secs"]`);
    };

    timeLeft = (days, hours, mins, secs) => {
        newDate.daysRef.textContent = days;
        newDate.hoursRef.textContent = hours < 10 ? `0${hours}` : hours;
        newDate.minsRef.textContent = mins < 10 ? `0${mins}` : mins;
        newDate.secsRef.textContent = secs < 10 ? `0${secs}` : secs;
    };


    countingRemainingTime = (time) => {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        this.timeLeft(days, hours, mins, secs);
    
    };

    init = () => {
        setInterval(() => {
            const time = this.targetDate.getTime() - Date.now();
            this.countingRemainingTime(time);
        }, 1000);
    };

};


const newDate = new CountdownTimer('#timer-1', new Date('Feb 01, 2021'));
newDate.init()