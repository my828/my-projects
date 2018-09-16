import React from "react";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    time() {
        
    }
    componentDidMount() {
        console.log("list mounted")
        // var time = () => {

        // }

        this.interval = setInterval(()=>{
            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;
            let originalBday = new Date(this.props.bday);
            let bdayMonth = originalBday.getMonth()+1;
            let bdayDay = originalBday.getDate();
            let birthYear = originalBday.getFullYear();
    
            let now = new Date();
            let currentYear = now.getFullYear();
            let yearsOld = currentYear - birthYear - 1;
            var newBday = new Date(bdayMonth+"/"+bdayDay+"/"+currentYear);
            if (bdayMonth < (now.getMonth()+1) || (bdayMonth === now.getMonth() && bdayDay < now.getDate())) {
                newBday = new Date(bdayMonth+"/"+bdayDay+"/"+(currentYear+1));
                yearsOld = yearsOld + 1;
            }
            var distance = newBday.getTime() - now.getTime();
            var days = Math.floor(distance/day);
            var hours = Math.floor((distance%day)/hour);
            var minutes = Math.floor((distance%hour)/minute);
            var seconds = Math.floor((distance%minute)/second);
            this.setState({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            })
            console.log("days:"+days+" hours: "+hours+" minutes:"+minutes+" seconds:"+seconds);
        },1000)
        // this.setState({
        //     name: name,
        //     days: days,
        //     hours: hours,
        //     mins: minutes,
        //     sec: seconds,
        //     age: yearsOld
        // })
    }
    render() {
        return (
                <li key={this.props.key}>
                    {this.props.name} {this.props.bday} Days: {this.state.days} Hours: {this.state.hours} Minutes: {this.state.minutess} Seconds: {this.state.seconds}
                </li>
                
        );
    }
}