import React, {Component} from 'react';
import {Button,Input, Form, Tabs, Modal, Menu, Icon} from 'antd';
import emitter from "./util/events";

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;


class PCHeader extends Component {

    constructor(){
        super();
        this.state ={
            current: 'homepage',
            menu: {
                one: 'homepage',
                two: 'house',
                three: 'diary',
                four: 'login'
            },
            action : 'login',
        }
    }
    handleClick(e) {
        this.setState({
            current:e.key
        })
        if (e.key === this.state.menu.four) {
            // 如果点击的是登入，弹出登入框
            this.modalToggle(true);
        }
    }

    componentDidUpdate(){
        //组件更新调用
        emitter.emit("callMe",this.state.current);
    }

    // 模态框
    modalToggle(boo) {
        this.setState({
            visible: boo
        })
    }

    callback(key){
        console.log(key);
        this.setState({
            action: key
        })
    }

    // 表单提交
    handleSubmit(e){
        e.preventDefault();
        // 表单数据提交
        let formData = new FormData();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                formData.append('telephoneNumber',values.telephoneNumber);
                formData.append('password',values.password);
            }
        });
        let url ='';
        if ('login' === this.state.action ){
            url = 'http://localhost/user/login';
        } else {
            url = 'http://localhost/user/register';
        }
        const myFetchOptions = {
            method : 'POST',
            mode   : 'cors',
            body   : formData
        };
        // 登入验证
        fetch( url, myFetchOptions )
            .then( (response) => {
                if ( 200 === response.status){
                    return response.json();
                }
            })
            .then(json =>{
                console.log('fetch -> json:',json.code);
                if ( null !== json.data ){
                    localStorage.setItem('token',json.msg);
                    console.log('msg :',json.msg);
                }
            })
            .catch((err) =>{
                console.log('err :',err);
            })
    }

    cancelClick(){
        this.modalToggle(false);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={this.state.className}>
                <br/>
                <Menu
                    onClick={this.handleClick.bind(this)}
                    selectedKeys={[this.state.current]}
                    mode="horizontal" >
                    <Menu.Item key={this.state.menu.one}   style={{ width:'25%' }}>
                        <Icon type="global" /> HOME PAGE
                    </Menu.Item>
                    <Menu.Item key={this.state.menu.two}   style={{ width:'25%' }} >
                        <Icon type="exception" />Sanwei Study
                    </Menu.Item>
                    <Menu.Item key={this.state.menu.three} style={{ width:'25%' }}>
                        <Icon type="edit" />Diary of a Madman
                    </Menu.Item>
                    <Menu.Item key={this.state.menu.four}  style={{ width:'25%' }}>
                        <Icon type="team" />Login On / Login Out
                    </Menu.Item>
                </Menu>


                <Modal
                    visible={this.state.visible}
                    onCancel={this.cancelClick.bind(this)}
                    footer={[ ]}>
                    <Tabs defaultActiveKey="login"  onChange={this.callback.bind(this)} >
                        <TabPane tab="登入" key="login">
                            <Form horizontal="false" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem>
                                    {getFieldDecorator('telephoneNumber')(<Input prefix={<Icon type="user"/>}  placeholder="请输入您的账号" />)}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password')(<Input prefix={<Icon type="lock"/>}  type="password" placeholder="请输入您的密码" />)}
                                </FormItem>
                                <Button style={{width:'100%'}} type="primary" htmlType="submit">登入</Button>
                            </Form>
                        </TabPane>

                        <TabPane tab="注册" key="register" >
                            <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem>
                                    {getFieldDecorator('telephoneNumber')(<Input prefix={<Icon type="user"/>}  placeholder="请输入您的账号" />)}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password')(<Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入您的密码" />)}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('configPassword')(<Input prefix={<Icon type="lock"/>}  type="password" placeholder="再次输入您的密码" />)}
                                </FormItem>
                                <Button style={{width:'100%'}} type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )


    }
}
export default PCHeader = Form.create({})(PCHeader);