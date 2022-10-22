import React from 'react'

function DateFormatter() {
    const dateArr = publishedAt.split("-") //spliting the date string to get date, month and year

    let month;
  
    // console.log(dateArr, "date array")
    // console.log(dateArr[1], "month")
  
    // ['2022', '10', '21T15:46:17.435Z']
  
    /*Since the date returned is a string written in numerals 
    but I want them displayed in words or names I have to 
    use a switch statement for that */
  
    let monthNum = dateArr[1]
  
    switch (monthNum) {
      case "01":
        month = "January";
        break;
  
      case "02":
        month = "February";
        break;
  
      case "03":
        month = "March";
        break;
  
      case "04":
        month = "April";
        break;
  
      case "05":
        month = "May";
        break;
  
      case "06":
        month = "June";
        break;
  
      case "07":
        month = "July";
        break;
  
      case "08":
        month = "August";
        break;
  
      case "09":
        month = "September";
        break;
  
      case "10":
        month = "October";
        break;
  
      case "11":
        month = "November";
        break;
  
      case "12":
        month = "December";
        break;
    }
  
    const publishedYear = dateArr[0]
    const publishedMonth = month
    const publishedDate = dateArr[2].split("T")[0] //fetching the date from the date array
  
    // console.log(publishedYear, "year again")
    // console.log(publishedDate, "Date again")
}

export default DateFormatter
