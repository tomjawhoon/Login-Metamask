import React from "react";
import { Link } from "react-router-dom";
import Logomatamask from "../../public/static/images/MetaMask.png"
const Home = () => {
    return (
        <>
            <div aria-label="group of cards" className="focus:outline-none w-full px-20 py-20 ">
                <div className="lg:flex items-center justify-center w-full ">
                    <div aria-label="card 1" className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded space-bee transform transition duration-500 hover:scale-110">
                        <div className="flex items-center border-b border-gray-200 pb-6">
                            <img src={Logomatamask} alt="coin avatar" className="w-12 h-12 rounded-full" />
                            <div className="flex items-start justify-between w-full">
                                <div className="pl-3 w-full">
                                    <p className="focus:outline-none text-xl font-medium leading-5 text-gray-800">1</p>
                                </div>
                                <div role="img" aria-label="bookmark">
                                    <svg className="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                            <div className="focus:outline-none flex">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
                                    <p className="focus:outline-none text-xl font-medium leading-5 text-gray-800">2</p>
                                </div>
                                <div aria-label="bookmark" role="img">
                                    <svg className="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                            <div className="focus:outline-none flex">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
                                    <p className="focus:outline-none text-xl font-medium leading-5 text-gray-800">3</p>
                                </div>
                                <div role="img" aria-label="bookmark">
                                    <svg className="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                            <div className="focus:outline-none flex">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
                                    <p className="focus:outline-none text-xl font-medium leading-5 text-gray-800">4</p>
                                </div>
                                <div role="img" aria-label="bookmark">
                                    <svg className="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                            <div className="focus:outline-none flex">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                <Link to={"/mobileconnect"}>Button</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:flex items-center justify-center w-full mt-7">
                    <div aria-label="card 5" className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded space-bee transform transition duration-500 hover:scale-110">
                        <div className="flex items-center border-b border-gray-200 pb-6">
                            <div className="w-12 h-12 bg-white rounded-full flex flex-shrink-0">
                                <img src={Logomatamask} alt="coin avatar" className="w-12 h-12 rounded-full" />
                            </div>
                            <div className="flex items-start justify-between w-full">
                                <div className="pl-3 w-full">
                                    <p className="focus:outline-none text-xl font-medium leading-5 text-gray-800">Rick & Morty</p>
                                </div>
                                <div role="img" aria-label="bookmark">
                                    <svg className="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                            <div className="focus:outline-none flex">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Button
                                </button>
                            </div>
                        </div>
                    </div>
                    <div aria-label="card 6" className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded space-bee transform transition duration-500 hover:scale-110">
                        <div className="flex items-center border-b border-gray-200 pb-6">
                            <div className="w-12 h-12 bg-white rounded-full flex flex-shrink-0">
                                <img src={Logomatamask} alt="coin avatar" className="w-12 h-12 rounded-full" />
                            </div>
                            <div className="flex items-start justify-between w-full">
                                <div className="pl-3 w-full">
                                    <p className="focus:outline-none text-xl font-medium leading-5 text-gray-800">La Liga: A history</p>
                                    <p className="focus:outline-none text-sm leading-normal pt-2 text-gray-500">36 members</p>
                                </div>
                                <div role="img" aria-label="bookmark">
                                    <svg className="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                            <div className="focus:outline-none flex">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Button
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;