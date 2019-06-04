import React from 'react';
import Questions from './Questions'
import { Container, Header, Segment, Icon, Button, Table } from "semantic-ui-react";


class App extends React.Component{
  state = {
    questions: [ 
      {id: 1, title: "What is the answer?",},
      {id: 2, title: "What is the second answer?", },
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
        </Segment>
        <Questions />
      </Container>
    )
  }
}



export default App;
