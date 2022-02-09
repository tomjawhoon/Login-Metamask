const Home = () => {
    return (
        <>
            <nav className="font-sans flex flex-row space-x-5 justify-center items-center text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0">
                    <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a>
                </div>
                <div>
                    <a href="/one" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">One</a>
                    <a href="/two" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Two</a>
                    <a href="/three" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Three</a>
                </div>
            </nav>
        </>
    )
}

export default Home