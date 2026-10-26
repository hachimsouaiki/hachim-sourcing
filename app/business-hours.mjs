export const BUSINESS_TIME_ZONE = 'Asia/Shanghai';
export const BUSINESS_HOURS_LABEL = 'Mon–Fri, 09:00–17:00 · China (UTC+8)';
export function getBusinessAvailability(date = new Date()) {
 const fields = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
  timeZone: BUSINESS_TIME_ZONE, weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
 }).formatToParts(date).map(part => [part.type, part.value]));
 const weekday = ['Mon','Tue','Wed','Thu','Fri'].includes(fields.weekday);
 const minutes = Number(fields.hour) * 60 + Number(fields.minute);
 return { available: weekday && minutes >= 540 && minutes < 1020, chinaTime: `${fields.hour}:${fields.minute}` };
}
