/**
 * Created by Monty on 2017/2/26.
 */

require('colors');

// console.log('hello node'.red);

function box() {
    let a = '5';
    try {
        a();
        console.log('123');
    } catch (e) {

        console.log("00");

        console.log(e instanceof Error)

    }

    console.log(a);
}

box();

