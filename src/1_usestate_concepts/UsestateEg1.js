import React, { useState } from 'react';
// useState is a function we get from react

// Example
const UsestateEg = () => {

    // console.log(useState('hello world'));
    // 1. when we invoke useState, we need to pass in a default value.
    // useState returns an array, hence we can assign it to a variable
    // const value = useState(1)[0];

    // 2. the const value is the default value. the 0 is used the access the first value in the array.
    // const handler = useState(1)[1];

    // 3. handler is the the second thing that we are looking for. It is the function that controls the value that we have in our state.
    // console.log(value, handler);

    // 4. the best way to handle the value and handler situation is by array destructuring using the hook, useState as seen in the example below. This helps us set up everything in one line.  

    // 5. First, we need to come up with a name for the state value (in our case, text). 
    // 6. Next, we need to set up our function. Though we can name our function anything but the common convention is to use the word set before the value(in our case, setText). You can use any name for the function but it makes more sense to follow convention.
    const [text, setText] = useState('Random Title'); // basic rendering.

    // This is important cos you don't want it running after the initial render and slowing the app down.
    // const [text, setText] = useState(() => {
    //     console.log('run something');
    //     return 'Random Title'
    // });
    // 7. Next, we want to set it equal to an array, which is useState (which returns an array). we need to then pass into it, what is going to be our default value.

    // 10. We want to set up the click event funtion. In this function we can now use the setText. Whatever we pass into the setState will be the new value(in our case is 'hello world').
    // const handleClick = () => {
    //         setText('Hello World');
    // }

    // 11. To make it more dynamic i.e, change it from 'random title' to 'hello world' and then back again, we need to add some logic(in our case, if...else statement) 
    // const handleClick = () => {
    //     if (text === 'Random Title') {
    //         setText('Hello World');
    //     } else {
    //         setText('Random Title');
    //     }
    // }

    // 12. or we could use the functional approach where we pass a function into our set function. We further pass the previous value as a parameter in the setText. Finally in the function, we pass the logic into the function
    const handleClick = () => {
        setText((oldClick) => {
            if (oldClick === 'Random Title') {
                setText('Hello World');
            } else {
                setText('Random Title');
            }
        })
    }

            // 13. some important rules for hooks
            // a. They start with use, e.g. useState, useEffect, useCallback, etc.
            // b. component where they are used must be in capital letter.
            // Must be in a function/component body. Cannot be outside like when you are declaring a variable.
            // cannot call conditionally i.e. you cannot wrap a hook in a conditional statement

    return (
        <React.Fragment>
            <h3>UseState Basic Example</h3>
            {/* 8. now we want to look for the text which is our state value */}
            <p>{text}</p>

            {/* 9. next, we need a button that can change the value, text. we also add an onClick eventlistener*/}
            <button className="btn" onClick={handleClick}>
                change title
            </button>
        </React.Fragment>
    )
}


export default UsestateEg;
