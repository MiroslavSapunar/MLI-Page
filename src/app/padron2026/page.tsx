'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { useInView } from '@/hooks/useInView'
import NavBar from '@/app/components/navbar'

type Estudiante = {
  documento: string
  nombre: string
  extra: string // Legajo for regulares, Carrera for CBC
}

type PadronType = 'regulares' | 'cbc'

function parseCSVLine(line: string): string[] {
  const fields: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (inQuotes) {
      if (ch === '"') {
        if (i + 1 < line.length && line[i + 1] === '"') {
          current += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        current += ch
      }
    } else {
      if (ch === '"') {
        inQuotes = true
      } else if (ch === ',') {
        fields.push(current.trim())
        current = ''
      } else {
        current += ch
      }
    }
  }
  fields.push(current.trim())
  return fields
}

function parseCSV(text: string): Estudiante[] {
  const lines = text.trim().split('\n')
  const results: Estudiante[] = []

  for (let i = 1; i < lines.length; i++) {
    const cols = parseCSVLine(lines[i])
    if (cols.length >= 3) {
      results.push({
        documento: cols[0],
        nombre: cols[1],
        extra: cols[2],
      })
    }
  }
  return results
}

function normalize(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

export default function Padron2026() {
  const { isDark } = useTheme()
  const [padronType, setPadronType] = useState<PadronType>('regulares')
  const [padronRegulares, setPadronRegulares] = useState<Estudiante[]>([])
  const [padronCBC, setPadronCBC] = useState<Estudiante[]>([])
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Estudiante[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState<string | null>(null)
  const searchTimestamps = useRef<number[]>([])

  const heroSection = useInView()
  const searchSection = useInView()

  const padron = padronType === 'regulares' ? padronRegulares : padronCBC

  // Load both CSVs on mount
  useEffect(() => {
    let loaded = 0
    const checkDone = () => { if (++loaded >= 2) setLoading(false) }

    fetch('/Padrones_Definitivos_FIUBA_2026.xlsx - Regulares Definitivo.csv')
      .then(res => res.text())
      .then(text => { setPadronRegulares(parseCSV(text)); checkDone() })
      .catch(() => checkDone())

    fetch('/Padrones_Definitivos_FIUBA_2026.xlsx - CBC Definitivo.csv')
      .then(res => res.text())
      .then(text => { setPadronCBC(parseCSV(text)); checkDone() })
      .catch(() => checkDone())
  }, [])

  // Clear results when switching padron type
  useEffect(() => {
    setResults(null)
    setQuery('')
  }, [padronType])

  // Auto-dismiss toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  const handleSearch = useCallback(() => {
    const trimmed = query.trim()
    if (!trimmed) return

    // Rate limiting: max 3 searches per 30 seconds
    const now = Date.now()
    const recent = searchTimestamps.current.filter(t => now - t < 30000)
    searchTimestamps.current = recent

    if (recent.length >= 3) {
      const oldest = recent[0]
      const waitSeconds = Math.ceil((30000 - (now - oldest)) / 1000)
      setToast(`Demasiadas búsquedas. Esperá ${waitSeconds} segundos para volver a buscar.`)
      return
    }

    searchTimestamps.current.push(now)

    const normalizedQuery = normalize(trimmed)
    const matches = padron.filter(e => {
      return (
        normalize(e.documento).includes(normalizedQuery) ||
        normalize(e.nombre).includes(normalizedQuery) ||
        normalize(e.extra).includes(normalizedQuery)
      )
    })

    setResults(matches)
  }, [query, padron])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch()
  }

  const extraLabel = padronType === 'regulares' ? 'Legajo' : 'Carrera'

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-primary text-white' : 'bg-white text-gray-900'}`}>
      <NavBar />

      {/* Toast */}
      {toast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 max-w-md w-full px-4">
          <div className={`px-6 py-4 rounded-2xl shadow-lg text-center font-medium ${isDark ? 'bg-secundary text-white' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {toast}
          </div>
        </div>
      )}

      {/* Hero */}
      <section ref={heroSection.ref} className="pt-32 pb-16 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-700 ${heroSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <p className={`text-sm uppercase tracking-[0.3em] mb-4 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
              Elecciones FIUBA 2026
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
              Padrón
              <br />
              <span className="text-secundary">Electoral</span>
            </h1>
            <p className={`text-lg md:text-xl max-w-2xl ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              Consultá si estás habilitado para votar en las próximas elecciones de Consejo Directivo.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section ref={searchSection.ref} className="pt-8 pb-16 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-700 delay-200 ${searchSection.isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

            {/* Padron type toggle */}
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setPadronType('regulares')}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  padronType === 'regulares'
                    ? 'bg-secundary text-white'
                    : isDark
                      ? 'bg-white/10 text-white/70 hover:bg-white/20'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Grado
              </button>
              <button
                onClick={() => setPadronType('cbc')}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  padronType === 'cbc'
                    ? 'bg-secundary text-white'
                    : isDark
                      ? 'bg-white/10 text-white/70 hover:bg-white/20'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                CBC
              </button>
            </div>

            {/* Search bar */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mb-12">
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={padronType === 'regulares' ? 'Nombre, DNI o legajo...' : 'Nombre, DNI o carrera...'}
                disabled={loading}
                className={`flex-1 px-6 py-4 rounded-full text-lg outline-none transition-colors ${
                  isDark
                    ? 'bg-white/10 text-white placeholder-white/40 focus:bg-white/15'
                    : 'bg-gray-100 text-gray-900 placeholder-gray-400 focus:bg-gray-200'
                }`}
              />
              <button
                onClick={handleSearch}
                disabled={loading || !query.trim()}
                className="px-8 py-4 bg-secundary text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {loading ? 'Cargando padrón...' : 'Buscarme'}
              </button>
            </div>

            {/* Results */}
            {results !== null && (
              <div>
                {results.length > 0 ? (
                  <>
                    <p className={`text-sm uppercase tracking-[0.3em] mb-6 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                      {results.length} resultado{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {results.slice(0, 50).map((e, i) => (
                        <div
                          key={i}
                          className={`p-6 rounded-2xl transition-colors ${
                            isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                        >
                          <p className="font-bold text-lg mb-2">{e.nombre}</p>
                          <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                            DNI: {e.documento}
                          </p>
                          <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                            {extraLabel}: {e.extra}
                          </p>
                        </div>
                      ))}
                    </div>
                    {results.length > 50 && (
                      <p className={`mt-6 text-sm ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                        Mostrando 50 de {results.length} resultados. Intentá una búsqueda más específica.
                      </p>
                    )}
                  </>
                ) : (
                  <div className={`p-8 rounded-2xl text-center ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <p className="text-xl font-bold mb-3">No estás en el Padrón</p>
                    <p className={isDark ? 'text-white/70' : 'text-gray-600'}>
                      Si creés que es un error, enviá un email a{' '}
                      <a
                        href="mailto:tramitaciones@fi.uba.ar"
                        className="text-secundary underline hover:opacity-80"
                      >
                        tramitaciones@fi.uba.ar
                      </a>
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
