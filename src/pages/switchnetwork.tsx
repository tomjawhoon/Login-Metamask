import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header/Header"
import Logomatamask from "../../public/static/images/MetaMask.png"
import { Button, notification, Spin } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const switchnetwork = () => {
    const [account, setAccount] = useState("")
    const [network, setNetwork] = useState("")

    useEffect(() => {
        handleChangNetwork()
        // handleAccountsDisconnected()
    }, [])

    const handleClick = async () => {
        const accounts = await (window as any).ethereum.request(
            { method: 'eth_requestAccounts' });
        const account: string = accounts[0];
        if (account) {
            setAccount(account)
            notification.open({
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                message: 'Process status!! ',
                description:
                    'Connect success ',
            });
        }
    }


    const handleChangNetwork = async () => {
        (window as any).ethereum.on('networkChanged', (networkId: string) => {
            const nameNetwork: { [key: string]: string } = {
                "1": "Ethereum Main Network (Mainnet)",
                "3": "Ropsten Network",
                "4": "Rinkeby Test Network",
                "5": "Goerli Test Network",
                "42": "Kovan Test Network",
            }
            const check = nameNetwork[networkId]
            setNetwork(check)
            notification.open({
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                message: 'Process status!! ',
                description:
                    "Change network success",
            });
        });
    }


    return (
        <>
            <Header />
            <div className=" w-full h-screen   py-16 px-48  bg-orange-300">
                <div className="flex flex-col">
                    <div className="text-5xl  text-center">
                        Metamask login
                     </div>
                    <div className="text-xl  text-center">Step 3 : Switch Network</div>
                </div>

                <div className="flex flex-col justify-center items-center space-y-6">
                    <div> <img src={Logomatamask} width={400} height={400} /></div>
                    <button onClick={() => handleClick()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 border border-blue-700 rounded">
                        Button
            </button>
                    {account ? (<div>
                        <h2 className="flex flex-row text-xl space-x-3">Account1:
                        <div className="text-blue-700">
                                {account}
                            </div>
                        </h2>

                    </div>) : (
                            <div>
                                <h2 className="flex flex-row text-xl space-x-3">
                                    <div className="flex flex-row space-x-3" >Account1:
                                    <div className="text-red-500">
                                            ??????????????????????????????????????????????????????????????????????????????
                                        </div></div>
                                    <div><Spin size="large" /></div>
                                </h2>
                            </div>

                        )}

                    {network ? (<div>  <h2 className="flex flex-row text-xl space-x-3">Account 2:
                    <div className="text-green-700 ml-2">
                            {network}
                        </div>
                    </h2></div>
                    )
                        :
                        (<div>
                            <h2 className="flex flex-row text-xl space-x-3 ">
                                <div>
                                    Account2:
                                </div>
                                <div className="flex flex-row text-red-500 space-x-2">
                                    <div>
                                        ???????????????????????????????????? Network
                                        </div>
                                    <Spin size="large" />
                                </div>
                            </h2>
                        </div>)}
                </div>
            </div>
        </>
    )
}

export default switchnetwork