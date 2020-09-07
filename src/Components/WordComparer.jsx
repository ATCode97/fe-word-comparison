import React from "react";
import { Button } from "react-bootstrap";

function Comparison() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="row">
            <div className="col-lg-10 ">
              <form className="form-inline mb-4">
                <input
                  className="form-control form-control-lg mx-3"
                  type="number"
                />
              </form>

              <form className="form-inline mb-4">
                <input
                  className="form-control form-control-lg mx-3"
                  type="number"
                />
              </form>
            </div>

            <div className="col-lg-2 align-self-center">
              <Button className="compare">compare</Button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Comparison;
