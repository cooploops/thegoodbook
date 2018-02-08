import React from 'react';

const Form = props => 
<form className="border rounded px-2 mb-1">
  <div className="form-row">
  <strong className="mt-0 p-2">Shipping/Billing Information</strong>
  {props.user ?
    <div></div>
    :
    <div className="form-group col-sm-6">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
    </div>
  }
  </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-sm-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-sm-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-sm-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="row">
    <div className="form-group col-sm-6">
    <label for="inputCreditCard">Credit Card Information</label>
    <input type="text" className="form-control" id="inputCreditCard"/>
    </div>
  </div>
</form>



export default Form;