import React from 'react'

const CompanyExtra = () => {
  return (
    <>
        <div className='mt-4 '>
            <div className='sm:h-[20rem] w-full sm:w-[35rem] h-60 bg-slate-400 mx-auto mb-12 md:mb-10 sm:mb-6 shadow-lg overflow-hidden'></div>
        </div>

      <div className="mt-10 overflow-x-auto ">
        <h2 className='mb-6 ml-6 text-lg font-semibold sm:ml-10 sm:text-xl md:text-2xl '>Vacancy Details</h2>
        <table className="min-w-full text-sm text-center bg-white divide-y-2 divide-gray-200">
            <thead className="ltr:text-left rtl:text-right">
            <tr>
                <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Job Title</th>
                <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap">Applications</th>
                <th className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap"></th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 ">
            <tr className=''>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">John Doe</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">20</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    <button className='p-2 font-medium text-red-500 border hover:border-red-500 rounded-3xl hover:text-red-500 hover:bg-transparent'>Block Applications</button>
                </td>
            </tr>

            </tbody>
        </table>
        </div>
    </>
  )
}

export default CompanyExtra
