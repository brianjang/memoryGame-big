import { ALL_CARD_NAMES, ICard } from '@/IType'

function id(length: number) {
  const result = []
  const characters = 'abcdefghijklmnopqrstuvwxyz_=+'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
  }
  return result.join('')
}

export function getHighestRecord(): number {
  const savedTopScore = localStorage.getItem('highestRecord')
  if (savedTopScore) {
    return +savedTopScore
  }
  return 9999
}

export function saveHighestRecord(score: number): void {
  const savedTopScore = localStorage.getItem('highestRecord')
  if (!savedTopScore) {
    return localStorage.setItem('highestRecord', `${score}`)
  }
  if (+savedTopScore > score) {
    return localStorage.setItem('highestRecord', `${score}`)
  }
}

export function shuffleAllCards(): ICard[] {

  let newCards: ICard[] = [...ALL_CARD_NAMES, ...ALL_CARD_NAMES].map(name => ({
    id: id(8),
    flipped: false,
    name
  }))

  // console.log('log before newCards: ', newCards)

  const index = [0, 2, 4, 8, 16]
  for (let i = newCards.length; i; i -= 1) {
    // const j = Math.floor(Math.random() * i)

    const j = index[3]
    // console.log('log newCards.length: ', newCards.length)
    const x = newCards[i - 1]
    newCards[i - 1] = newCards[j]
    newCards[j] = x
  }

  // console.log('log newCards: ', newCards)
  return newCards
}

export function shuffleAllCards_show(index: number, flip: boolean): ICard[] {

  let newCards: ICard[] = [...ALL_CARD_NAMES, ...ALL_CARD_NAMES].map(name => ({
    id: id(8),
    flipped: flip,
    name
  }))

  // console.log('log before newCards: ', newCards)

  // const choose = [0, 2, 4, 8, 16, 6, 3]
  const chooseA = [
    0, 5, 17, 27, 7, 19, 20, 11,
    7, 3, 0, 8, 14, 16, 7, 13,
    10, 2, 11, 3, 8, 6, 7, 0,
    2, 0, 1, 0, 7, 3, 0, 8]

  const chooseB = [
    2, 0, 1, 0, 7, 3, 0, 8,
    7, 3, 0, 8, 14, 16, 7, 13,
    0, 5, 17, 27, 7, 19, 20, 11,
    10, 2, 11, 3, 8, 6, 7, 0
    ]
  console.log('log newCards.length: ', newCards.length)
  for (let i = newCards.length; i; i -= 1) {
    // const j = Math.floor(Math.random() * i)

    if (index === 1) {
      const j = chooseA[i-1]
      const x = newCards[i - 1]
      newCards[i - 1] = newCards[j]
      newCards[j] = x
    }

    if (index === 2) {
      const j = chooseB[i-1]
      const x = newCards[i - 1]
      newCards[i - 1] = newCards[j]
      newCards[j] = x
    }


  }

  console.log('log newCards: ', newCards)
  return newCards
}


