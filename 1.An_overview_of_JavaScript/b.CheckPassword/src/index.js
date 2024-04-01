function createPasswordChecker() {
    return checkPassword;
}

var count = 0;

function checkPassword(val) {
    if (count === 2) {
        return 'Your account has been blocked!';
    }
    if (val === undefined || val === null || val === "") {     
        return 'Password cannot be empty';
    }
    if (val === 'QueraCollegeFront' || val === 'CollegeFront' || val === 'QueraCollege') {
        return 'Welcome';
    }
    if (val === 'QueraCollegeGolang') {
        return 'Your account has been blocked!';
    }else{
        count += 1;    
        return `Your password => ${val} is wrong!`;
    }
}

let result1 = checkPassword("wrong1");
let result2 = checkPassword("wrong2");
console.log(result2);

module.exports = createPasswordChecker();


