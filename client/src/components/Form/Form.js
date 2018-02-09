import React from 'react';

const Form = props => 
<form className="border rounded px-2 mb-1">
  <div className="form-row">
  <strong className="mt-0 p-2">Shipping/Billing Information</strong>
  {props.user ?
    <div></div>
    :
    <div className="form-group col-sm-6">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
    </div>
  }
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-sm-6">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-sm-4">
      <label htmlFor="inputState">State</label>
      <input type="text" className="form-control" id="inputState"/>
    </div>
    <div className="form-group col-sm-2">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="row">
    <div className="form-group col-sm-6">
    <label htmlFor="inputCreditCard">Credit Card Information</label>
    <input type="text" className="form-control" id="inputCreditCard" placeholder="XXXX-XXXX-XXXX-XXXX"/>
    </div>
  </div>
</form>



export default Form;