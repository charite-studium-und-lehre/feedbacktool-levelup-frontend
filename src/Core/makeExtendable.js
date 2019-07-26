import React, { useState } from 'react'

const makeExtendable = (WrappedComponent, def = false) => 
    props => {
        const [ extended, setExtended ] = useState( props.extended || (def && (!def || window.innerWidth > 768)) )
    
        return <WrappedComponent toggleExtended={() => setExtended(!extended)} {...props} extended={extended} />
    }

export default makeExtendable