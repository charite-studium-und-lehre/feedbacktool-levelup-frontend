import React, { useState } from 'react'

const makeExtendable = (initial = () => false) => WrappedComponent => 
    props => {
        const [ extended, setExtended ] = useState( props.extended || initial(props) )
    
        return <WrappedComponent toggleExtended={() => setExtended(!extended)} {...props} extended={extended} />
    }

export default makeExtendable