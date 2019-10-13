// Using markdowns in gatsby for my posts, I'd have to use this format (month - day - year),
// This function would format it to my desired type.
// I believe there'd be a better solution for this provided by Gatsby but before then, this is my solution
const formatBlogDate = date => {
    let dateArr = date.split('');
    
    // Slice the array to break the date
    let monthArr = dateArr.slice(0, 2);
    let dayArr = dateArr.slice(3, 5);
    let yearArr = dateArr.slice(6);

    // parse the dates to integers and also get the last digit of the day for day suffixes
    let month = parseInt(monthArr.join(''));
    let day = parseInt(dayArr.join(''));
    let lastDigitOfDay = parseInt(dayArr.join('').charAt(dayArr.join('').length - 1));
    console.log(lastDigitOfDay);
    let year = parseInt(yearArr.join(''));

    // switch case to get the month name
    let monthName;

    switch(month) {
        case 1:
            monthName = 'January';
            break;
        case 2:
            monthName = 'February';
            break;
        case 3:
            monthName = 'March';
            break;
        case 4:
            monthName = 'April';
            break;
        case 5:
            monthName = 'May';
            break;
        case 6:
            monthName = 'June';
            break;
        case 7:
            monthName = 'July';
            break;
        case 8:
            monthName = 'August';
            break;
        case 9:
            monthName = 'September';
            break;
        case 10:
            monthName = 'October';
            break;
        case 11:
            monthName = 'November';
            break;
        case 12:
            monthName = 'December';
            break;
        default:
            monthName = '';
    }

    // switch case to get the suffix of the day
    let daySuffix;

    switch(lastDigitOfDay) {
        case 1:
            daySuffix = 'st';
            break;
        case 2:
            daySuffix = 'nd';
            break;
        case 3:
            daySuffix = 'rd';
            break;
        default:
            daySuffix = 'th';
    }
    
    let fullDate = `${day}${daySuffix} ${monthName}, ${year}`;
    return fullDate;
}

export { formatBlogDate };