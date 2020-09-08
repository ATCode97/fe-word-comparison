import React from "react";
import { Table } from "react-bootstrap";
import * as api from "../spec/api";

//1. get table from css bootstrap, needs css for placement
//2. get request to get all of the comparison data from db, function made
//3. add those data into the comparison table
//4. sort by time as well
//5 sort out that time stamp data somehow.

const ComparisonHistory = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Primary Words</th>
            <th>Secondary Words</th>
            <th>Compared At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ComparisonHistory;
