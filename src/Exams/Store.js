import BaseStore from '../Core/BaseStore'

export const identifier = 'exams'
export default newIdentifier => BaseStore(newIdentifier, state => state[identifier][newIdentifier])