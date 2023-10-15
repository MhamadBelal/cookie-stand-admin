import React from 'react';
import Link from 'next/link';
import Overview from '../Overview/page'

function Header() {
    return (
        <>
        <div className='-10 py-2 m-4'>
        <Link href='/Overview' className="border bg-green-200 border-slate-500 text-slate-800 px-2  rounded hover:bg-slate-500 outline-none text-center h-10 py-2 m-4">Rudy</Link>
        <Link href='/Overview' className="border bg-green-200 border-slate-500 text-slate-800 px-2  rounded hover:bg-slate-500 outline-none text-center h-10 py-2 m-4">Sign Out</Link>
            <Link href='/Overview' className="border bg-green-200 border-slate-500 text-slate-800 px-2  rounded hover:bg-slate-500 outline-none text-center h-10 py-2 m-4">Overview</Link>
            </div>
        </>
    )
}

export default Header;