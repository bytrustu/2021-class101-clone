export const sleep = (sec: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}

export const shuffleArray = (array: any[]): any[] => array.sort(() => Math.random() - 0.5)

export const randomPickElement = (array: any[]) => shuffleArray(array)[0]

export const changeToPrice = (price?: number): string => {
  if (!price) return '0'
  return `${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const calcMontlyPrice = (price?: number, monthly?: number): string => {
  if (!price || !monthly) return '0'
  const monthlyPrice = Math.floor(price / monthly)
  return changeToPrice(monthlyPrice)
}
