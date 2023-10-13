import CreateForm from "./CreateForm";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Main() {

    const [lastCookieStand, setLastCookieStand] = useState([]);


    const fetchLastCookieStand = async () => {
        try {
            const response = await axios.get('https://cookiestandapi20231011112821.azurewebsites.net/api/cookiestands');
            if (response.data && response.data.length > 0) {
                // Set the last element as the latest cookie stand
                setLastCookieStand(response.data[response.data.length - 1]);
            }
            else {
                console.log('No data in the response.');
                // You can set a default value or handle this case as needed.
            }
        } catch (error) {
            console.error('Error fetching last cookie stand:', error);
        }
    };

    // Fetch data when the component loads
    useEffect(() => {
        fetchLastCookieStand();
    }, []);

    return (
        <>
            <div class="sm:p-20">
                <CreateForm dataResponse={lastCookieStand} />
                <div class="flex flex-col justify-center items-center sm:p-5">
                    <p>Report Table Comming Soon....</p>
                </div>
                <div class="flex flex-col justify-center items-center sm:p-5">
                    <p>{'{'}"location":"{lastCookieStand.location}","minCustomers":{lastCookieStand.minimumCustomersPerHour},"maxCustomer":{lastCookieStand.maximumCustomersPerHour},"Average Cookies per Sale":{lastCookieStand.averageCookiesPerSale}{'}'}</p>
                </div>
            </div>
        </>
    )
}

export default Main;