import React, { Component } from "react";
import { convertTime } from "../spec/utils";
import { Table, DropdownButton, Dropdown } from "react-bootstrap";
import * as api from "../spec/api";

//1. get table from css bootstrap, needs css for placement (done-ish)
//2. make a get api function
//3. get request to get all of the comparison data from db(done)
//4. set state with the data from the api (done)
//5. add those data from state into the comparison table (done)
//6. add sort by most recent and oldest comparisons functionality by adding params to api calls. (done)
//7. make a util function that will convert the time string from api to normal

class ComparisonHistory extends Component {
  state = {
    comparisons: [],
  };

  componentDidMount() {
    this.fetchComparisons();
  }

  fetchComparisons = (order) => {
    api.getComparisons(order).then((comparisons) => {
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

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Primary Words</th>
              <th>Secondary Words</th>
              <th>
                Compared At
                <DropdownButton id="dropdown-item-button" title="order">
                  <Dropdown.Item
                    as="button"
                    onClick={() => this.fetchComparisons()}
                  >
                    Most Recent
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    onClick={() => this.fetchComparisons("asc")}
                  >
                    Oldest
                  </Dropdown.Item>
                </DropdownButton>
              </th>
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
                    <td>{convertTime(compared_at)}</td>
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
