function CreateForm({ dataResponse,handleSubmit,handleChange,formData }) {
    return (
        <>
            <div className="flex justify-center items-center ">
                <div className="md:grid md:grid-cols-2 md:gap-6 ">
                    <div className="mt-6 md:mt-0 md:col-span-2 ">
                        <form onSubmit={handleSubmit} method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5  bg-green-400 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">

                                        <div className="col-span-6 sm:col-span-6 text-center">
                                            <h3 className="text-lg font-medium leading-6 text-gray-900">Create Cookie Stand</h3>
                                        </div>


                                        <div className="col-span-1 sm:col-span-1">
                                            <label for="location" className="text-sm font-medium text-gray-700">Location</label>
                                        </div>
                                        <div className="col-span-5 sm:col-span-5">
                                            <input type="text" name="location" id="location"  value={formData.location} onChange={handleChange} autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label for="MinimumCustomer" className="block text-sm font-medium text-gray-700">Minimum Customer per Hour</label>
                                            <input type="text" name="minimumCustomersPerHour" id="minimumCustomersPerHour" value={formData.minimumCustomersPerHour} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="maximumCustomersPerHour" className="block text-sm font-medium text-gray-700">Maximum Customer per Hour</label>
                                            <input type="text" name="maximumCustomersPerHour" id="maximumCustomersPerHour" value={formData.maximumCustomersPerHour}  onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="averageCookiesPerSale" className="block text-sm font-medium text-gray-700">Average Cookies per Sale</label>
                                            <input type="text" name="averageCookiesPerSale" id="averageCookiesPerSale"  value={formData.averageCookiesPerSale} onChange={handleChange} autocomplete="postal-code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3  bg-green-400 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Create
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}


export default CreateForm;