import CreateForm from "./CreateForm";

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
                                    <td className="border p-2 border-black">{dataResponse.location}</td>
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