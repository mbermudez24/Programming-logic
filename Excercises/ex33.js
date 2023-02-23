/*

make a real time clock that displays the time in real time
you can only use the date object to get the time for the first time, but not to update the time.

how to do it:
1. Create a class
2. initialize the properties with the current time
3. Method with setInterval
4. Method to show the time
5. Method to add seconds to the time and update hours, minutes and seconds
*/

class Clock{
    constructor(){
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
    }

    showTime(){
        console.log(`The time is: ${this.hours}:${this.minutes}:${this.seconds}`);
    }

    updateTime(){
        setInterval(() => {
            this.seconds++;
            if(this.seconds == 60){
                this.seconds = 0;
                this.minutes++;
                if(this.minutes == 60){
                    this.minutes = 0;
                    this.hours++;
                    if(this.hours == 24){
                        this.hours = 0;
                    }
                }
            }
            this.showTime();
        }, 1000);
    }
}

let clock = new Clock();
clock.updateTime();
