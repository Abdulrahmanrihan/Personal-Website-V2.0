export default function Coffee() {
    return (
        <main className="fixed z-10 bottom-32 right-0 w-32 border-2 rounded-l-xl">
            <a
            className="flex flex-row bottom-16 right-0 "
            target="_blank"
            href="https://www.buymeacoffee.com/theshubhagrwl"
            >
            <img
                className="w-7 h-7"
                src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                alt="Buy me a coffee"
            />
            <span className="coffeeButtonText">Buy me a coffee</span>
            </a>
        </main>
        );
    }