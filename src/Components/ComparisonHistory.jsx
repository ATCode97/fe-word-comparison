import React, { Component } from "react";
import { Table } from "react-bootstrap";
import * as api from "../spec/api";

//1. get table from css bootstrap, needs css for placement (done-ish)
//2. get request to get all of the comparison data from db(done)
//3. set state with the data from the api (done)
//4. add those data into the comparison table (done)
//5. sort by time as well <---- ??????
//6 sort out that time stamp data somehow <------ ????????????

class ComparisonHistory extends Component {
  state = {
    comparisons: [],
  };

  componentDidMount() {
    this.fetchComparisons();
  }

  fetchComparisons = () => {
    api.getComparisons().then((comparisons) => {
      console.log(comparisons);
      this.setState({ comparisons });
    });
  };

  render() {
    const { comparisons } = this.state;

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
            {comparisons.map(
              ({
                wordComparison_id,
                primary_words,
                secondary_words,
                compared_at,
              }) => {
                return (
                  <tr key={wordComparison_id}>
                    <td>{wordComparison_id}</td>
                    <td>{primary_words}</td>
                    <td>{secondary_words}</td>
                    <td>{compared_at}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ComparisonHistory;
