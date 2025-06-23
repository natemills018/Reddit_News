
const Header = () => (
    <header className="bg-orange-600 text-white px-8 py-4 flex items-center justify-between">
        <h1 className="m-0 text-2xl tracking-wide font-bold">
            Reddit News Aggregator
        </h1>
        <nav>
            <a href="/" className="text-white no-underline mr-6 hover:underline">
                Home
            </a>
            <a href="/about" className="text-white no-underline hover:underline">
                About
            </a>
        </nav>
    </header>
);

export default Header;
