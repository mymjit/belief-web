import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Timeline } from 'antd';
import { Button } from 'antd';
class PCDiary extends Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <br/>

                <Row>
                    <Col span={20} style={{textAlign:'center'}}>
                        <Row>
                            <Button type="primary" icon="plus-circle-o" >添加日记</Button>
                        </Row>
                    </Col>

                    <Col span={4}>
                        <br/>
                        <br/>
                        <br/>
                        <Timeline>
                            <Timeline.Item>2015-01</Timeline.Item>
                            <Timeline.Item>2015-02</Timeline.Item>
                            <Timeline.Item>2015-03</Timeline.Item>
                            <Timeline.Item>2015-04</Timeline.Item>
                            <Timeline.Item>2015-05</Timeline.Item>
                            <Timeline.Item>2015-06</Timeline.Item>
                            <Timeline.Item>2015-07</Timeline.Item>
                            <Timeline.Item>2015-08</Timeline.Item>
                            <Timeline.Item>2015-09</Timeline.Item>
                            <Timeline.Item>2015-10</Timeline.Item>
                            <Timeline.Item>2015-11</Timeline.Item>
                            <Timeline.Item>2015-12</Timeline.Item>
                        </Timeline>
                    </Col>
                </Row>
            </div>
        )
    }


}
export default PCDiary;
