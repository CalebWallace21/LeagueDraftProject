import React, {Component} from 'react';
import axios from 'axios';
import Lockin from './Lockin'
import '../App.css';
class Champions extends Component {
    constructor(props){
        super(props);
        this.state = {
           championChoice: [] 
        }
    }
    componentDidMount(){
        this.getChampionChoice();        
    }
    getChampionChoice = () =>{
        axios.get('/api/random-champ')
        .then(res => {
            console.log(res.data)
            this.setState({championChoice: res.data})
        })
        .catch(error => console.log(error))
    }

    render(){
        const mapChampions = this.state.championChoice.map((champion, i) => (
            <Lockin
            key={i}
            champion={champion}
            lockinFn={this.props.lockinFn}
            refreshFn={this.getChampionChoice} />
        ))
        return(
            <div className='champion-roster'>
                {this.props.champions.length < 5 ? mapChampions : <h1>Roster is full</h1>} 
            </div>
        )

    }
}
export default Champions