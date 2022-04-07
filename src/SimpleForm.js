import React from 'react'
import { Button,Container,Row,Col } from 'react-bootstrap';
export class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  doChange (e) {
    const newValue = e.target.value
    this.setState({value: newValue})
  }

  doSubmit (e) {
    window.alert('value submit' + this.state.value)
    e.preventDefault()
  }

  render () {
    const doSubmit = (e) => this.doSubmit(e)
    const doChange = (e) => this.doChange(e)
    return(
      <form onSubmit={doSubmit}>
        <input type='text' value={this.state.value} onChange={doChange} />
        <input type='submit' value='送信' />
        <Button>test</Button>
        <Container>
        <Row>
        <Col xs={3} md={4}>test1</Col>
        <Col xs={6} md={4}>test2</Col>
        <Col xs={3} md={4}>test3</Col>
        </Row>
      </Container>
      </form>

    )

  }


}