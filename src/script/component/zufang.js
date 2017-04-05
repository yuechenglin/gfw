import React from 'react'
import fetchData from '../util/util.fetch.js'
import Scroller from '../../component_dev/scroller/src/'
class Zufang extends React.Component {
	
	constructor(props) {
    	super(props)
		this.state = {
		      list: [<div/>]
//		      ,
//		      list_bottom: [<div/>]
	    }
 	}
	
	render() {
		return (
			<Scroller scrollY={true}
	    		 ref="scroller"
				   usePullRefresh={true}
				   onRefresh={() => {
				        // 刷新数据 start
				        // ...
				        // 刷新数据 end
				
				        this.refs.scroller.stopRefreshing(true); // 这个调用也可以放在异步操作的回调里之后
	    		}}
    		>
				<div className="m-zufang">
					<ul className="header-list">
						<li>
							<select><option>区域</option></select>
						</li>
						<li>
							<select><option>租金</option></select>
						</li>
						<li>
							<select><option>户型</option></select>
						</li>
					</ul>
					
					{ this.state.list }
				</div>
			</Scroller>
		)
	}
	
	
	componentDidMount() {
		let url = '/api/zufanglist.php'
		fetchData(url,function (res) {
//			console.log(res)
			let Les = res.Table.map(val=>{
//				console.log(val)
//				console.log(val.img)



				return (
					<div className="part02">
						<img alt="" title="" src={val.img} />
						<div className="part02-right">
							<h3>{val.title}</h3>
							<p className="part02-right01">
								<span>{val.areainfo} </span>
								<span> {val.addrinfo} </span>
								<span> {val.v_price} </span>
							</p>
							<p className="part02-right02">
								<span>{val.v_houselayout} </span>
								<span>{val.v_housesize}</span>
							</p>

							
						</div>
					</div>
				)
			})
			
			this.setState({
		        list: Les
		    })

		}.bind(this))
	}

}

export default Zufang