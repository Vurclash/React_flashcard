import React from 'react';
import Question from '../Questions';
import { Container, Header, Segment, } from "semantic-ui-react";


class Flash extends React.Component{
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

  renderQuestions = () => {
    return this.state.questions.map( question => <Question key={question.id} {...question}/>)
  };

  render (){
    return(
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1" color="red" >React Flashcard</Header>
        <br />
        <Segment>
          {this.renderQuestions()}
        </Segment>
      </Container>
    )
  }
}



export default Flash;