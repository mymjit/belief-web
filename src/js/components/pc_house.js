import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {Collapse} from 'antd';
import {Input, Button} from 'antd';
import {Form, Icon, Select} from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;
const Panel = Collapse.Panel;
const Search = Input.Search;
const { TextArea } = Input;


const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class PCHouse extends Component {

    constructor() {
        super();
        this.state = {
            title: '最美的文字,记录最美的生活！',
            dataTime: '发布时间:2017/12/25',
            author: '作者:whilte',
            content: '写作是运用语言文字符号反映客观事物、表达思想感情、 ' +
            '传递知识信息的创造性脑力劳动过程。作为一个完整的系统过程， ' +
            '写作活动大致可分为“采集—构思—表述”三个阶段。 ' +
            '简单来说，写作生活中与人沟通、交流、分享信息的一种方式，' +
            '就像我们平常说话一样。 写作就是用笔来说话。',
        }
    }


    // 发布文章
    publishClick() {
        console.log("success");
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }


    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 18},
        }
        const formLinkLayout = {
            labelCol: {span: 3},
            wrapperCol: {span: 21},
        }

        return (
            <div>
                <br/>
                <Row>
                    <Col span={6}>
                        <Search placeholder="input search text" onSearch={value => console.log(value)} />
                    </Col>
                    <Col span={18} style={{textAlign: 'center'}}>
                        <Button type="primary" icon="plus-circle-o" onClick={this.publishClick()}>发布文章</Button>
                    </Col>
                </Row>

                <br/>


                <Row>
                    <Col span={6}>
                        <Collapse defaultAtiveKey={['1']}>
                            <Panel header="panel header 1" key="1">
                                <ul>
                                    <li>文章标题1</li>
                                    <li>文章标题2</li>
                                </ul>
                            </Panel>
                            <Panel header="panel header 2" key="2">
                                <p>内容2</p>
                            </Panel>
                            <Panel header="panel header 3" key="3">
                                <p>内容3</p>
                            </Panel>
                            <Panel header="panel header 3" key="4">
                                <p>内容3</p>
                            </Panel>
                            <Panel header="panel header 3" key="5">
                                <p>内容3</p>
                            </Panel>
                            <Panel header="panel header 3" key="6">
                                <p>内容3</p>
                            </Panel>
                            <Panel header="panel header 3" key="7">
                                <p>内容3</p>
                            </Panel>
                            <Panel header="panel header 3" key="8">
                                <p>内容3</p>
                            </Panel>
                            <Panel header="panel header 3" key="9">
                                <p>内容3</p>
                            </Panel>
                            <Panel header="panel header 3" key="10">
                                <p>内容3</p>
                            </Panel>
                        </Collapse>
                    </Col>

                    <Col span={18} style={{display: 'none'}}>
                        <Row style={{textAlign: 'center'}}>
                            <h3>{this.state.title}</h3>
                            <Col span={4}>{this.state.dataTime}</Col>
                            <Col span={16}></Col>
                            <Col span={4}>{this.state.author}</Col>
                        </Row>
                        <br/>
                        <Row>
                            {this.state.content}
                        </Row>
                    </Col>

                    <Col span={18}>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={20}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Row>
                                        <Col span={12}>
                                            <FormItem label="文章标题:" {...formItemLayout} >
                                                { getFieldDecorator('title', {
                                                    rules: [{ message: '请输入文章标题'}],
                                                })(
                                                    <Input prefix={<Icon type="user"/>} placeholder="Username"/>
                                                )}
                                            </FormItem>
                                        </Col>
                                        <Col span={12}>
                                            <FormItem label="文章作者:" {...formItemLayout}>
                                                {getFieldDecorator('author', {
                                                    rules: [{ message: '借鉴文章请标明原文作者！'}],
                                                })(
                                                    <Input prefix={<Icon type="lock"/>} type="password" placeholder="Password"/>
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}>
                                            <FormItem label="文章标签:" {...formItemLayout} >
                                                {getFieldDecorator('label')(
                                                    <Select
                                                        mode="multiple"
                                                        style={{ width: '100%' }}
                                                        placeholder="Please select"
                                                        defaultValue={['a10', 'c12']}
                                                    >
                                                        {children}
                                                    </Select>
                                                )}
                                            </FormItem>
                                        </Col>
                                        <Col span={12}>
                                            <FormItem label="是否公开:" {...formItemLayout} >
                                                {getFieldDecorator('isopen', {
                                                    rules: [{message: '借鉴文章请标明原文作者！'}],
                                                })(
                                                    <Input prefix={<Icon type="lock"/>} type="password" placeholder="Password"/>
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={24}>
                                            <FormItem label="原文连接:" {...formLinkLayout} >
                                                {getFieldDecorator('link', {
                                                    rules: [{message: '借鉴文章请标明原文作者！'}],
                                                })(
                                                    <Input prefix={<Icon type="lock"/>} type="password" placeholder="Password"/>
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={24}>
                                            <FormItem label="文章: " {...formLinkLayout} >
                                                {getFieldDecorator('test', {
                                                    rules: [{ message: '借鉴文章请标明原文作者！'}],
                                                })(
                                                    <TextArea rows={4} />
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>


                                </Form>
                            </Col>
                            <Col span={2}></Col>
                        </Row>

                    </Col>

                </Row>

                <br/>
            </div>
        )
    }
}
export default PCHouse = Form.create()(PCHouse);
;