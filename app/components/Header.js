import React from 'react';
import Link from 'next/link';
import Overview from '../Overview/page'

function Header() {
    return (
        <>
            <Link href='/Overview' className="border border-slate-500 text-slate-800 px-2 py- rounded hover:bg-slate-500 outline-none">Overview</Link>
        </>
    )
}

export default Header;