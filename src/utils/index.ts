export const sleep = (sec: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}

export const shuffleArray = (array: any[]): any[] => array.sort(() => Math.random() - 0.5)

export const randomPickElement = (array: any[]) => shuffleArray(array)[0]
