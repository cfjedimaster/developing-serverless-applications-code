/*
Based on the time (of the OpenWhisk runtime at least!), return
an appropriate greeting.
*/

function main() {
    let message = '';
    let timeOfDay = new Date().getHours();

    if(timeOfDay < 12) {
        message = 'Good morning!';
    } else if(timeOfDay < 18) {
        message = 'Good Afternoon!';
    } else {
        message = 'Good evening!';
    }

    return { greeting:message };

}