import React from 'react';

export default () => {

    const status = (day) => {
        
        const date = new Date();
        const hours = date.getHours();
        const currDay = date.getDay();
        console.log(currDay, hours);
        if (day !== currDay) return 'status';
        switch (currDay) {
            // case 0:
            //     return 'status';
            case 1:
                if (hours > 9 && hours < 17) {
                    return 'status active';
                } else {
                    return 'status';
                }
            case 2:
                if (hours > 9 && hours < 17) {
                    return 'status active';
                } else {
                    return 'status';
                }
            case 3:
                if (hours > 9 && hours < 17) {
                    return 'status active';
                } else {
                    return 'status';
                }
            case 4:
                if (hours > 9 && hours < 17) {
                    return 'status active';
                } else {
                    return 'status';
                }
            case 5:
                if (hours > 9 && hours < 17) {
                    return 'status active';
                } else {
                    return 'status';
                }
            case 6:
                if (hours > 10 && hours < 16) {
                    return 'status active';
                } else {
                    return 'status';
                }
            default:
                return 'status';
        }
    }

    return (
        <div className='hours-widget'>
            <div className='hours-header'>Hours</div>
            <div className='hours-table'>
                <div id='mon' className='day-of-week'>
                    <div className='day'>Mon</div>
                    <div className='hours'>9:00 am - 5:00 pm</div>
                    <div className={status(1)}>Open now</div>
                </div>
                <div id='tue' className='day-of-week'>
                    <div className='day'>Tue</div>
                    <div className='hours'>9:00 am - 5:00 pm</div>
                    <div className={status(2)}>Open now</div>
                </div>
                <div id='wed' className='day-of-week'>
                    <div className='day'>Wed</div>
                    <div className='hours'>9:00 am - 5:00 pm</div>
                    <div className={status(3)}>Open now</div>
                </div>
                <div id='thu' className='day-of-week'>
                    <div className='day'>Thu</div>
                    <div className='hours'>9:00 am - 5:00 pm</div>
                    <div className={status(4)}>Open now</div>
                </div>
                <div id='fri' className='day-of-week'>
                    <div className='day'>Fri</div>
                    <div className='hours'>9:00 am - 5:00 pm</div>
                    <div className={status(5)}>Open now</div>
                </div>
                <div id='sat' className='day-of-week'>
                    <div className='day'>Sat</div>
                    <div className='hours'>10:00 am - 4:00 pm</div>
                    <div className={status(6)}>Open now</div>
                </div>
                <div id='sun' className='day-of-week'>
                    <div className='day'>Sun</div>
                    <div className='hours'>Closed</div>
                    <div className={status(0)}>Open now</div>
                </div>
            </div>
        </div>
    )
}