import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Index({ auth, printerConfig, message }) {

    const { flash } = usePage().props

    const {
        delete: destroy,
        processing,
    } = useForm();

    const deleteprinterconfig = (id) => {
        destroy(route('printerConfig.destroy', { id: id }));
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">printers</h2>}
        >
            <Head title="printerconfig" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    {flash.success && (
                        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span className="font-medium">{flash.success}</span>
                        </div>
                    )}
                    <NavLink href={route('printerConfig.create')} active={route().current('printerConfig.create')}>
                        <PrimaryButton>Create</PrimaryButton>
                    </NavLink>

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>

                                    <th scope="col" className="px-6 py-3">
                                        printerConfig
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Brand
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
                                        RoomNumber
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        created_at
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {printers.map(printer => (
                                    <tr key={printer.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {printerConfig.PrinterID}
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printerConfig.ConfigID}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printerConfig.SPSOID}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printerConfig.PrinterID}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printerConfig.DefaultPages}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printerConfig.AllowedFileTypes}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printerConfig.ConfigDate}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='w-52 truncate text-ellipsis overflow-hidden '>{printerConfig.ConfigPrinterStatus}</p>
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
    );
}