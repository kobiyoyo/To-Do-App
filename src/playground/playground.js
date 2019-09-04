class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }

  componentWillMount() {
    try {
      const json = localStorage.getItem("count");
      const count = parseInt(json);
      if (!isNaN(count)) {
        this.setState(() => ({ count: count }))
      }
    } catch (e) {

    }
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count);
      localStorage.setItem("count", json);
    }
  }



  handleAddOne() {
    this.setState((prevstate) => {
      return {
        count: prevstate.count + 1
      }
    });
  }
  handleMinusOne() {
    this.setState((evstate) => {
      return {
        count: evstate.count - 1
      }
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }

    })
  }
  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <br />
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter />, document.getElementById('app'));
