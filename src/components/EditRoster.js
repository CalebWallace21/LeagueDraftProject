import React, {Component} from 'react';
import '../App.css';
class EditRoster extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            nameInput: ''
        }
    }
    handleInput = (val) => {
        this.setState({nameInput: val})
    }
    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }
    handleEdit = (id) => {
        this.props.nameFn(id, this.state.nameInput);
        this.handleToggle();
    }

    render(){
        return(
            <div>
            {this.state.isEditing ? (
                <div>
                    <input
                        value={this.state.nameInput}
                        onChange={e => this.handleInput(e.target.value)} />
                    <button className='submit-button' onClick={() => this.handleEdit(this.props.champion.id)}>Submit</button>
                </div>
            )
            : (
            <div>
                <p>{this.props.champion.name}</p>
                <button className='edit-button' onClick={this.handleToggle}>Edit Name</button>
            </div>
            )}
            <button className="delete-button" onClick={() => this.props.deleteFn(this.props.champion.id)}>Delete</button>
            </div>
        )
    }

}
export default EditRoster