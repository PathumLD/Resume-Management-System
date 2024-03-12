import React from 'react'

const Table = () => {
  return (
    <>
      <section className="w-full mx-auto mt-2 ">
        <div className="flex flex-col">
            <div className="inline-block min-w-full py-2 align-middle ">
                <div className="overflow-hidden rounded-t-xl">
                {/* Scrollable Table Body */}
                <div className="overflow-y-auto max-h-96">
                    <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50">
                        <tr className=''>

                            <th scope="col" class="px-4 py-3.5 text-sm sm:text-base font-regular text-center rtl:text-right text-primary-text ">
                                Company
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm sm:text-base font-regular text-center rtl:text-right text-primary-text ">
                                Job Title
                            </th>

                            <th scope="col" class="py-3.5 px-4 text-sm sm:text-base font-regular text-center rtl:text-right text-primary-text ">
                                CV
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm sm:text-base font-regular text-center rtl:text-right text-primary-text ">
                                Status
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm sm:text-base font-regular text-center rtl:text-right text-primary-text ">
                                Action
                            </th>

                        </tr>
                    </thead>

                    <tbody class="bg-white divide-y divide-gray-200  ">
                        <tr>

                            <td class="px-4 py-4 text-sm sm:text-base text-center text-primary-text  whitespace-nowrap">
                                <div class=" items-center gap-x-2 flex-col flex justify-center">
                                    <img class="object-cover  w-20 h-12 " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                    <div>
                                        <h2 class="text-sm sm:text-base font-medium text-gray-800  ">Boffo System Labs</h2>
                                        
                                    </div>
                                </div>
                            </td>

                            

                            <td class="px-4 py-4 text-center text-sm sm:text-base text-primary-text  whitespace-nowrap">Monthly subscription</td>

                            <td class="px-4 py-4 text-sm sm:text-base text-center  text-gray-700  whitespace-nowrap">
                                <div class="inline-flex items-center gap-x-3">
                                    <span>CV-1</span>
                                </div>
                            </td>

                            <td class="px-4 py-4 text-center text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap">
                                <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 ">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <h2 class="text-sm sm:text-base font-regular">Downloaded</h2>
                                </div>
                            </td>

                            <td class="px-4 py-4 text-center text-sm sm:text-base whitespace-nowrap">
                                <div class="flex items-center justify-center gap-x-2">
                                    <button class="text-primary-text font-medium transition-colors duration-200 border px-3 py-1 rounded-3xl hover:border-red-500  hover:text-red-500 focus:outline-none">
                                        Cancel Application
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
            </section>
    </>
  )
}

export default Table
