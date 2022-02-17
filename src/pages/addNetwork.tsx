import { Modal, notification } from "antd";
import React from "react";
import NETWORK from "../../constants/network"
import Header from "../../components/Header/Header"
import { SmileOutlined } from '@ant-design/icons';

export const addNetowrkToWallet = async (
    chainId: string,
    chainName: string,
    nativeCurrency: { name: string; symbol: string; decimals: number },
    rpcUrls: string[],
    blockExplorerUrls: string[]
) => {
    try {
        const res = await (window as any).ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId,
                    chainName,
                    nativeCurrency,
                    rpcUrls,
                    blockExplorerUrls,
                },
            ],
        });
        if(res != "null"){
            notification.open({
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                message: 'Process status!! ',
                description:
                    'Plese check you network on metamask',
            });
        }
        return null;
    } catch (error) {
        console.error(error);
    }
};

const addnetwork = () => {
    const handleChangeNetwork = (network: typeof NETWORK[0]) => {
        addNetowrkToWallet(
            network.chainId,
            network.chainName,
            network.nativeCurrency,
            network.rpcUrls,
            network.blockExplorerUrls,
        );
    };


    return (
        <>
            <div className="flex flex-col  justify-center items-center  h-screen  bg-orange-300">
                <div className="text-5xl  text-center">
                    AddNetwork on Metamask
                </div>
                <div className="text-xl  text-center">Step 6 : AddNetwork</div>
                <div className="  px-56 py-20 w-full  overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            symbol
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Chain name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >

                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {NETWORK.map((res) => (
                                        <tr key={res.chainName}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={res.image} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{res.chainName}</div>
                                                        <div className="text-sm text-gray-500">{res.chainName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{res.nativeCurrency.symbol}</div>

                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{res.chainName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">

                                                <button onClick={() => { handleChangeNetwork(res); }}
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Button
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                        {/* <div className="text-2xl py-11 text-red-500  text-center">กรุณาเลือก Chain mainnet สำหรับทดลอง Addtoken</div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default addnetwork