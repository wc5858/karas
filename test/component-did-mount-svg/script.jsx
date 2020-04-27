let input = document.querySelector('#base64');
let n = 0;

class Component extends karas.Component {
  constructor(...data) {
    super(...data);
    this.state = {
      text: 123,
    };
  }
  componentDidMount() {
    input.value = n++;
    this.setState({
      text: 456,
    });
  }
  render() {
    return <div>{this.state.text}</div>;
  }
}

karas.render(
  <svg width="360" height="360">
    <Component/>
  </svg>,
  '#test'
);
