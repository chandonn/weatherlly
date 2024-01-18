import { useEffect, useState } from "react"

export const useSearchResults = (query: string) => {
  const [results, setResults] = useState<{ name: string }[]>([])

  useEffect(() => {
    setResults([
      { name: 'Rio de Janeiro' },
      { name: 'Salvador'},
      { name: 'Penedo' }
    ])

    return () => {
      setResults([])
    }
  }, [query])

  return results
}
