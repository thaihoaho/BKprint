import AuthenticatedLayout from 'resources/js/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import NavLink from 'resources/js/Components/NavLink';
import PrimaryButton from 'resources/js/Components/PrimaryButton';
import { useForm } from '@inertiajs/react';

export default function Index({ auth, printers, message }) {

    const { flash } = usePage().props

    const {
        delete: destroy,
        processing,
    } = useForm();

    const deleteprinter = (id) => {
        destroy(route('printers.destroy', { id: id }));
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">PRINTERS</h2>}
        >
            <Head title="Printers" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    {flash.success && (
                        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span className="font-medium">{flash.success}</span>
                        </div>
                    )}
                    <NavLink href={route('printers.create')} active={route().current('printers.create')}>
                        <PrimaryButton>Create</PrimaryButton>
                    </NavLink>

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>

                                    <th scope="col" className="px-6 py-3">
                                        PrinterID
                                    </th>
                                    <th scope="col" className="px-2 py-3">
                                        Bran
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Model
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        CampusName
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        BuildingName
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        RoomNumbeR
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        created_at
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        updated_at
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {printers.map(printer => (
                                    <tr key={printer.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {printer.title}
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printer.Brand}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printer.Model}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printer.Description}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printer.CampusName}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printer.BuildingName}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printer.RoomNumber}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printer.created_at}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printer.updated_at}</p>
                                        </td>

                                        <td className="px-6 py-4">
                                            {/* <Link href={route('printers.show',{id:printer.id})}>
                                                <SecondaryButton className='mr-1 mb-1 text-sky-400'>View</SecondaryButton>
                                            </Link>
                                            <Link href={route('printers.edit',{id:printer.id})}>
                                                <SecondaryButton className='mr-1 mb-1 text-green-400'>Edit</SecondaryButton>
                                            </Link>
                                             
                                            <SecondaryButton className='mr-1 mb-1 text-red-400' disabled={processing} onClick={()=>deleteprinter(printer.id)}>Delete</SecondaryButton> */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
        // <AuthenticatedLayout>
        // <div className={clx('wrapper')}>
        //   <div className={clx("content")}>
        //       <img
        //         src={asset.sspsIcon} 
        //         alt="Logo In Ấn"
        //         className={clx("logoin")}
        //       />
        //     <h1 style={{fontSize: '40px'}}>
        //       DỊCH VỤ IN ẤN THÔNG MINH
        //       <br />
        //       TRƯỜNG ĐẠI HỌC BÁCH KHOA TP.HCM
        //     </h1>
        //     <p>
        //       Hệ thống in ấn dành riêng cho sinh viên Bách Khoa, giúp tiết kiệm chi phí, thời gian mà vẫn đảm bảo chất lượng. In tài liệu mọi lúc, mọi nơi chỉ với một cú click chuột !
        //     </p>
        //     <Link to='/login' className={clx('cta-button')}>In ngay</Link>
        //   </div>
        //  </div>
        //  </AuthenticatedLayout>
    );
}