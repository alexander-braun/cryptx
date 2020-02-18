import React from 'react'

class BlockElementOutput extends React.Component {

  componentDidUpdate(prevProps) {
    if (prevProps.outputValue !== this.props.outputValue) {
      this.autoresize()
    }
  }

  autoresize = () => {
    let el = document.getElementById('output')
    el.style.height = 'inherit'
    let computed = window.getComputedStyle(el)
    let height = parseInt(computed.getPropertyValue('border-top-width'), 10)
    + parseInt(computed.getPropertyValue('padding-top'), 10)
    + el.scrollHeight
    + parseInt(computed.getPropertyValue('padding-bottom'), 10)
    + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
    el.style.height = height + 'px'
  }

  render() {
      return (
        <div className="block">
          <div className="block_top_decoration"></div>
          <div className="block_head">
              <div className="block_head_text">Output</div>
          </div>
          <div className="block_body">
                <div className="block_body_output">
                  <textarea
                    name="output" 
                    id="output" 
                    value={this.props.outputValue}
                    onChange={(evt) => {
                      this.value = this.props.outputValue
                      this.autoresize(evt)
                    }}
                  >
                  </textarea>
              </div>
          </div>
        </div>
    )
  }
}

export default BlockElementOutput

