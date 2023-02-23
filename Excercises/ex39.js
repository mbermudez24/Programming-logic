/*

given a text, check that it is a valid email address.

how to do it:
1. regular expression

*/

//classic function
function emailClassic(email){
    //regular expression can be found here: https://www.w3resource.com/javascript/form/email-validation.php
    //regex can be tested here: https://regex101.com/
    //regex starts with word characters can also have a dot or a dash, then an @ but not at the beginning or the end and then a word character, a dot and a word character with a length of 2 to 4.

    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    //test the regex with the email address, if it is true, return the email address is valid, if not, return the email address is not valid.
    return regex.test(email) ? `${email} is a valid email address` : `${email} is not a valid email address`;

}

console.log(emailClassic('mabermudez@gmail.com'));
console.log(emailClassic('mabermudez@gmail'));

//arrow function
let emailArrow = (email) => {
    //regular expression can be found here: https://www.w3resource.com/javascript/form/email-validation.php
    //regex can be tested here: https://regex101.com/
    //regex starts with word characters can also have a dot or a dash, then an @ but not at the beginning or the end and then a word character, a dot and a word character with a length of 2 to 4.

    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    //test the regex with the email address, if it is true, return the email address is valid, if not, return the email address is not valid.
    return regex.test(email) ? `${email} is a valid email address` : `${email} is not a valid email address`;

}

console.log(emailArrow('mbermudez@gmail.com'));
console.log(emailArrow('mbermudez@gmail'));

//prototype function
function Email(email){
    this.email = email;
}

Email.prototype.emailPrototype = function(){
    //regular expression can be found here: https://www.w3resource.com/javascript/form/email-validation.php
    //regex can be tested here: https://regex101.com/
    //regex starts with word characters can also have a dot or a dash, then an @ but not at the beginning or the end and then a word character, a dot and a word character with a length of 2 to 4.

    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    //test the regex with the email address, if it is true, return the email address is valid, if not, return the email address is not valid.
    return regex.test(this.email) ? `${this.email} is a valid email address` : `${this.email} is not a valid email address`;

}

let emailPrototype = new Email('mbeg@gmail.com');
console.log(emailPrototype.emailPrototype());