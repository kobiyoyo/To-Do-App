import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption:undefined
};
handleClearSelectedOptions = () => {
      this.setState(()=>({
        selectedOption:undefined
      }))


    }
    handleAddOpions = (option) => {
        if (!option) {
          return "Enter a Valid value";
        } else if (this.state.options.indexOf(option) > -1) {
          return "Value already exist";
        }
    
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
    };
    
      handlePick = () => {
        const rand = Math.floor(Math.random() * this.state.options.length);
        const options = this.state.options[rand];
        this.setState(()=>({
          selectedOption:options
        }));


      };

      handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
      };

      handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
    
        }));
      };
    
    
    
 
    componentWillMount() {
      try {
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
        if (options) {
          this.setState(() => ({ options: options }))
        }
  
      } catch (e) {
  
      }
  
    };
    componentDidUpdate(preProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
  
  
    };

    render() {
      return (
        <div>
          <Header title="Indecision App" subtitle="Software Development the new oil" />
          <div className='container'>
          <Action
          title="What Should I do"
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <div className='widget'>
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOpions={this.handleAddOpions}
          />
         

        </div>
        </div>

        <OptionModal
         selectedOption={this.state.selectedOption}
         handleClearSelectedOptions = {this.handleClearSelectedOptions}
        />
        </div>
      );
    }
  }
  

  
  