import React from 'react'
import { Button } from 'antd-mobile'

class NoMatch extends React.Component {
  render() {
    return (
      <div style={{ color: 'red', fontSize: '20px' }}>
        没有找到你想要的页面
        <Button
          type="primary"
          style={{ width: '100px', height: '40px', lineHeight: '40px' }}
          onClick={this.back}
        >
          返回首页
        </Button>
      </div>
    )
  }
  back = () => {
    this.props.history.push('/home')
  }
}
export default NoMatch
