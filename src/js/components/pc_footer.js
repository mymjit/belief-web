import React,{Component} from 'react';
import { Divider } from 'antd';
class PCFooter extends Component{
    render(){
        return(
            <footer>
                <Divider className="footer">
                    &copy;&nbsp;2017 whilte. All Rights Reserved.备案号：赣ICP备17007652号
                </Divider>
            </footer>
        )
    }
}
export default PCFooter;