import moment from "moment";

export function getDaysInMonth(month: any, year: any) {
    return new Date(year, month, 0).getDate()
}
const weekAgoDate = moment().subtract("days", 7);
const sevenDaysAgo = {
    month: weekAgoDate.format('MM'),
    day: weekAgoDate.format('DD'),
    year: weekAgoDate.format('YYYY')
}
const month = moment().format("MM");
const year = moment().format("YYYY");
const day = moment().format("DD");
const initTimeByDay = [`${year}-${month}-${day}T00:00:00`, `${year}-${month}-${day}T23:59:59`]
const initTimeByMonth = [`${year}-${month}-01T00:00:00`, `${year}-${month}-${getDaysInMonth(month, year)}T23:59:59`]
const initTimeByYear = [`${year}-01-01T00:00:00`, `${year}-12-31T23:59:59`]
const initTimeByWeek = [`${sevenDaysAgo.year}-${sevenDaysAgo.month}-${sevenDaysAgo.day}T00:00:00`, `${year}-${month}-${day}T23:59:59`]

export { month, year, day, initTimeByDay, initTimeByMonth, initTimeByYear, initTimeByWeek }

export const FormatToTime = (value: string) => {
    return moment(value).format('YYYY-MM-DDT23:59:59')
}

export const FormatFromTime = (value: string) => {
    return moment(value).format('YYYY-MM-DDT00:00:00')
}

export const FormatDate = (value: string) => {
    return moment(value).format('DD/MM/YYYY')
}

export const FirstdayOfMonth = (value: string) => {
    return moment(value).format('YYYY-MM-01T00:00:00')
}

export const FirstdayOfYear = (value: string) => {
    return moment(value).format('YYYY-01-01T00:00:00')
}

export const FormatDayOfWeekAgo = (value: string) => {
    const weekAgoDate = moment(value).subtract("days", 7);
    return moment(weekAgoDate).format('YYYY-MM-DDT00:00:00')
}

export const FormatTimeActice = (value: string) => {
  const timeActice = moment(value).subtract('hours', 7);
  return moment(timeActice).format('HH:mm:ss DD/MM/YYYY')
}