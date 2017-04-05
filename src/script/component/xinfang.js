import React from 'react'
import fetchData from '../util/util.fetch.js'
import { Link } from 'react-router'
import Scroller from '../../component_dev/scroller/src/'
class Xinfang extends React.Component {
	
	constructor(props) {
    	super(props)
		 
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
			<div className="m-new">
			
				<header className="header">
					<Link to="/board">
						<span></span>
					</Link>
					<img src="./images/xf_index.png"/>
					<input type="text" value="请输入楼盘名或区域" />
				</header>
				
				<section>
					<div>
						<ul>
							<li>
								<Link to="" >
									<img src="./images/all_lp.png"/>
									<b>全部楼盘</b>
								</Link>
							</li>
							<li>
								<Link>
									<img src="./images/recently_opened.png"/>
									<b>近期开盘</b>
								</Link>
							</li>
							<li>
								<Link>
									<img src="./images/discount.png"/>
									<b>优惠楼盘</b>
								</Link>
							</li>
							<li>
								<Link>
									<img src="./images/reserve_price.png"/>
									<b>看低价</b>
								</Link>
							</li>
							</ul>
							<ul>
							<li>
								<Link>
									<img src="./images/purchase_mission.png"/>
									<b>购房团</b>
								</Link>
							</li>
							<li>
								<Link>
									<img src="./images/adviser.png"/>
									<b>房产顾问</b>
								</Link>
							</li>
							<li>
								<Link>
									<img src="./images/development_dynamics.png"/>
									<b>楼盘动态</b>
								</Link>
							</li>
							<li>
								<Link>
									<img src="./images/new_house.png"/>
									<b>特价房</b>
								</Link>
							</li>
						</ul>
					</div>			
				</section>
				
				<nav>
					<ul>
						<li>
							<Link to="" >
								中山
							</Link>
						</li>
						<li className="bor">
							<Link to="" >
								甘井子
							</Link>
						</li>
						<li>
							<Link to="" >
								高新
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="" >
								8千-1万
							</Link>
						</li>
						<li className="bor">
							<Link to="" >
								1万-1.5万
							</Link>
						</li>
						<li>
							<Link to="" >
								全部
							</Link>
						</li>
					</ul>
				</nav>
				
				<div className="new">
					<h3>新房排行榜</h3>
					<div className="hot_banner">
						<img src="./images/hot_banner.png"/>
						<div className="hot_rank">
							<h2>楼盘热度排行</h2>
							<p>更新时间:2017-3-31</p>
							<Link to="/Renting" >
								<button>查看全部</button>
							</Link>
						</div>
					</div>
					<ul>
						<li>
							<Link to="" >
								<b className="red">1</b>
								<div>
									<div>
										<span className="left">秀月麒林</span>

										 
										<span className="red">已关注</span>
										<em className="red">67650 人</em>
										
									</div>
									<p>
										<span> 中山 </span>
										<em> | </em> 
										均价 
										<i className="red"> 1800 </i>
										元/㎡
									</p>
								</div>
							</Link>
						</li>
						<li>
							<Link to="" >
								<b className="red">2</b>
								<div>
									<div>
										<span className="left">秀月麒林</span>

										 
										<span className="red">已关注</span>
										<em className="red">67650 人</em>
										
									</div>
									<p>
										<span> 中山 </span>
										<em> | </em> 
										均价 
										<i className="red"> 1800 </i>
										元/㎡
									</p>
								</div>
							</Link>
						</li>
						<li>
							<Link to="" >
								<b className="red">3</b>
								<div>
									<div>
										<span className="left">秀月麒林</span>

										 
										<span className="red">已关注</span>
										<em className="red">67650 人</em>
										
									</div>
									<p>
										<span> 中山 </span>
										<em> | </em> 
										均价 
										<i className="red"> 1800 </i>
										元/㎡
									</p>
								</div>
							</Link>
						</li>
						<li>
							<Link to="" >
								<b>4</b>
								<div>
									<div>
										<span className="left">秀月麒林</span>

										 
										<span className="red">已关注</span>
										<em className="red">67650 人</em>
										
									</div>
									<p>
										<span> 中山 </span>
										<em> | </em> 
										均价 
										<i className="red"> 1800 </i>
										元/㎡
									</p>
								</div>
							</Link>
						</li>
						<li>
							<Link to="" >
								<b>5</b>
								<div>
									<div>
										<span className="left">秀月麒林</span>

										 
										<span className="red">已关注</span>
										<em className="red">67650 人</em>
										
									</div>
									<p>
										<span> 中山 </span>
										<em> | </em> 
										均价 
										<i className="red"> 1800 </i>
										元/㎡
									</p>
								</div>
							</Link>
						</li>
						
						
					</ul>
				</div>
			</div>
		</Scroller>
		)
	}




}

export default Xinfang