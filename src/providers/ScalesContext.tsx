import { createContext, useState } from "react"

export interface IChildren {
  children: React.ReactNode
}

export interface IScales {
  major: string[]
  pentatonic: string[]
}

interface IScalesContext {
  chromaticScale: string[]
  generateMajorScale: (note: string) => string[]
  generatePentatonicScale: (scale: string[]) => string[]
  scales: null | IScales
  setScales: React.Dispatch<React.SetStateAction<IScales | null>>
}

export const ScalesContext = createContext({} as IScalesContext)

export function ScalesProvider({ children }: IChildren) {
  const chromaticScale = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
  const [scales, setScales] = useState<null | IScales>(null)

  function generateMajorScale(note: string): string[] {
    let index = chromaticScale.indexOf(note)
    const majorScale = [chromaticScale[index]]

    const second = index + 2 > 11 ? chromaticScale[index + 2 - 12] : chromaticScale[index + 2]
    const third = index + 4 > 11 ? chromaticScale[index + 4 - 12] : chromaticScale[index + 4]
    const fourth = index + 5 > 11 ? chromaticScale[index + 5 - 12] : chromaticScale[index + 5]
    const fifth = index + 7 > 11 ? chromaticScale[index + 7 - 12] : chromaticScale[index + 7]
    const sixth = index + 9 > 11 ? chromaticScale[index + 9 - 12] : chromaticScale[index + 9]
    const seventh = index + 11 > 11 ? chromaticScale[index + 11 - 12] : chromaticScale[index + 11]

    majorScale.push(second, third, fourth, fifth, sixth, seventh)

    return majorScale
  }

  function generatePentatonicScale(scale: string[]): string[] {
    const pentatonicScale = [scale[0], scale[1], scale[2], scale[4], scale[5]]

    return pentatonicScale
  }

  return (
    <ScalesContext.Provider
      value={{
        chromaticScale,
        generateMajorScale,
        generatePentatonicScale,
        scales,
        setScales,
      }}>
      {children}
    </ScalesContext.Provider>
  )
}
