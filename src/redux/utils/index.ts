import { IHandleChangeFetchCycle } from '../../types'

export const initFetchCycle: IHandleChangeFetchCycle = (fetchCycle, initType) => {
  delete fetchCycle.response[initType]
  return {
    ...fetchCycle,
    type: fetchCycle.type.filter((type) => type !== initType),
  }
}

export const processFetchCycle: IHandleChangeFetchCycle = (fetchCycle, processType, data) => ({
  ...fetchCycle,
  type: [...fetchCycle.type, processType],
  response: {
    ...fetchCycle.response,
    [processType]: data,
  },
})