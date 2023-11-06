export type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>

// States
export type TState =
  | 'CLOSED'
  | 'LISTEN'
  | 'SYN_RCVD'
  | 'SYN_SENT'
  | 'ESTABLISHED'
  | 'FIN_WAIT_1'
  | 'CLOSING'
  | 'FIN_WAIT_2'
  | 'TIME_WAIT'
  | 'CLOSE_WAIT'
  | 'LAST_ACK'

export type TEvent =
  | 'APP_PASSIVE_OPEN'
  | 'APP_ACTIVE_OPEN'
  | 'APP_SEND'
  | 'APP_CLOSE'
  | 'RCV_ACK'
  | 'RCV_SYN'
  | 'RCV_SYN_ACK'
  | 'RCV_FIN'
  | 'RCV_FIN_ACK'
  | 'APP_TIMEOUT'
