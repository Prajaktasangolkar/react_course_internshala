// import React, { useState } from 'react';

// function Api(prop) {
//     const [greeting, setGreeting] = useState('');

//     const handleData = (data) => {
//         setGreeting(data.message); // Assuming the API response has a 'message' property
//     };

//     const sendMessage = () => {
//         fetch('http://localhost:3000/greeting', {
//             method: 'GET'
//         })
//         .then(
//             response => response.json()
            
//             )
//         .then(
//             data => handleData(data))
//         .catch(error => console.error('Error:', error));
//     };

//     return (
//         <div>
//             <h1>{greeting || prop.name}!</h1>
//             <button onClick={sendMessage}>Send Message!</button>
//         </div>
//     );
// }

// export default Api;
import React, { useState } from 'react';

function Api(prop) {
    const [greeting, setGreeting] = useState('');

    const handleData = (response) => {
        console.log('Response:', response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok');
        }
    };

    const sendMessage = () => {
        fetch('http://localhost:3000/greeting', {
            method: 'GET'
        })
        .then(response => handleData(response))
        .then(data => setGreeting(data.message))
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>{greeting || prop.name}!</h1>
            <button onClick={sendMessage}>Send Message!</button>
        </div>
    );
}

export default Api;
