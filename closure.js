function getPasswordChecker(password) {
    return function checkPassword(key) {
        return password == key
    }
}

checker = getPasswordChecker('hmm')
console.log(checker('not hmm'))