
import {BsFillTrashFill} from 'react-icons/ai'

function ReportTable({ dataResponse, hours }) {

    const totalHourlySales = new Array(hours.length).fill(0);
    return (
        <>
            <div className="mb-6 bg-green-700">
                {dataResponse.length === 0 ? (
                    <h2 className="text-gray-600">No Cookie Stands Available</h2>
                ) : (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="border p-2 border-black">Location</th>
                                {hours.map((hour, index) => (
                                    <th key={index} className="border p-2 border-black">
                                        {hour}

                                    </th>
                                ))}
                                <th className="border p-2 border-black">Totals</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataResponse.map((dataResponse, index) => (
                                <tr key={index}>
                                    <td className="flex border p-3 border-black justify-between" ><span>{dataResponse.location}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 bg-red-500">
    <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
    <path fill-rule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zm5.22 1.72a.75.75 0 011.06 0L10 10.94l1.72-1.72a.75.75 0 111.06 1.06L11.06 12l1.72 1.72a.75.75 0 11-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 01-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd" />
    </svg>

                                    </td>
                                    {dataResponse.hourlySale.map((sales, index) => (
                                        <td key={index} className="border p-2 border-black">
                                            {sales}

                                        </td>
                                    ))}
                                    <td className="border p-2 border-black">
                                        {dataResponse.hourlySale.reduce((acc, curr) => acc + curr, 0)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th className="border p-2 border-black">Totals</th>
                                {hours.map((hour, index) => {
                                    const total = dataResponse.reduce(
                                        (acc, curr) => acc + curr.hourlySale[index],
                                        0
                                    );
                                    totalHourlySales[index] = total;
                                    return (
                                        <td key={index} className="border p-2 border-black">
                                            {total}
                                        </td>
                                    );
                                })}
                                <td className="border p-2 border-black">
                                    {totalHourlySales.reduce((acc, curr) => acc + curr, 0)}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                )}
            </div>

        </>
    )

}

export default ReportTable;