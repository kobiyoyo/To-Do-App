import React from 'react';
import Option from './Option';
const Options = (props) => (
      <div>
      <div className='widget-header'>
      <h3 className='widget-header__title'>Your Options</h3>
      <button 
        className='button button--link'
        onClick={props.handleDeleteOptions} 
        > Remove All </button>
      </div>
        
        <div>  {props.options.length === 0 && <p  className='widget__message'>Please add an Option to get started</p>}
          {
            props.options.map((e,index) => (<Option
              key={e}
              optionText={e}
              count={index + 1}
              handleDeleteOption={props.handleDeleteOption} />)
            )
          }
        </div>
      </div> 
    );
  
  
export default Options;