import React from 'react'



const willcommen =()=> (
    <div className='mx-auto mt-5 with-shadow p-3' style={{ width:'30rem', height:'30rem'}}>
       <h4 className='text-center'>Willcommen......</h4>
       <p>Text......</p>
       <div className='row'>
        <div className='col-6 font-weight-bold'>
            <div className='py-2'>Name:</div>
            <div className='py-2'>Email:</div>
            <div className='py-2 mt-2'>Immatrikuliertnummer:</div>
        </div>
        <div className='col-6'>
            <div className='py-2'>LevenUp</div>
            <div className='py-2'>LevenUp@charite.de</div>
            <div className='py-2' >
                <input className="form-control mt-2" placeholder="Immatrikuliertnummer"></input>
            </div>
        </div>
       </div>
       <div className='mt-4'>
         <input type="checkbox" />
         <span className='ml-3'>Ich stimme...............</span>
      </div>
    <button className='btn btn-secondary mt-4'>zustimmen</button>
    </div>
)
export default willcommen