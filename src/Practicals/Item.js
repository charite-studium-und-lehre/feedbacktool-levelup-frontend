import React from 'react'
import { connect } from 'react-redux'
import Score from './Score'
import { selectors } from './Store'



const stateToProps = (state, ownProps) => ({ entry: selectors.getItemById(state, ownProps.entryId) })

const Item = connect(stateToProps)(props => {
  const ItemLevel1 = (props) => (
    <div>
      <div>
        <h4 className='text-center'>{props.label}</h4>
        <Score edit={props.edit} entryId={props.entryId} average={props.average} width='1rem' height='1rem' borderRadius='50%' />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
  const ItemLevel2 = (props) => (
    <div className='with-shadow'>
        <h5 className='text-center'>{props.label}</h5>
        <div>
          {props.children}
        </div>
    </div>
  )
  const ItemLevel3 = (props) => (
    <div className='row '>
      <div className='col-6'>
      {props.label}
      </div>
      <div className='col-6'>
       {props.children}
      </div>
    </div>
  )
  return props.entry.visible ?
      <div>
        <ItemLevel1 average={!!props.entry.entries.length} label={props.entry.label}>
          {props.entry.entries.map(f => 
            <ItemLevel2 key={f} entryId={f} label={props.entry.label}>
                {props.entry.entries.map(e => 
                  <ItemLevel3 key={e} entryId={e} label={props.entry.label}>
                    <Score  edit={true} entryId={props.entryId} width='.8rem' height='.6rem' borderRadius='5%' />
                  </ItemLevel3>)}
            </ItemLevel2>)}
         </ItemLevel1>
      </div>
    :
    <div></div>
})
export default Item




// const stateToProps = (state, ownProps) => ({ entry: selectors.getItemById(state, ownProps.entryId) })

// const Item = connect(stateToProps)(props =>
//   props.entry.visible ? <div className="mt-2 ">
//     <div className={`p-2 pb-3 with-shadow ${props.level === 3 ? 'mx-2' : props.level === 2 ? 'mx-2 mb-4': ''}`} style={{ backgroundColor: 'rgb(210, 220, 152)' }}>
//       <div className="row">
//         <div className={`col-xl-${props.level <= 2 ? '12' : '6'} pr-0`}>
//           <div className={props.level <= 2 ? "font-weight-bold mb-2" : "" } style={{ fontSize: '.8rem', textAlign: `${props.level <= 2 ? 'center' : 'left'}` }}>
//             {props.entry.label}
//           </div>
//         </div>
//         <div className='col-lg-6' style={{ margin: props.level <= 2 ? '.5rem auto' : '' }}>
//           <Score edit={!props.entry.entries.length} entryId={props.entryId} average={!!props.entry.entries.length} width={props.level === 1 ? '1rem' : props.level === 2 ? '.8rem' : '.8rem'} height={props.level === 1 ? '1rem' : !!props.entry.entries.length ? '.85rem' : '.6rem'} borderRadius={!!props.entry.entries.length ? '50%' : '5%'} />
//         </div>
//         <div className='col-md-12'>
//           {props.entry.entries.map(f => <Item key={f} entryId={f} level={props.level + 1} />)}
//         </div>
//       </div>
//     </div>
//   </div> : <div></div>
// )
// export default Item