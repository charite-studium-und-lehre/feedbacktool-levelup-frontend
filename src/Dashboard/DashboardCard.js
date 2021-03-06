import React from 'react'

export default function DashboardCard(props) {
    return (
        <div className={`${props.color} card with-border overflow-hidden mt-2`}>
          <div className='h-100 w-100' id={props.id} style={{position:'absolute', zIndex:'9'}}></div>
          <div className="card-body d-flex p-0">
            <div className={`${props.noPadding || 'p-3'} w-100`}>
                <h5>{props.title}</h5>
                <div>
                  {props.children}
                </div>
            </div>
          </div>
        </div>
    );
}