import BaseStore from '../Core/BaseStore'
import { identifier } from './Store'

export default newIdentifier => BaseStore(newIdentifier, state => state[identifier][newIdentifier])