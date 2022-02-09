import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Home"
import Logomatamask from "../../public/static/images/MetaMask.png"
const connectmetamask = () => {
    const [account, setAccount] = useState("")
    const [loading, setLoading] = useState(false);
    async function handleClick() {
        setLoading(true);
        const accounts = await (window as any).ethereum.request(
            { method: 'eth_requestAccounts' });
        const account: string = accounts[0];
        setAccount(account)
        setLoading(false);
    }
    return (
        <>
            {/* <Header /> */}
            <div className=" w-full h-screen py-36 px-48  ">
                <div className="text-5xl  text-center">
                    Metamask login </div>
                <div className="flex flex-col justify-center items-center space-y-6">
                    <div> <img src={Logomatamask} width={400} height={400} /></div>
                    <div><button onClick={(e) => handleClick()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 border border-blue-700 rounded">
                        Button
                    </button></div>
                    <div>  <h2>Account: {account}</h2></div>
                </div>
            </div>
        </>
    )
}

export default connectmetamask