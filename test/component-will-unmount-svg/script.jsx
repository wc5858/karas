let input = document.querySelector('#base64');
let n = 0;

class CP1 extends karas.Component {
  constructor(...data) {
    super(...data);
    this.state = {};
  }

  click(e) {
    this.setState({
      flag: true,
    });
  }

  render() {
    if(this.state.flag) {
      return <div>
        <CP3/>
      </div>;
    }
    return <div onClick={e => this.click(e)}>
      <CP2/>
    </div>;
  }
}
class CP2 extends karas.Component {
  componentDidMount() {
    input.value = n++ + ':' + document.querySelector('svg').outerHTML;
  }

  componentWillUnmount() {
    input.value = n++ + ':' + document.querySelector('svg').outerHTML;
  }

  render() {
    return 222;
  }
}
class CP3 extends karas.Component {
  render() {
    return 333;
  }
}

karas.render(
  <svg width="360" height="360">
    <CP1/>
  </svg>,
  '#test'
);
