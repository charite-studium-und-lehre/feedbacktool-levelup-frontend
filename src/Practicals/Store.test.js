import { selectors } from './Store'
import initialStore from './Data'

describe('getItemById ', () => {
    it('returns root entry if no id is given', () => {
        expect(selectors.getItemById({practicals: initialStore}).label).toBe('root')
    })
})