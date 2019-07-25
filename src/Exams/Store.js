import BaseStore from '../Core/BaseStore'

export default identifier => BaseStore(identifier, state => state.exams[identifier])