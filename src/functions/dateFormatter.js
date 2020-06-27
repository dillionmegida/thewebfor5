// This function converts dates like 2001-01-13 to 13th January, 2001
// I guess there's a better way to do it in GatsbyJS, but I haven't figured out yet.

const formatBlogDate = (date) => {
  let dateArr = date.split("")

  // Slice the array to break the date
  let yearArr = dateArr.slice(0, 4)
  let monthArr = dateArr.slice(5, 7)
  let dayArr = dateArr.slice(8, 10)

  // parse the dates to integers and also get the last digit of the day for day suffixes
  let month = parseInt(monthArr.join(""))
  let day = parseInt(dayArr.join(""))
  let lastDigitOfDay = parseInt(
    dayArr.join("").charAt(dayArr.join("").length - 1)
  )
  let year = parseInt(yearArr.join(""))

  // switch case to get the month name
  let monthName

  switch (month) {
    case 1:
      monthName = "January"
      break
    case 2:
      monthName = "February"
      break
    case 3:
      monthName = "March"
      break
    case 4:
      monthName = "April"
      break
    case 5:
      monthName = "May"
      break
    case 6:
      monthName = "June"
      break
    case 7:
      monthName = "July"
      break
    case 8:
      monthName = "August"
      break
    case 9:
      monthName = "September"
      break
    case 10:
      monthName = "October"
      break
    case 11:
      monthName = "November"
      break
    case 12:
      monthName = "December"
      break
    default:
      monthName = ""
  }

  // switch case to get the suffix of the day
  let daySuffix

  switch (lastDigitOfDay) {
    case 1:
      daySuffix = "st"
      break
    case 2:
      daySuffix = "nd"
      break
    case 3:
      daySuffix = "rd"
      break
    default:
      daySuffix = "th"
  }

  // exceptions for 11 to 19
  switch (day) {
    case 11:
    case 12:
    case 13:
      daySuffix = "th"
      break
    default:
      break
  }

  let fullDate = `${monthName} ${day}${daySuffix}, ${year}`
  return fullDate
}

export default formatBlogDate
