import React from 'react';
import { Table, } from "semantic-ui-react";

const Questions = ({ questionList, }) => (
  <Table celled padded>
    <Table.Header>
        <Table.HeaderCell>Click the question to see the answer!</Table.HeaderCell>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        {questionList.map( title =>( title ))}
      </Table.Row>
    </Table.Body>
  </Table> 
)

export default Questions
