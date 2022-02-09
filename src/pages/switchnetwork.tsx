import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header/Home"
import Logomatamask from "../../public/static/images/MetaMask.png"


interface ProviderRpcError extends Error {
    message: string;
    code: number;
    data?: unknown;
}

const switchnetwork = () => {
    const [account, setAccount] = useState("")
    const [network, setNetwork] = useState("")

    useEffect(() => {
        handleChangNetwork()
        // handleAccountsDisconnected()
    }, [])

    const handleClick = async () => {
        const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' })
        const address: string = accounts[0];
        setAccount(address)
    }

    // const handleAccountsDisconnected = async () => {
    //     (window as any).ethereum.on('disconnect', (error: ProviderRpcError) => {
    //         console.log("error", error)
    //     })
    // }



    const handleChangNetwork = async () => {
        (window as any).ethereum.on('networkChanged', (networkId: string) => {
            const nameNetwork: { [key: string]: string } = {
                "1": "Ethereum Main Network (Mainnet)",
                "3": "Ropsten nameNetwork Network",
                "4": "Rinkeby Test Network",
                "5": "Goerli Test Network",
                "42": "Kovan Test Network",
            }
            const check = nameNetwork[networkId]
            setNetwork(check)
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
                    <div>
                        {network ?
                            (<div>
                                <h2>Account 2: {network}</h2></div>)
                            : (<div>  <h2>Account 2: กรุณาเปลี่ยน network</h2></div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default switchnetwork