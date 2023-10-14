import Head from "./Head";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import React, { useEffect, useState } from 'react';

function CookieStandAdmin() {
    const [reports, setReports] = useState([]);
    return (
        <>
            <Head />
            <Header />
            <Main setReports={setReports} />
            <Footer reports={reports} />
        </>
    )
}

export default CookieStandAdmin;