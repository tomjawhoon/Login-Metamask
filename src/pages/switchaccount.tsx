import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header/Home"
import Logomatamask from "../../public/static/images/MetaMask.png"


interface ProviderRpcError extends Error {
    message: string;
    code: number;
    data?: unknown;
}

const switchaccount = () => {
    const [account, setAccount] = useState("")
    const [newaccount, newsetAccount] = useState("")

    useEffect(() => {
        handleAccountsChanged()
    }, [])

    const handleClick = async () => {
        const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' })
        const address: string = accounts[0];
        setAccount(address)
    }

    const handleAccountsChanged = async () => {
        (window as any).ethereum.on('accountsChanged', (newAddress: string) => {
            const address: string = newAddress;
            newsetAccount(address)
        });
    }



    return (
        <>
            {/* <Header /> */}
            <div className=" w-full h-screen  py-36 px-48  ">
                <div className="text-5xl  text-center">
                    Metamask login </div>
                <div className="flex flex-col justify-center items-center space-y-6">
                    <div> <img src={Logomatamask} width={400} height={400} /></div>

                    {account ? ("") : (<div>
                        <button onClick={() => handleClick()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 border border-blue-700 rounded">
                            Button
</button></div>)}
                    <div>  <h2>Account 1: {account}</h2></div>
                    {newaccount ? (<div>  <h2>Account 2: {newaccount}</h2></div>)
                        : (<div>  <h2>Account 2: กรุณาเปลี่ยน address</h2></div>)}
                </div>
            </div>
        </>
    )
}

export default switchaccount