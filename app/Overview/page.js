import React from 'react';
import Link from 'next/link';

function Page() {
    return (
        <>
            <Link href="../" className="border border-black text-green-800 bg-green-500 px-2 py-1 rounded hover:bg-slate-700 outline-none">Return to Main page</Link>
        </>
    )
}

export default Page;