import { IResponseProductData, TCreateAction } from '../../types'

const createAction = (type: string, payload?: any) => ({ type, payload })

export const TEST_REQUEST = 'TEST_REQUEST'
export const TEST_SUCCESS = 'TEST_SUCCESS'
export const TEST_FAILURE = 'TEST_FAILURE'

export const testReqeustAction: TCreateAction<any, any> = (page: number) => createAction(TEST_REQUEST, page)
export const testSuccessAction: TCreateAction<string, IResponseProductData> = (payload) =>
  createAction(TEST_SUCCESS, payload)
export const testErrorAction: TCreateAction<string, string> = (payload) => createAction(TEST_FAILURE, payload)

export type TProductAction =
  | ReturnType<typeof testReqeustAction>
  | ReturnType<typeof testSuccessAction>
  | ReturnType<typeof testErrorAction>
