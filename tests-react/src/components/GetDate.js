const getDate = (date) => {

    var date1 = new Date(); //current date
    var date2 = new Date(date);

    var difference = date1.getTime() - date2.getTime();

    var differenceWeeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));

    var differenceYears = Math.floor(
        difference / 1000 / 60 / 60 / 24 / 30 / 12
    );

    var differenceMonths = Math.floor(difference / 1000 / 60 / 60 / 24 / 30);

    var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);

    var hoursDifference = Math.floor(difference / 1000 / 60 / 60);

    var minutesDifference = Math.floor(difference / 1000 / 60);

    var secondsDifference = Math.floor(difference / 1000);

    if (secondsDifference >= 60) {
        if (minutesDifference >= 60) {
            if (hoursDifference >= 24) {
                if (daysDifference >= 7) {
                    if (differenceWeeks >= 4) {
                        if (differenceMonths >= 12) {
                            if (differenceYears === 1) {
                                return differenceYears + " year ago";
                            }
                            else {
                                return differenceYears + " years ago";
                            }
                        } else {
                            if (differenceMonths === 1) {
                                return differenceMonths + " month ago";
                            }
                            else {
                                return differenceWeeks + " months ago";
                            }
                        }
                    } else {
                        if (differenceWeeks === 1) {
                            return differenceWeeks + " week ago";
                        }
                        else {
                            return differenceWeeks + " weeks ago";
                        }
                    }
                } else {
                    if (daysDifference === 1) {
                        return daysDifference + " day ago";
                    }
                    else {
                        return daysDifference + " days ago";
                    }
                }
            } else {
                if (hoursDifference === 1) {
                    return hoursDifference + " hour ago";
                }
                else {
                    return hoursDifference + " hours ago";
                }
            }
        } else {
            if (minutesDifference === 1) {
                return minutesDifference + " minute ago";
            }
            else {
                return minutesDifference + " minutes ago";
            }
        }
    } else {
        if (secondsDifference === 1) {
            return secondsDifference + " second ago";
        }
        else {
            return secondsDifference + " seconds ago";
        }
    }

}

export default getDate;
