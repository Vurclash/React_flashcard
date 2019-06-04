import React from 'react';
import { Container, Header, Segment, Icon, Button, Table } from "semantic-ui-react";


class App extends React.Component{
  state = {
    questions: [ 
      {id: 1, content: "What is the answer?",},
      {id: 2, content: "What is the second answer?", },
    ], 
    answers: [
      {id: 1, reply: "This is the answer."},
      {id: 2, reply: "This is the second answer."}
  ],
  }

  render (){
    return(
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1" color="red" >React Flashcard</Header>
        <br />
        <Segment>
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
        </Segment>
      </Container>
    )
  }
}



export default App;
