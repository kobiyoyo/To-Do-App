class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOpions = this.handleAddOpions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    }

  }
  componentWillMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }))
      }

    } catch (e) {

    }

  }
  componentDidUpdate(preProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }


  }
  handleAddOpions(option) {
    if (!option) {
      return "Enter a Valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Value already exist";
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option]) }))


  }

  handlePick() {
    const rand = Math.floor(Math.random() * this.state.options.length);
    const options = this.state.options[rand];
    alert(options);
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)

    }));
  }



  render() {
    return (
      <div>
        <Header title="React App" subtitle="Baby mi" />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOpions={this.handleAddOpions}
        />
        <Action
          title="What Should I do"
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />

      </div>
    );
  }
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions} > Remove All </button>
      <div>  {props.options.length === 0 && <p>Please add values</p>}
        {
          props.options.map((e) => (<Option
            key={e}
            optionText={e}
            handleDeleteOption={props.handleDeleteOption} />)
          )
        }
      </div>
    </div>
  );

}



class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
    this.state = {
      error: undefined
    }
  }
  formSubmit(e) {
    e.preventDefault();
    const option = e.target.username.value.trim();
    const error = this.props.handleAddOpions(option);
    this.setState(() => ({ error: error }));
    if (!error) {
      e.target.username.value = ' ';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.formSubmit} >
          <input type="text" name="username" />
          <button > submit </button>
        </form>
      </div>
    );
  }
}

const Option = (props) => {
  return (
    <div> <p>{props.optionText}

      <button onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}>
        remove
    </button>
    </p>

    </div>
  );

}


const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );

}


const Action = (props) => {
  return (
    <div>
      <br />
      <button onClick={props.handlePick} disabled={!props.hasOptions}>{props.title}</button>
    </div>
  );

}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
