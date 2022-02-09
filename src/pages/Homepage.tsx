import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Logomatamask from "../../public/static/images/MetaMask.png"
import Copyright from "../../components/Copyright/Copyright"
const Home = () => {
    return (
        <>
            <Header />
            <div aria-label="group of cards" className="focus:outline-none w-full px-20 py-20 bg-orange-300">
                <div className="lg:flex items-center justify-center w-full ">
                    <div aria-label="card 1" className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded space-bee transform transition duration-500 hover:scale-110">
                        <div className="flex items-center border-b border-gray-200 pb-6">
                            <img src={Logomatamask} alt="coin avatar" className="w-12 h-12 rounded-full" />
                            <div className="flex items-start justify-between w-full">
                                <div className="pl-3 w-full">
                                    <p className="focus:outline-none text-xl font-medium leading-5 text-gray-800">Step 1 : Connect Metamask</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">
                                เริ่มต้นสำหรับการเชื่อมต่อ Metamask</p>
                            <div className="focus:outline-none flex">
                                <button className="bg-blue-200 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded-full">
                                    <Link to={"/connectmetamask"}>Button</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div aria-label="card 2" className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded space-bee transform transition duration-500 hover:scale-110">
                        <div className="flex items-center border-b border-gray-200 pb-6">

                            <div className="w-12 h-12 bg-white rounded-full flex flex-shrink-0"> <img src={Logomatamask} alt="coin avatar" className="w-12 h-12 rounded-full" /></div>
                            <div className="flex items-start justify-between w-full">
                                <div className="pl-3 w-full">
                                    <p className="focus:outline-none text-xl font-medium leading-5 text-gray-800">Step 2 : Switch Account</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">
                                เริ่มต้นเรียนรู้การ สลับ address สำหรับทำธุรกรรม
                            </p>
                            <div className="focus:outline-none flex">
                                <button className="bg-blue-200 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded-full">
                                    <Link to={"/switchaccount"}>Button</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="lg:flex items-center justify-center w-full mt-7">
                    <div aria-label="card 3" className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded space-bee transform transition duration-500 hover:scale-110">
                        <div className="flex items-center border-b border-gray-200 pb-6">
                            <div className="w-12 h-12 bg-white rounded-full flex flex-shrink-0">
                                <img src={Logomatamask} alt="coin avatar" className="w-12 h-12 rounded-full" />
                            </div>
                            <div className="flex items-start justify-between w-full">
                                <div className="pl-3 w-full">
                                    <p className="focus:outline-none text-xl font-medium leading-5 text-gray-800">
                                        Step 3 : Switch Network</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">
                                เริ่มต้นการเปลี่ยน Network (Mainnet, Rinkeby and Kovan)
                                </p>
                            <div className="focus:outline-none flex">
                                <button className="bg-blue-200 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded-full">
                                    <Link to={"/switchnetwork"}>Button</Link>
                                </button>
                            </div>
                        </div>
                    </div>


                    <div aria-label="card 4" className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded space-bee transform transition duration-500 hover:scale-110">
                        <div className="flex items-center border-b border-gray-200 pb-6">
                            <div className="w-12 h-12 bg-white rounded-full flex flex-shrink-0">
                                <img src={Logomatamask} alt="coin avatar" className="w-12 h-12 rounded-full" />
                            </div>
                            <div className="flex items-start justify-between w-full">
                                <div className="pl-3 w-full">
                                    <p className="focus:outline-none text-xl font-medium leading-5 text-gray-800">
                                        Step 4 : Connect Metamask on Mobilephone</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">
                                การเชื่อมต่อกระเป๋า Metamask บน smartphone</p>
                            <div className="focus:outline-none flex">
                                <button className="text-gray-400 cursor-not-allowed font-bold py-2 px-4 rounded-full">
                                    <Link to={"/mobileconnect"}>Button</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-20">
                    <Copyright />
                </div>

            </div>
        </>
    )
}

export default Home;