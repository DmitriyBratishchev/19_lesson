import moment from "moment";


export function calculateSumOfNumbers(numbers) {
  const sumNumbers = numbers.reduce( (acc, num) => acc += num, 0)
  return sumNumbers
}

export function getFormattedTime(date = new Date()) {
  const strDate = moment(date).format('MMMM Do YYYY, h:mm:ss a')
  return strDate
}          