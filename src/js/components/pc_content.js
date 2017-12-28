import React, {Component} from 'react';
import {Carousel, Card} from 'antd';
import {Row, Col} from 'antd';

const {Meta} = Card;

class PCContent extends Component {
    render() {
        return (
            <div className='content'>
                <br/>
                <Carousel className='carousel' effect="fade" autoplay>
                    <div><img src={require('../../images/1.png')} alt="轮播图一"/></div>
                    <div><img src={require('../../images/2.png')} alt="轮播图二"/></div>
                    <div><img src={require('../../images/3.png')} alt="轮播图二"/></div>
                </Carousel>

                <br/>

                <Row>
                    <Col span={6}>
                        <Card
                            hoverable
                            className='card-img'
                            cover={<img alt="example"
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                        >
                            <Meta
                                title="标题"
                                description="描述信息"
                            />
                        </Card>
                    </Col>

                    <Col span={6}>
                        <Card
                            hoverable
                            className='card-img'
                            cover={<img alt="example"
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                        >
                            <Meta
                                title="标题"
                                description="描述信息"
                            />
                        </Card>
                    </Col>

                    <Col span={6}>
                        <Card
                            hoverable
                            className='card-img'
                            cover={<img alt="example"
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                        >
                            <Meta
                                title="标题"
                                description="描述信息"
                            />
                        </Card>
                    </Col>

                    <Col span={6}>
                        <Card
                            hoverable
                            className='card-img'
                            cover={<img alt="example"
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                        >
                            <Meta
                                title="标题"
                                description="描述信息"
                            />
                        </Card>
                    </Col>

                </Row>


            </div>
        )
    }
}

export default PCContent;