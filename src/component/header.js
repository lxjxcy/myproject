import React, {Component} from 'react'

export default class Header extends Component {
	constructor(){
		super()
		console.log("构造器")
	};
	componentWillMount(){
		console.log("即将进入dom")
	};
	componentDidMount(){
		console.log("已经进入dom")
	};
	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps")
		
	};
	componentWillUnmount() {
		console.log('即将卸载')
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log("是否允许更新",this.props,nextProps)
		if(this.props.ttp!=nextProps.ttp){
			return false;
		}
		return true;
	}
	componentWillUpdate(nextProps, nextState) {
		console.log("即将更新")
	};
	componentDidUpdate(prevProps, prevState) {
		console.log("已经更新")
	}

	render() {
		console.log("render")
		return (
			<div>
				<input type="text" ref="ipt"/>
				<button onClick={()=>{this.props.tt(this.refs.ipt.value)}}>toddo</button>

			</div>
		)
	}
}