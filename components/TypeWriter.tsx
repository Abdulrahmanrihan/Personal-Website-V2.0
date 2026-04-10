'use client'
import { useEffect, useState } from 'react'

const phrases = [
  "AI Engineer & Full-Stack Developer.",
  "Building intelligent RAG systems.",
  "Crafting modern web experiences.",
  "Turning unstructured data into insights.",
  "Multi-agent frameworks. Production scale.",
]

export default function TypeWriter() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[phraseIdx]

    if (!deleting && charIdx === phrase.length) {
      const t = setTimeout(() => setDeleting(true), 2600)
      return () => clearTimeout(t)
    }

    if (deleting && charIdx === 0) {
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % phrases.length)
      return
    }

    const delay = deleting ? 32 : 68
    const t = setTimeout(() => {
      const next = deleting ? charIdx - 1 : charIdx + 1
      setDisplayed(phrase.slice(0, next))
      setCharIdx(next)
    }, delay)

    return () => clearTimeout(t)
  }, [charIdx, deleting, phraseIdx])

  return (
    <span className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
      {displayed}
      <span className="animate-blink inline-block border-r-2 border-green-400 ml-0.5 h-5 align-middle" />
    </span>
  )
}
