import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            item: ''
        }
    }


    eventhandler = e => {


        this.setState({ item: e.target.value })
        console.log(this.state.item)
    }

    handleaddTask = e => {

        e.preventDefault();
        this.props.addTask(this.state.item)
        this.setState({ item: "" })

    }


    render() {

        return (
            <div>
                <Form onSubmit={this.handleaddTask}>
                    <Label>
                        <Input type='text' name='item' placeholder='insert task' value={this.state.item} onChange={this.eventhandler} ></Input>
                    </Label>
                    <Label>
                        <Button className="btn" color="success">add</Button>
                    </Label>
                    <Label>
                    <Button className="btn" color="danger" onClick={this.props.deleteTask}>delete</Button>
                </Label>
                </Form>
                
            </div>
        )
    }

}




export default TodoForm;