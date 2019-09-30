import React, { useState } from 'react'
import { mobileWidth } from '../Charting/Utils'

const makeExtendable = (WrappedComponent, def = false) => 
    props => {
        const [ extended, setExtended ] = useState( props.extended || (def && (!def || window.innerWidth > mobileWidth)) )
    
        return <WrappedComponent toggleExtended={() => setExtended(!extended)} {...props} extended={extended} />
    }

export default makeExtendable