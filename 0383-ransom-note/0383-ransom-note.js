/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    if (ransomNote.length > magazine.length) {
        return false;
    }
    for (let i = 0; i < magazine.length; i++) {
        ransomNote = ransomNote.replace(magazine[i], '')
    }
    if (!ransomNote) return true;
    else return false
};