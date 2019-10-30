import { selectors } from './Store'
import initialStore from './static/Data'

describe('getById ', () => {
    it('returns root entry if no id is given', () => {
        expect(selectors.getById({epas: initialStore}).label).toBe('root')
    })
})