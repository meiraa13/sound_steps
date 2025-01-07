import { createContext, useState } from "react"

export interface IChildren {
  children: React.ReactNode
}

interface IScalesContext {
  chromaticScale: string[]
  generateMajorScale: (note: string) => void
  majorScales: string[]
  setMajorScales: React.Dispatch<React.SetStateAction<string[]>>
}

export const ScalesContext = createContext({} as IScalesContext)

export function ScalesProvider({ children }: IChildren) {
  const chromaticScale = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
  const [majorScales, setMajorScales] = useState<string[]>([])

  function generateMajorScale(note: string) {
    let index = chromaticScale.indexOf(note)
    const majorScale = [chromaticScale[index]]

    const second = index + 2 > 11 ? chromaticScale[index + 2 - 12] : chromaticScale[index + 2]
    const third = index + 4 > 11 ? chromaticScale[index + 4 - 12] : chromaticScale[index + 4]
    const fourth = index + 5 > 11 ? chromaticScale[index + 5 - 12] : chromaticScale[index + 5]
    const fifth = index + 7 > 11 ? chromaticScale[index + 7 - 12] : chromaticScale[index + 7]
    const sixth = index + 9 > 11 ? chromaticScale[index + 9 - 12] : chromaticScale[index + 9]
    const seventh = index + 11 > 11 ? chromaticScale[index + 11 - 12] : chromaticScale[index + 11]

    majorScale.push(second, third, fourth, fifth, sixth, seventh)

    setMajorScales(majorScale)
  }

  return (
    <ScalesContext.Provider value={{ chromaticScale, generateMajorScale, majorScales, setMajorScales }}>
      {children}
    </ScalesContext.Provider>
  )
}
