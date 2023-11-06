import { traverseTCPStates } from './main'
import { TEvent, TState } from './types'

const test1: TEvent[] = ['APP_ACTIVE_OPEN', 'RCV_SYN_ACK', 'RCV_FIN']
const test2: TEvent[] = ['APP_PASSIVE_OPEN', 'RCV_SYN', 'RCV_ACK']
const test3: TEvent[] = [
  'APP_ACTIVE_OPEN',
  'RCV_SYN_ACK',
  'RCV_FIN',
  'APP_CLOSE',
]
const test4: TEvent[] = ['APP_ACTIVE_OPEN']
const test5: TEvent[] = [
  'APP_PASSIVE_OPEN',
  'RCV_SYN',
  'RCV_ACK',
  'APP_CLOSE',
  'APP_SEND',
]

const response1: ReturnType<typeof traverseTCPStates> = 'CLOSE_WAIT'
const response2: ReturnType<typeof traverseTCPStates> = 'ESTABLISHED'
const response3: ReturnType<typeof traverseTCPStates> = 'LAST_ACK'
const response4: ReturnType<typeof traverseTCPStates> = 'SYN_SENT'
const response5: ReturnType<typeof traverseTCPStates> = 'ERROR'

type TTestCase = 'test1' | 'test2' | 'test3' | 'test4' | 'test5'

export function test(testCase: TTestCase) {
  switch (testCase) {
    case 'test1':
      return isTestPassed(traverseTCPStates(test1) === response1)
    case 'test2':
      return isTestPassed(traverseTCPStates(test2) === response2)
    case 'test3':
      return isTestPassed(traverseTCPStates(test3) === response3)
    case 'test4':
      return isTestPassed(traverseTCPStates(test4) === response4)
    case 'test5':
      return isTestPassed(traverseTCPStates(test5) === response5)
  }
}

function isTestPassed(result: boolean) {
  return result ? 'TEST PASSED' : 'TEST FAILED'
}
