import React , {Component} from 'react';
import PCContent from './pc_content';
import PCHouse   from './pc_house';
import PCDiary   from './pc_diary';
import emitter from "./util/events";

class PCContentTemplate extends Component {

    constructor(){
        super();
        this.state = {
            view : <PCContent/>
        }
    }

    componentDidMount(){
        // 在组件装载完成以后
        this.eventEmitter = emitter.addListener("callMe",(msg)=>{
            let  view = <PCContent/>;
            switch (msg){
                case 'homepage' : view = <PCContent/>; break;
                case 'house'    : view = <PCHouse/>;   break;
                case 'diary'    : view = <PCDiary/>;   break;
                case 'login'    : view = this.state.view; break;
            }
            this.setState({
                view: view
            })
        });
    }

    componentWillUnmount(){
        // 组件销毁前移除事件监听
        emitter.removeListener(this.eventEmitter);
    }

    render(){
       return(
           <div>
               {this.state.view}
           </div>
       )
    }
}
export default  PCContentTemplate;