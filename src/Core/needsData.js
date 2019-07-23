import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const needsData = (WrappedComponent, loadedSelector, loadAction) => connect(state => ({ loaded: loadedSelector(state) }), { load: loadAction })(
    ({ load, loaded, ...props }) => {
        useEffect(load, [load])

        return loaded ? <WrappedComponent {...props} /> : <div><i>loading...</i></div>
    }
)

export default needsData