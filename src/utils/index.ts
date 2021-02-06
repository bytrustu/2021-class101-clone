export const sleep = (sec: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}

export const shuffleArray = (array: any[]): any[] => array.sort(() => Math.random() - 0.5)

export const randomPickElement = (array: any[]) => shuffleArray(array)[0]

export const changeToPrice = (price?: number): string => {
  if (!price) return '0'
  return `${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const calcMontlyPrice = (price: number, monthly?: number): string => {
  if (!price || !monthly) return '0'
  const monthlyPrice = Math.floor(price / monthly)
  return changeToPrice(monthlyPrice)
}

export const range = (length: number, init = 0): number[] => Array.from({ length }).map((_, index) => index + init)

export const pushLocalStorageByArray = (key: string, value?: any): void => {
  if (!value) {
    localStorage.setItem(key, JSON.stringify([]))
    return
  }
  const storageArray = JSON.parse(localStorage.getItem(key) as string)
  storageArray.push(value)
  localStorage.setItem(key, JSON.stringify([...new Set(storageArray)]))
}

export const filterLocalStorageByArray = (key: string, value: any): void => {
  const storageArray = JSON.parse(localStorage.getItem(key) as string)
  const filterCartList = storageArray.filter((cartProduct: string) => cartProduct !== value)
  localStorage.setItem(key, JSON.stringify(filterCartList))
}

export const generateObject = (arr: string[], init: number): { [k: string]: number } => {
  return arr.reduce((acc, curr) => {
    acc = {
      ...acc,
      [curr]: init || 0,
    }
    return acc
  }, {})
}
