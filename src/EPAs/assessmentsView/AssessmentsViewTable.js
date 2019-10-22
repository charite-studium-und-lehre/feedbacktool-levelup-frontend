import React, { useState }  from 'react'


export default () =>
    <table className="table table-condensed" id="accordionExample" >
    <thead>
    <tr>
        <th>#</th>
        <th>Date</th>
        <th>Description</th>
        <th>Credit</th>
        <th>Debit</th>
        <th>Balance</th>
    </tr>
    </thead>
    <tbody>
    <a href="body1" data-toggle="collapse">
    <tr data-toggle="collapse" data-target="#demo1" className="card">
        <div className="card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <td>1</td>
        <td>05 May 2013</td>
        <td>Credit Account</td>
        <td className="text-success">$150.00</td>
        <td className="text-error"></td>
        <td className="text-success">$150.00</td>
        </div>
        <td className="card-body">
            <div className="collapse" id="body1"> Demo1</div>
        </td>
    </tr>
    </a>
    <tr data-toggle="collapse" data-target="#demo2" className="accordion-toggle">
        <td>2</td>
        <td>05 May 2013</td>
        <td>Credit Account</td>
        <td className="text-success">$11.00</td>
        <td className="text-error"></td>
        <td className="text-success">$161.00</td>
    </tr>
    <tr>
        <td colSpan="6" style={{padding: "0 !important"}}>
            <div id="demo2" className="accordian-body collapse">Demo2</div>
        </td>
    </tr>
    <tr data-toggle="collapse" data-target="#demo3" className="accordion-toggle">
        <td>3</td>
        <td>05 May 2013</td>
        <td>Credit Account</td>
        <td className="text-success">$500.00</td>
        <td className="text-error"></td>
        <td className="text-success">$661.00</td>
    </tr>
    <tr>
        <td colSpan="6" style={{padding: "0 !important"}}>
            <div id="demo3" className="accordian-body collapse">Demo3</div>
        </td>
    </tr>
    </tbody>
</table>
