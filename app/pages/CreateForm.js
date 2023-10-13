function CreateForm({ dataResponse }) {
    return (
        <>
            <div class="flex justify-center items-center ">
                <div class="md:grid md:grid-cols-2 md:gap-6 ">
                    <div class="mt-6 md:mt-0 md:col-span-2 ">
                        <form method="POST">
                            <div class="shadow overflow-hidden sm:rounded-md">
                                <div class="px-4 py-5  bg-green-400 sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">

                                        <div class="col-span-6 sm:col-span-6 text-center">
                                            <h3 class="text-lg font-medium leading-6 text-gray-900">Create Cookie Stand</h3>
                                        </div>


                                        <div class="col-span-1 sm:col-span-1">
                                            <label for="Location" class="text-sm font-medium text-gray-700">Location</label>
                                        </div>
                                        <div class="col-span-5 sm:col-span-5">
                                            <input type="text" name="Location" id="Location" value={dataResponse.location} autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label for="MinimumCustomer" class="block text-sm font-medium text-gray-700">Minimum Customer per Hour</label>
                                            <input type="text" name="MinimumCustomer" id="MinimumCustomer" value={dataResponse.minimumCustomersPerHour} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="MaximumCustomer" class="block text-sm font-medium text-gray-700">Maximum Customer per Hour</label>
                                            <input type="text" name="MaximumCustomer" id="MaximumCustomer" value={dataResponse.maximumCustomersPerHour} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="Average" class="block text-sm font-medium text-gray-700">Average Cookies per Sale</label>
                                            <input type="text" name="Average" id="Average" value={dataResponse.averageCookiesPerSale} autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                </div>
                                <div class="px-4 py-3  bg-green-400 text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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