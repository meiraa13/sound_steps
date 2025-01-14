import { createContext, useState } from "react"

export interface IChildren {
  children: React.ReactNode
}

export interface IScales {
  major: string[]
  pentatonic: string[]
  dorian: string[]
  mixolydian: string[]
  minor: string[]
  phrygian: string[]
  lydian: string[]
  locrian: string[]
}

interface IScalesContext {
  sharpenedScale: string[]
  generateMajorScale: (note: string) => string[]
  generatePentatonicScale: (scale: string[]) => string[]
  generateDorianScale: (scale: string[]) => string[]
  generateMixolydianScale: (scale: string[]) => string[]
  generateMinorScale: (scale: string[]) => string[]
  generatePhrygianScale: (scale: string[]) => string[]
  generateLydianScale: (scale: string[]) => string[]
  generateLocrianScale: (scale: string[]) => string[]
  scales: null | IScales
  setScales: React.Dispatch<React.SetStateAction<IScales | null>>
}

export const ScalesContext = createContext({} as IScalesContext)

export function ScalesProvider({ children }: IChildren) {
  const sharpenedScale = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
  const flattenedScale = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"]
  const [scales, setScales] = useState<null | IScales>(null)

  function generateMajorScale(note: string): string[] {
    let index = sharpenedScale.indexOf(note)
    const majorScale = [sharpenedScale[index]]

    const second = index + 2 > 11 ? sharpenedScale[index + 2 - 12] : sharpenedScale[index + 2]
    const third = index + 4 > 11 ? sharpenedScale[index + 4 - 12] : sharpenedScale[index + 4]
    const fourth = index + 5 > 11 ? sharpenedScale[index + 5 - 12] : sharpenedScale[index + 5]
    const fifth = index + 7 > 11 ? sharpenedScale[index + 7 - 12] : sharpenedScale[index + 7]
    const sixth = index + 9 > 11 ? sharpenedScale[index + 9 - 12] : sharpenedScale[index + 9]
    const seventh = index + 11 > 11 ? sharpenedScale[index + 11 - 12] : sharpenedScale[index + 11]

    majorScale.push(second, third, fourth, fifth, sixth, seventh)

    return majorScale
  }

  function generateDorianScale(scale: string[]) {
    const thirdPosition = findPosition(2, sharpenedScale, scale)
    const flattenedThird = flattenNote(thirdPosition)
    const seventhPosition = findPosition(6, sharpenedScale, scale)
    const flattenedSeventh = flattenNote(seventhPosition)

    const dorianScale = [scale[0], scale[1], flattenedThird, scale[3], scale[4], scale[5], flattenedSeventh]

    return dorianScale
  }

  function generatePhrygianScale(scale: string[]) {
    const secondPosition = findPosition(1, sharpenedScale, scale)
    const flattenedSecond = flattenNote(secondPosition)
    const thirdPosition = findPosition(2, sharpenedScale, scale)
    const flattenedThird = flattenNote(thirdPosition)
    const sixthPosition = findPosition(5, sharpenedScale, scale)
    const flattenedSixth = flattenNote(sixthPosition)
    const seventhPosition = findPosition(6, sharpenedScale, scale)
    const flattenedSeventh = flattenNote(seventhPosition)

    const phrygianScale = [scale[0], flattenedSecond, flattenedThird, scale[3], scale[4], flattenedSixth, flattenedSeventh]

    return phrygianScale
  }

  function generateLydianScale(scale: string[]) {
    const fourthPosition = findPosition(3, sharpenedScale, scale)
    const augmentedFourth = sharpenNote(fourthPosition)

    const lydianScale = [scale[0], scale[1], scale[2], augmentedFourth, scale[4], scale[5], scale[6]]

    return lydianScale
  }

  function generateLocrianScale(scale: string[]) {
    const secondPosition = findPosition(1, sharpenedScale, scale)
    const flattenedSecond = flattenNote(secondPosition)
    const thirdPosition = findPosition(2, sharpenedScale, scale)
    const flattenedThird = flattenNote(thirdPosition)
    const fifthPosition = findPosition(4, sharpenedScale, scale)
    const flattenedFifth = flattenNote(fifthPosition)
    const sixthPosition = findPosition(5, sharpenedScale, scale)
    const flattenedSixth = flattenNote(sixthPosition)
    const seventhPosition = findPosition(6, sharpenedScale, scale)
    const flattenedSeventh = flattenNote(seventhPosition)

    const locrianScale = [scale[0], flattenedSecond, flattenedThird, scale[3], flattenedFifth, flattenedSixth, flattenedSeventh]

    return locrianScale
  }

  function generateMixolydianScale(scale: string[]) {
    const seventhPosition = findPosition(6, sharpenedScale, scale)
    const flattenedSeventh = flattenNote(seventhPosition)

    const mixolydianScale = [scale[0], scale[1], scale[2], scale[3], scale[4], scale[5], flattenedSeventh]

    return mixolydianScale
  }

  function generateMinorScale(scale: string[]) {
    const thirdPosition = findPosition(2, sharpenedScale, scale)
    const flattenedThird = flattenNote(thirdPosition)
    const sixthPosition = findPosition(5, sharpenedScale, scale)
    const flattenedSixth = flattenNote(sixthPosition)
    const seventhPosition = findPosition(6, sharpenedScale, scale)
    const flattenedSeventh = flattenNote(seventhPosition)

    const minorScale = [scale[0], scale[1], flattenedThird, scale[3], scale[4], flattenedSixth, flattenedSeventh]

    return minorScale
  }

  function generatePentatonicScale(scale: string[]): string[] {
    const pentatonicScale = [scale[0], scale[1], scale[2], scale[4], scale[5]]

    return pentatonicScale
  }

  function findPosition(position: number, scaleToSearch: string[], parameterScale: string[]): number {
    return scaleToSearch.indexOf(parameterScale[position])
  }

  function flattenNote(position: number): string {
    return position == 0 ? flattenedScale[flattenedScale.length - 1] : flattenedScale[position - 1]
  }

  function sharpenNote(position: number): string {
    return position == sharpenedScale.length - 1 ? sharpenedScale[0] : sharpenedScale[position + 1]
  }

  return (
    <ScalesContext.Provider
      value={{
        sharpenedScale,
        generateMajorScale,
        generatePentatonicScale,
        scales,
        setScales,
        generateDorianScale,
        generateMinorScale,
        generateMixolydianScale,
        generateLocrianScale,
        generateLydianScale,
        generatePhrygianScale,
      }}>
      {children}
    </ScalesContext.Provider>
  )
}
