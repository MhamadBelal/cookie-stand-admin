import React, { useState } from 'react';
import CookieStandAdmin from './CookieStandAdmin'
import LoginForm from './LoginForm'

function Home() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (username, password) => {

        const mockUser = {
            username: 'admin',
            password: '12345678',
        };


        if (username === mockUser.username && password === mockUser.password) {

            setLoggedIn(true);
        } else {

            console.log('Authentication failed');
        }
    };

    return (
        <div>
            {loggedIn ? (
                <CookieStandAdmin />
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
};


export default Home;