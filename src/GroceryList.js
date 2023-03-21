import { Component } from "react";
import check from './icons.jpg';

export class GroceryList extends Component {
    state = {
            userInput: "",
            groceryList: []
        }
        onChangeEvent(e) {
        this.setState({userInput: e})
        }
        addItem(input) { 
            if (input === '') {
                alert ("Please enter an item")
            } else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ''})
        }}
        deleteItem() {
            let listArray = this.state.groceryList;
            listArray = [];
            this.setState({groceryList: listArray})
        }
        crossedWord(event){
            const li = event.target;
            li.classList.toggle ("crossed");
        }
        onFormSubmit (e) {
            e.preventDefault();
        }
    render() {
        return(
            <div className="container">
            <form onSubmit={this.onFormSubmit}>  
            <div className="place">
                    <input className="placetext" type="text" 
                    placeholder="What are we going to buy today?.."
                    onChange={(e) => (this.onChangeEvent(e.target.value))}
                    value={this.state.userInput}/>
            </div>
            <div className="place">
                    <button onClick={() => this.addItem (this.state.userInput)} className="btn-add">ADD</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={check} alt="icons"/>
                        {item}
                    </li>
                ))}
            </ul>
            <div className="place">
            <button onClick={()=> this.deleteItem()} className="btn-delete">DELETE</button>
            </div>
            </form>  
            </div>
            
        )
    }
}

