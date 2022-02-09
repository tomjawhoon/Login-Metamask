const METAMASK_LINK = `https://metamask.app.link/dapp/http://localhost:3000/mobileconnect`;
const mobileconnect = () => {
    return (
        <>
            <div className=" w-full h-screen  py-16 px-48  ">
                <a target="_blank" rel="noreferrer" href={METAMASK_LINK}>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 
                    text-white font-bold py-3 
                    px-8 border border-blue-700 rounded">
                        Button
                </button>
                </a></div>

        </>
    )
}

export default mobileconnect