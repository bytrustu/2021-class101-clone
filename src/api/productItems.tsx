import { IBannerData, IProductItem, IResponseProductData } from '../types'
import { randomPickElement } from '../utils'

const productItems: IProductItem[] = [
  {
    id: 'B9vUv0E0ibc0X55kVVLr',
    title: '포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스',
    coverImage: 'https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729',
    price: 560000,
    score: 200,
  },
  {
    id: '81x83ysiEHsHCBoeVh2O',
    title: '글씨가 주는 소소한 행복, Lettering Together!',
    coverImage: 'https://cdn.class101.net/images/ec0f0c15-aeec-43a3-a0c9-b649b0999f0a',
    price: 320000,
    score: 300,
  },
  {
    id: 'ZXV8mCcvbpXKm5J5snUq',
    title: '붓펜으로 그려낸 보통날, 보통의 글씨',
    coverImage: 'https://cdn.class101.net/images/a363a069-5aaf-40cb-822e-a2cab585c37e',
    price: 240000,
    score: 350,
  },
  {
    id: 'tpP45lSwqf1X1yEEFqL4',
    title: '수놓는 발바닥과 함께 하는 꽁냥꽁냥 고양이 자수',
    coverImage: 'https://cdn.class101.net/images/e6b7bde6-b23d-447f-9cdf-3879caf7eb13',
    price: 90000,
    score: 120,
    availableCoupon: false,
  },
  {
    id: 'nc9XiAWAN4uhNr6pDqlG',
    title: '소복소복 바늘 끝에서 피어오르는 자수',
    coverImage: 'https://cdn.class101.net/images/38f79b22-4728-4c16-bee9-966fff07df3f',
    price: 230000,
    score: 640,
  },
  {
    id: 'ndHkNPUpGPiF4nmqX0PL',
    title: '한 땀 한 땀 꽃을 수 놓다 - 보태니컬 입체 프랑스 자수',
    coverImage: 'https://cdn.class101.net/images/132a560b-ba7f-4564-b5f5-709b934f5ddd',
    price: 320000,
    score: 200,
  },
  {
    id: 'TQw8gmqYK2KrKcP1ibWb',
    title: '내가 그리고, 네가 간직할 인공의 아이패드 드로잉',
    coverImage: 'https://cdn.class101.net/images/f926a844-cfeb-4983-a39a-fb55a0b3fd0b',
    price: 320000,
    score: 190,
    availableCoupon: false,
  },
  {
    id: 'pHr0phFtcWhsgZhSVe9F',
    title: '글씨 쓰는 김이영과 함께 아이패드에 그려낸 캘리그라피',
    coverImage: 'https://cdn.class101.net/images/864f377f-93d9-4520-94de-19ca142c432f',
    price: 123000,
    score: 453,
  },
  {
    id: '4tVyp15jKUO6sfUvLnBc',
    title: '또 다른 나를 그리다, 동글의 아이패드 캐릭터 드로잉',
    coverImage: 'https://cdn.class101.net/images/0a6a86b9-f1ed-4b90-9d53-cbbb0413989d',
    price: 345000,
    score: 300,
    availableCoupon: false,
  },
  {
    id: 'CNCwXwHP7FUip83z5VEH',
    title: '평범한 일상에 색을 더하는 시간, 자토의 아이패드 드로잉',
    coverImage: 'https://cdn.class101.net/images/9e7be50d-72f1-4c93-80d6-c6b95b42bd40',
    price: 50000,
    score: 300,
  },
  {
    id: 'vgrdHO9bLqNxDYt4Q7vZ',
    title: '리노와 아이패드로 시작하는 디지털캘리그라피',
    coverImage: 'https://cdn.class101.net/images/1ea53728-c3f7-4fe9-a485-88c9a130b3b4',
    price: 564000,
    score: 150,
  },
  {
    id: 'gGFsFvhrKlvZpjLRfmNY',
    title: '디지털로 만들어내는 아날로그 감성, 해란의 아이패드 드로잉',
    coverImage: 'https://cdn.class101.net/images/cbadec97-d306-4669-bbcf-eef5d1a9d261',
    price: 230000,
    score: 220,
  },
]

export const loadProductItemListAPI = async (page: number): Promise<IResponseProductData> => {
  try {
    const responseProductData: IResponseProductData = {}
    if (page < 1) page = 1
    const productSortByScoreDesc = productItems.sort((a, b) => b.score - a.score)
    const pageSplit = 5
    const maxPage = Math.ceil(productSortByScoreDesc.length / pageSplit)
    if (page > maxPage) page = maxPage
    const startIndex = page ? (page - 1) * pageSplit : 0
    if (page === 1) {
      const localCartList = localStorage.getItem('cart') as string
      if (!localCartList || JSON.parse(localCartList).length === 0) {
        localStorage.setItem('cart', JSON.stringify([]))
        responseProductData.recommendProductItem = randomPickElement(productSortByScoreDesc)
      } else {
        const onPickCartProduct = randomPickElement(JSON.parse(localCartList))
        responseProductData.recommendProductItem = productSortByScoreDesc.filter(
          (product) => product.id === onPickCartProduct,
        )[0]
      }
    }

    responseProductData.productItemList = [...productSortByScoreDesc].splice(startIndex, pageSplit)
    responseProductData.currentPage = page
    responseProductData.maxPage = maxPage

    return responseProductData
  } catch (e) {
    return { message: '상품을 불러올수 없습니다.' }
  }
}

export const loadBannerAPI = async (): Promise<IBannerData> => {
  try {
    const bannerData: IBannerData = {
      title: '일 잘하는 사람은 이유가 있습니다.',
      detail: '더 똑똑하게 일할 수 있는 온라인 강의와 1:1 코칭!',
      imageUrl: '/images/CarrerMain.png',
    }
    return bannerData
  } catch (e) {
    return { message: '상품을 불러올수 없습니다.' }
  }
}
