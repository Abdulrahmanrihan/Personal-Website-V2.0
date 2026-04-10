type Props = {
  title: string;
  category: string;
  description: string;
}

const categoryConfig: Record<string, { gradient: string; icon: JSX.Element }> = {
  AI: {
    gradient: 'from-purple-500 to-blue-500',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
        <path d="M27 24a2.96 2.96 0 0 0-1.285.3l-4.3-4.3H18v2h2.586l3.715 3.715A2.966 2.966 0 0 0 24 27a3 3 0 1 0 3-3zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm0-15a2.995 2.995 0 0 0-2.816 2H18v2h6.184A2.995 2.995 0 1 0 27 13zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm0-15a3.003 3.003 0 0 0-3 3a2.966 2.966 0 0 0 .348 1.373L20.596 10H18v2h3.404l4.4-4.252A2.999 2.999 0 1 0 27 2zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1z"/>
        <path d="M18 6h2V4h-2a3.976 3.976 0 0 0-3 1.382A3.976 3.976 0 0 0 12 4h-1a9.01 9.01 0 0 0-9 9v6a9.01 9.01 0 0 0 9 9h1a3.976 3.976 0 0 0 3-1.382A3.976 3.976 0 0 0 18 28h2v-2h-2a2.002 2.002 0 0 1-2-2V8a2.002 2.002 0 0 1 2-2Zm-6 20h-1a7.005 7.005 0 0 1-6.92-6H6v-2H4v-4h3a3.003 3.003 0 0 0 3-3V9H8v2a1 1 0 0 1-1 1H4.08A7.005 7.005 0 0 1 11 6h1a2.002 2.002 0 0 1 2 2v4h-2v2h2v4h-2a3.003 3.003 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h2v4a2.002 2.002 0 0 1-2 2Z"/>
      </svg>
    ),
  },
  Web: {
    gradient: 'from-blue-500 to-cyan-400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm0-2h10.5v-3.5H4V18Zm12.5 0H20V9h-3.5v9ZM4 12.5h10.5V9H4v3.5Z"/>
      </svg>
    ),
  },
  Cloud: {
    gradient: 'from-cyan-400 to-teal-500',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96z"/>
      </svg>
    ),
  },
  database: {
    gradient: 'from-green-400 to-emerald-500',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4Z"/>
      </svg>
    ),
  },
}

const fallback = {
  gradient: 'from-gray-400 to-gray-600',
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5l10-5l-10-5M2 17l10 5l10-5M2 12l10 5l10-5"/>
    </svg>
  ),
}

export default function Skill({ title, category, description }: Props) {
  const config = categoryConfig[category] ?? fallback
  return (
    <div className="h-full">
      <div className="flex flex-col items-start gap-4 p-5 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 transition-all group">
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
          {config.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 dark:text-white mb-1.5">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
