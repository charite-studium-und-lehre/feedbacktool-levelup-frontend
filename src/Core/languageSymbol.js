import React, {Component} from 'react'

class LanguageSymbol extends Component {
    state = { languasge : true}
render() {
    return (
            <div className="mt-2 mr-2"
            style={{ fontSize: '1.2em' , cursor: 'pointer' }}
             onClick={()=> { this.setState({languasge: !this.state.languasge})}}
            >
            {this.state.languasge? 'EN' : 'DE'}
            </div>
    )
}
   
}
export default LanguageSymbol