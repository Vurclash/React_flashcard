import React from 'react';

const Questions = ({ questionList, }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Question</Table.HeaderCell>
        <Table.HeaderCell>Question</Table.HeaderCell>
        <Table.HeaderCell>Question</Table.HeaderCell>
        <Table.HeaderCell>Question</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  </Table>

  <Table.Body>
    {
      questionList.map( question => (
        <Question key={question.id} {...question} />
      ))
    }
  </Table.Body>
)

export default Questions
