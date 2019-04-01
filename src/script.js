class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); // use .createRef() to create a ref object

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const value = this.inputRef.current.value;
    console.log(`form submitted: ${value}`);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.inputRef} defaultValue="John" />
        </label>
        <input type="checkbox" ref={this.checkboxRef} defaultChecked={true} />
      </form>
    );
  }
}


ReactDOM.render(
  <UncontrolledForm />,
  document.getElementById('root')
)
