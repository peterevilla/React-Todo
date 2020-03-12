import React from 'react';



class TodoForm extends React.Component {

        constructor(props) {
            super(props);
            this.state = {

                item: ''
            }
        }


eventhandler = e => {


    this.setState({item: e.target.value})
    console.log(this.state.item)
}

handleaddTask = e => {

    e.preventDefault();
    this.props.addTask(this.state.item)
    this.setState({item:""})

}


render() {

    return(

        <form onSubmit={this.handleaddTask}>
            <label>
                <input type='text' name='item' placeholder='insert task' value={this.state.item} onChange={this.eventhandler} ></input>
            </label>
            <label>
                <button>add</button>
            </label>
            <label>
                <button>delete</button>
            </label>
        </form>
    )
}

}




export default TodoForm;