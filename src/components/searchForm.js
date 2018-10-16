import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import { observable, action } from "mobx";
// import '../styles/IceCreamForm.css'

@inject("store")
@observer
class SearchForm extends Component {
  
    @observable searchItem = {search: ""}
    
    handleClick = (e) => {
        this.props.store.searchUser(this.searchItem.search)
        this.searchItem = {search: ""}
    }

    @action handleInputChange = (event) => {
        this.searchItem[event.target.name] = event.target.value
    }


    
    render() {
      return (
        <div className="container">
            <input type="text" onChange={this.handleInputChange} name="search" value={this.searchItem.search} ></input>
            <input  className="btn" type="button" onClick={this.handleClick}>search</input>
        </div>
      );
    }
}


export default SearchForm;