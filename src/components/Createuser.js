import React from 'react'

function Createuser() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <label>Name</label>
          <input type={'text'} className="form-control"></input>
        </div>

        <div className="col-lg-6">
          <label>E-mail</label>
          <input type={'email'} className="form-control"></input>
        </div>

        <div className="col-lg-4">
          <label>Country</label>
          <select className="form-control">
            <option>India</option>
            <option>America</option>
            <option>England</option>
          </select>
        </div>

        <div className="col-lg-4">
          <label>State</label>
          <select className="form-control">
            <option>Tamilnadu</option>
            <option>Kerala</option>
            <option>Karnataka</option>
          </select>
        </div>

        <div className="col-lg-4">
          <label>City</label>
          <select className="form-control">
            <option>Chennai</option>
            <option>Madurai</option>
            <option>Coimbatore</option>
          </select>
        </div>

        <div className="col-lg-3 mt-4">
          <input
            type={'submit'}
            value="Create"
            className="btn btn-primary"
          ></input>
        </div>
      </div>
    </div>
  )
}

export default Createuser
