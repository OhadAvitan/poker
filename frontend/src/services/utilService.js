'use strict'

function checkPhoneNumber(pNumber) {
    if (pNumber.length != 10 || pNumber.charAt(0) != 0) return false
    else return true

}

module.exports = {
    checkPhoneNumber
}