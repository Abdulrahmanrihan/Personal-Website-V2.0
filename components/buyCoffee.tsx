import Image
 from "next/image";
export default function Coffee() {
    return (
        <main className="fixed z-10  bottom-32 bg-yellow-300 border-black right-0 w-46 border border-r-0 rounded-l-xl">
            <a
            className="flex flex-row bottom-16 right-0 "
            target="_blank"
            href="https://www.buymeacoffee.com/abdulrahmnrihan"
            >
            <Image
                width={12}
                height={12}
                className="rounded-l-xl w-12 h-12 mr-1 bg-white p-2 "
                src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                alt="Buy me a coffee"
            />
            <span className="text-sm p-3">Buy me a coffee</span>
            </a>
        </main>
        );
    }