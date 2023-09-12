//2023
function solution(phone_number) {
    return phone_number.slice(-4).padStart(phone_number.length, '*');
}
//2022
function solution(phone_number) {
    return "*".repeat(phone_number.length-4)+phone_number.slice(-4);
}
