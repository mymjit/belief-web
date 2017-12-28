import '../css/pc.css';
import React from 'react';
import PCHeader from './components/pc_header';
import PCContentTemplate from './components/pc_content_template';
import PCFooter from './components/pc_footer';
import {Row, Col} from 'antd';
import { BackTop } from 'antd';

class Root extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <PCHeader></PCHeader>
                    </Col>
                    <Col span={2}></Col>
                </Row>

                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <PCContentTemplate></PCContentTemplate>
                    </Col>
                    <Col span={2}></Col>
                </Row>

                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <PCFooter></PCFooter>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <BackTop style={{ right:'40px' }} />
            </div>
        )
    }
}

export default Root;