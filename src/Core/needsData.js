import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

export const Spinner = ({ className }) => 
<div className={`${className} text-center`} 
    style={{fontSize: '1.5rem', color: 'hsla(0, 0%, 0%, .6)'}}>
    <FontAwesomeIcon className="fa-spin" icon={faCircleNotch} />
</div>

const stateToProps = loadedSelector => (state, ownProps) => ({ loaded: loadedSelector(state, ownProps) })
const needsData = (loadedSelector, loadAction, spinner = true) => WrappedComponent => connect(stateToProps(loadedSelector) , { load: loadAction })(
    ({ load, loaded, ...props }) => {
        useEffect(() => { !loaded && load(props) }, [loaded, load, props])

        return loaded ? <WrappedComponent {...props} /> : (spinner && <Spinner className="m-4" />)
    }
)

export default needsData