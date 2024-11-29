import AuthenticatedLayout from 'resources/js/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import NavLink from 'resources/js/Components/NavLink';
import PrimaryButton from 'resources/js/Components/PrimaryButton';
import SecondaryButton from 'resources/js/Components/SecondaryButton';
import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Index({ auth, print_jobs, message }) {

    const { flash } = usePage().props

    const {
        delete: destroy,
        processing,
    } = useForm();

    const deleteprint_job = (id) => {
        destroy(route('print_jobs.destroy', { id: id }));
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-3xl text-gray-800 leading-tight">Lịch sử in</h2>}
        >
            <Head title="Lịch sử" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-5 lg:px-8 space-y-6">
                    {flash.success && (
                        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span className="font-medium">{flash.success}</span>
                        </div>
                    )}
                    {/* <NavLink href={route('print_jobs.create')} active={route().current('print_jobs.create')}>
                        <PrimaryButton>Create</PrimaryButton>
                    </NavLink> */}
                    <div class="relative">
                        <input
                            type="text"
                            class="w-1/3 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Tìm kiếm..."
                        />
                        <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17a6 6 0 100-12 6 6 0 000 12zm0 0l5 5m-5-5h.01" />
                            </svg>
                        </div>
                    </div>


                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    {/* <th scope="col" className="px-5 py-3">
                                    ID
                                </th> */}
                                    <th className="px-6 py-3">STT</th>
                                    <th scope="col" className="px-5 py-3">
                                        Tài liệu
                                    </th>
                                    <th scope="col" className="px-5 py-3">
                                        Máy in
                                    </th>
                                    <th scope="col" className="px-5 py-3">
                                        Thời gian
                                    </th>
                                    <th scope="col" className="px-5 py-3">
                                        Số trang
                                    </th>
                                    <th scope="col" className="px-5 py-3">
                                        Số bản
                                    </th>
                                    <th scope="col" className="px-5 py-3">
                                        Trạng thái
                                    </th>
                                    <th scope="col" className="px-5 py-3">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {print_jobs.map((print_job, index) => (
                                    <tr key={print_job.PrintJobID} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-5 py-4">
                                            {index + 1}
                                        </td>
                                        <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {print_job.DocumentID}
                                        </th>
                                        <td className="px-5 py-4">
                                            <p className='w-30 truncate text-ellipsis overflow-hidden '>{print_job.PrinterID}</p>
                                        </td>
                                        <td className="px-5 py-4">
                                            <p className='w-30 truncate text-ellipsis overflow-hidden '>{print_job.StartTime}</p>
                                        </td>
                                        <td className="px-5 py-4">
                                            <p className='w-30 truncate text-ellipsis overflow-hidden '>{print_job.PagesPrinted}</p>
                                        </td>
                                        <td className="px-5 py-4">
                                            <p className='w-30 truncate text-ellipsis overflow-hidden '>{print_job.Copies}</p>
                                        </td>
                                        <td className="px-5 py-4 w-30">

                                            <span className="mr-1 mb-1 text-white bg-green-500 rounded px-5 py-2 shadow cursor-pointer">
                                                Đã in
                                            </span>

                                        </td>
                                        <td className="py-4 ">
                                            <SecondaryButton className='mr-1 mb-1 text-red-400' disabled={processing} onClick={() => deletePost(post.id)}>Hủy</SecondaryButton>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div class="flex items-center justify-between py-3 px-5">
                             <div class="text-sm text-gray-500">
                                Hiển thị 3/180 dòng
                            </div>
                            <div class="flex items-center space-x-2">
                                <button class="px-4 py-2 bg-gray-200 text-sm text-gray-600 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <span>&lt;&lt;</span> Trước
                                </button>
                                <button class="px-4 py-2 bg-blue-500 text-sm text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Sau <span>&gt;&gt;</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}