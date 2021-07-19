import React from 'react';
import JsxParser from 'react-jsx-parser';

class InjectableComponent extends React.Component {
  static defaultProps = {
    eventHandler: () => {}
  }

  render() {
    return <div />
  }
}

const SimpleComponent = () => (
  <JsxParser
    bindings={{
      foo: 'bar',
      myEventHandler: () => { alert('my binded handler') },
    }}
    components={{ InjectableComponent }}
    jsx={`
      <h1>Simple Component w/ JSX Parser</h1>
      <InjectableComponent eventHandler={myEventHandler} truthyProp />
    `}
  />
)

export default SimpleComponent