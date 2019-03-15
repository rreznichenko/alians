import React, {Component} from 'react';

export default class Timer extends Component {
    state = {
        seconds: 60 
    }

    componentWillUpdate() {
        if(this.state.seconds === 0) {
            this.stopTimer();        
        }
    }

    startTimer = () => {
        if(!this.state.intervalReference) {
            const timerInterval = setInterval(() => {
                this.setState({
                    seconds: this.state.seconds - 1 
                })
            }, 1000);
            this.setState({intervalReference: timerInterval});
        }
    }

    stopTimer = () => {
        if(this.state.intervalReference) {
            clearInterval(this.state.intervalReference);
            this.setState({
                intervalReference: undefined, 
                seconds: (this.state.seconds > 0) ? this.state.seconds : 0 
            });
        }
    }

    restartTimer = () => {
        this.setState({seconds: 60})
    }

    render() {
        return (
        <div className="timer">
            <p className="timer__display">{this.state.seconds}</p>
            <button className="timer__btn" onClick={this.startTimer}>Start!</button>
            <button className="timer__btn" onClick={this.stopTimer}>Stop!</button>
            <button className="timer__btn" onClick={this.restartTimer}>Restart!</button>
        </div>)
    }
}