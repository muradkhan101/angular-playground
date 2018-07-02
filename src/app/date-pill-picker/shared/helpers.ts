import { Moment } from 'moment';

export function adjustForTz(date: Moment): Moment {
    let mins = new Date().getTimezoneOffset();
    return date.subtract(mins, 'minutes');
}