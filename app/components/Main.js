import CreateForm from "./CreateForm";
import ReportTable from './ReportTable'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { timeSlots } from '../data'

function Main({ setReports }) {

    const [lastCookieStand, setLastCookieStand] = useState([]);
    const [CookieStands, setCookieStands] = useState([]);


    const [formData, setFormData] = useState({
        Location: '',
        MinimumCustomer: '',
        MaximumCustomer: '',
        Average: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://cookiestandapi20231011112821.azurewebsites.net/api/cookiestands', formData);
            // Handle the response as needed
            console.log('New cookie stand added:', response.data);
            fetchCookieStand();
            // You can also update your UI with the new data if necessary
        } catch (error) {
            console.error('Error adding a new cookie stand:', error);
        }
    };

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

    const fetchCookieStand = async () => {
        try {
            const response = await axios.get('https://cookiestandapi20231011112821.azurewebsites.net/api/cookiestands');
            if (response.data && response.data.length > 0) {
                // Set the last element as the latest cookie stand
                setCookieStands(response.data);
                console.log(response.data)
                setReports(response.data.length)
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

    useEffect(() => {
        fetchCookieStand();
    }, []);

    return (
        <>
            <div className="sm:p-20">
                <CreateForm dataResponse={lastCookieStand} handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />
                <div className="flex flex-col justify-center items-center sm:p-5">
                    <ReportTable dataResponse={CookieStands} hours={timeSlots} />
                </div>
            </div>
        </>
    )
}

export default Main;