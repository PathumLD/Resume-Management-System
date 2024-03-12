import React from 'react'

const JobsTable = () => {
  return (
    <>
      <section className="w-full mx-auto mt-6 ">
        <div className="flex flex-col">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden ">
                {/* Scrollable Table Body */}
                <div className="overflow-y-auto max-h-96">
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr className=''> 
                            <th scope="col" class="py-3.5 px-4 text-sm sm:text-base font-regular text-center rtl:text-right text-primary-text ">
                                #
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm sm:text-base font-regular text-center rtl:text-right text-primary-text ">
                                Company
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm sm:text-base font-regular text-center rtl:text-right text-primary-text ">
                                Job Title
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm sm:text-base font-regular text-center rtl:text-right text-primary-text ">
                                Applications
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm sm:text-base font-regular text-center rtl:text-right text-primary-text ">
                                Action
                            </th>

                        </tr>
                    </thead>

                    <tbody class="bg-white divide-y divide-gray-200  ">
                        <tr>
                            <td class="px-4 py-4 text-sm sm:text-base text-center font-medium text-gray-700  whitespace-nowrap">
                                <div class="inline-flex items-center gap-x-3">
                                    <span>#3066</span>
                                </div>
                            </td>

                            <td class="px-4 py-4 text-sm sm:text-base text-center text-primary-text  whitespace-nowrap">
                                <div class=" items-center gap-x-2 flex-col flex justify-center">
                                    <img class="object-cover  w-20 h-12 " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                    <div>
                                        <h2 class="text-sm sm:text-base font-medium text-gray-800  ">Boffo System Labs</h2>
                                        
                                    </div>
                                </div>
                            </td>

                            {/* <td class="px-4 py-4 text-center text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap">
                                <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 ">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <h2 class="text-sm sm:text-base font-regular">Paid</h2>
                                </div>
                            </td> */}

                            <td class="px-4 py-4 text-center text-sm sm:text-base text-primary-text  whitespace-nowrap">Monthly subscription</td>

                            <td class="px-4 py-4 text-center text-sm sm:text-base text-primary-text  whitespace-nowrap">Monthly subscription</td>

                            <td class="px-4 py-4 text-center text-sm sm:text-base whitespace-nowrap">
                                <div class="flex items-center justify-center gap-x-2">
                                    <button class="text-primary-text font-medium transition-colors duration-200 border px-3 py-1 rounded-md hover:border-primary-text  hover:text-primary-text focus:outline-none">
                                        Details
                                    </button>

                                    <button class="text-blue-500 transition-colors font-medium duration-200 border px-3 py-1 rounded-md hover:text-blue hover:border-blue focus:outline-none">
                                        Download
                                    </button>
                                </div>
                            </td>


                        </tr>

                        
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>

                {/* Fixed Pagination */}
        {/* <div className="sticky bottom-0 w-full bg-white">
            <div className="flex items-center justify-between mt-6">
            <a href="#" className="flex items-center px-5 py-2 text-sm duration-200 bg-white border rounded-md transitimd-colors capitalism sm:text-gray-700 text-md gap-x-2 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>
                Previous
                </span>
            </a>

                    <div class="items-center hidden md:flex gap-x-3">
                        <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md  bg-blue-100/60">1</a>
                        <a href="#" class="px-2 py-1 text-sm text-primary-text rounded-md  hover:bg-gray-100">2</a>
                        <a href="#" class="px-2 py-1 text-sm text-primary-text rounded-md  hover:bg-gray-100">3</a>
                        <a href="#" class="px-2 py-1 text-sm text-primary-text rounded-md  hover:bg-gray-100">...</a>
                        <a href="#" class="px-2 py-1 text-sm text-primary-text rounded-md  hover:bg-gray-100">12</a>
                        <a href="#" class="px-2 py-1 text-sm text-primary-text rounded-md  hover:bg-gray-100">13</a>
                        <a href="#" class="px-2 py-1 text-sm text-primary-text rounded-md  hover:bg-gray-100">14</a>
                    </div>

                    <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                <span>
                Next
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </a>
            </div>
        </div> */}
    </section>
    </>
  )
}

export default JobsTable
