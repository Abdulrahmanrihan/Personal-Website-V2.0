export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="h-1 bg-gradient-to-r from-green-400 via-blue-500 to-blue-700" />
      <div className="py-4 px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-400">
        <p className="font-semibold text-gray-700 dark:text-gray-300">
          Abdelrahman Rihan &copy; 2026
        </p>
        <p>
          Reach out:{' '}
          <a
            href="mailto:abdelrahman.rihan@ejust.edu.eg"
            className="underline hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            abdelrahman.rihan@ejust.edu.eg
          </a>
        </p>
      </div>
    </footer>
  )
}
