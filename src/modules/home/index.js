/**
 * Created by yuyuanlin on 2018/8/15.
 */
import React from 'react';
import "./styles/home.scss";
//import "./styles/bootstrap.min.css";
import { Form, Input, Select, Button, Grid, Row, Col, Message } from 'lida';

class home extends React.Component {
    constructor(props) {
        super(props);
    }

    submitHandle(){

    }

    render() {
        return (
            <div className = "home-wrap">
{/*                <div className="top-wrapper"></div>*/}
                <div className="home-login">
                    <Grid>
                    <Row>
                        <Col span={10}>
                            <Form onSubmit={::this.submitHandle} layout='horizontal'>
                                <Form.Item labelFor="input" label="输入框">
                                    <Input id="input" placeholder="请输入内容" />
                                </Form.Item>
                                <Form.Item
                                    label="选择器"
                                    rules={[
                                        {
                                            required: true,
                                            message: '选择器不能为空'
                                        }
                                    ]}
                                >
                                    <Select>
                                        <Select.Option value="ga">
                                            公安事业部
                                        </Select.Option>
                                        <Select.Option value="jr">
                                            金融事业部
                                        </Select.Option>
                                        <Select.Option value="ny">
                                            能源事业部
                                        </Select.Option>
                                        <Select.Option value="ly">
                                            楼宇事业部
                                        </Select.Option>
                                        <Select.Option value="jjfa">
                                            解决方案部
                                        </Select.Option>
                                        <Select.Option value="jt">
                                            交通事业部
                                        </Select.Option>
                                        <Select.Option value="cq" disabled>
                                            重庆分公司
                                        </Select.Option>
                                        <Select.Option value="gx">
                                            共享软件开发部
                                        </Select.Option>
                                        <Select.Option value="wjw">
                                            文教卫事业部
                                        </Select.Option>
                                        <Select.Option value="gc">
                                            工程项目部
                                        </Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" nativeType="submit">
                                        提交
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}
export default home