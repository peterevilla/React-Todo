import React from 'react';



class TodoForm extends React.Component {

        constructor() {
            super();
            this.state = {

                item: ''
            }
        }


eventhandler = e => {


    this.setState({item: e.target.value})
    console.log(this.state.item)
}




render() {

    return(

        <form>
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