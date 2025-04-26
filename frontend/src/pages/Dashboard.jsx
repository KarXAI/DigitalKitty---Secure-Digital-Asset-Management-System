import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import { Upload, FolderPlus, ArrowUpDown, Trash2, Download } from 'lucide-react';

export default function Dashboard() {
    const [files, setFiles] = useState([
        { id: 1, name: 'document.pdf', size: '2.5 MB', type: 'PDF', uploadedAt: '2025-04-20' },
        { id: 2, name: 'image.jpg', size: '1.8 MB', type: 'Image', uploadedAt: '2025-04-19' },
        { id: 3, name: 'presentation.pptx', size: '5.2 MB', type: 'PowerPoint', uploadedAt: '2025-04-19' },
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold leading-7 text-white sm:text-4xl">
                        My Files
                    </h2>
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
                        >
                            <ArrowUpDown className="w-5 h-5 mr-2" />
                            Sort
                        </button>
                        <button
                            type="button"
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                        >
                            <FolderPlus className="w-5 h-5 mr-2" />
                            New Folder
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                    {/* Upload Card */}
                    <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-lg font-medium text-white mb-4">Upload Files</h3>
                        <div className="flex items-center justify-center">
                            <button
                                type="button"
                                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
                            >
                                <Upload className="w-5 h-5 mr-2" />
                                Upload
                            </button>
                        </div>
                    </div>

                    {/* Storage Usage Card */}
                    <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-lg font-medium text-white">Storage Usage</h3>
                        <div className="mt-4">
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                                        75% Used
                                    </span>
                                    <span className="text-xs font-semibold inline-block text-purple-600">
                                        7.5/10 GB
                                    </span>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                                    <div
                                        style={{ width: '75%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats Card */}
                    <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-lg font-medium text-white">Quick Stats</h3>
                        <dl className="mt-5 grid grid-cols-1 gap-5">
                            <div className="px-4 py-5 bg-gray-800 shadow rounded-lg overflow-hidden sm:p-6">
                                <dt className="text-sm font-medium text-gray-400 truncate">Total Files</dt>
                                <dd className="mt-1 text-3xl font-semibold text-white">{files.length}</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* Files Table */}
                <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-800">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Type
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Size
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Uploaded
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-900 divide-y divide-gray-700">
                            {files.map((file) => (
                                <tr key={file.id} className="hover:bg-gray-800 transition duration-300">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-white">{file.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-400">{file.type}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-400">{file.size}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {file.uploadedAt}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-blue-500 hover:text-blue-700 transition duration-300">
                                            <Download className="w-5 h-5 inline-block" />
                                        </button>
                                        <button className="ml-4 text-red-500 hover:text-red-700 transition duration-300">
                                            <Trash2 className="w-5 h-5 inline-block" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
