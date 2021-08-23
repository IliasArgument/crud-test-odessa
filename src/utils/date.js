export const createDate = (user) => {
    user.createUserData = new Date();
    return `${user.createUserData.getDate()}/${numOfZero(user.createUserData.getMonth() + 1)}/${user.createUserData.getFullYear()} ${numOfZero(user.createUserData.getHours())}:${user.createUserData.getMinutes()}:${user.createUserData.getSeconds()}`
}

export const numOfZero = (num) => {
    if (num <= 10) {
        return `0${num}`
    } else {
        return
    }
}