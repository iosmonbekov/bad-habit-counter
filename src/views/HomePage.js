import Counter from "../components/counter/Counter";

function HomePage() {
    return <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-indigo-600">You was cool guy for:</span>
            <Counter />
        </h2>
    </div>
}

export default HomePage;
