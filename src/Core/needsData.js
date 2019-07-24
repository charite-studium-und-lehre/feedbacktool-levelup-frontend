import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Spinner = () => <div className="text-center m-4" style={{fontSize: '1.5rem', color: 'hsla(0, 0%, 0%, .6)'}}>
    <FontAwesomeIcon className="fa-spin" icon={faCircleNotch} />
</div>

const needsData = (WrappedComponent, loadedSelector, loadAction) => connect(state => ({ loaded: loadedSelector(state) }), { load: loadAction })(
    ({ load, loaded, ...props }) => {
        useEffect(() => { load() }, [load])

        return loaded ? <WrappedComponent {...props} /> : <Spinner />
    }
)

export default needsData