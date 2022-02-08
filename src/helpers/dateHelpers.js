export function getAgeFrom(birthday) {
    if (!birthday){
        return '?'
    }
    const [birthYear, birthMonth, birthDate] = birthday.split('-')
    const today = new Date()
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() +1;
    const todayDay = today.getDate();

    const age = todayYear - parseInt(birthYear, 10)

    if (parseInt(birthMonth) > todayMonth) {
        return age - 1
    }
    if (parseInt(birthMonth) === todayMonth && parseInt(birthDate) > todayDay) {
        return age - 1
    }

    return age;
}