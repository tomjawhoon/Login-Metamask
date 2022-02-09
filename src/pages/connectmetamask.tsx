import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header"
import Logomatamask from "../../public/static/images/MetaMask.png"
import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Spin, Space } from 'antd';

const connectmetamask = () => {
    const [account, setAccount] = useState("")
    async function handleClick() {
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
    return (
        <>
             <Header />
            <div className=" w-full h-screen   py-16 px-48  bg-orange-300 ">
                <div className="flex flex-col">
                    <div className="text-5xl  text-center">
                        Metamask login
                     </div>
                    <div className="text-xl  text-center">Step 1 : Connect Metamask</div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-6">
                    <div> <img src={Logomatamask} width={400} height={400} /></div>
                    <div>
                        <button onClick={(e) => handleClick()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 border border-blue-700 rounded">
                            Button
                    </button>
                    </div>
                    <div>
                        {account ? (<h2 className="flex flex-row text-xl space-x-3">Account:
                            <div className="text-blue-700">
                                {account}
                            </div>
                        </h2>) : (
                                <h2 className="flex flex-row text-xl space-x-3 ">Account:
                                    <div className="text-blue-700 ml-6">
                                        No address
                                    </div>
                                    <div><Spin size="large" /></div>
                                </h2>
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default connectmetamask