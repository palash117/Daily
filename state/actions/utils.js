export const isToday = (someDate) => {
    const today = new Date();
    return (
        someDate.getDate() == today.getDate() &&
        someDate.getMonth() == today.getMonth() &&
        someDate.getFullYear() == today.getFullYear()
    );
};
export const isYesterday = (someDate) => {
    const today = yesterdayDate();
    let isYesterday =
        someDate.getDate() == today.getDate() &&
        someDate.getMonth() == today.getMonth() &&
        someDate.getFullYear() == today.getFullYear();
    return isYesterday;
};
export const yesterdayDate = () => {
    return new Date(new Date().setDate(new Date().getDate() - 1));
};

export const ISOToDDMMYY = (isoString) => {
    let date = new Date(isoString);
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = date.getFullYear();

    let dateStr = mm + "/" + dd + "/" + yyyy;
    return dateStr;
};
