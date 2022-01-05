import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Input,
  Modal,
  Form,
  message,
  Row,
  Space,
  InputNumber,
} from 'antd';
import React, { useState } from 'react';
export default function ClassroomAdd() {

    //#region handle functions (form submit)
    const handleClassroomAddFormSubmit = async () => {
      
    };
    const handleClassroomAddFormSubmitFailed = () => {};
  
    return (
      <>
        <Button
          type="primary"
          icon={<PlusOutlined />}
        >
          Add a classroom
        </Button>
        <Modal
          title="Add Classroom"
          footer={null}
        >
          <Form
            name="add-classroom-form"
            onFinish={handleClassroomAddFormSubmit}
            onFinishFailed={handleClassroomAddFormSubmitFailed}
            autoComplete="off"
            layout="vertical"
            style={{ width: '100%' }}
            initialValues={{
              gradings: [
                {
                  title: 'Final exam',
                  ratio: 100,
                },
              ],
            }}
          >
            {/* Title */}
            <Form.Item
              label="Title"
              name="title"
              rules={[
                { required: true, message: 'Please input your classroom title!' },
              ]}
            >
              <Input placeholder="Classroom title" />
            </Form.Item>
  
            {/* Gradings */}
            <Form.Item label="Gradings" required={true}>
              <Form.List
                name="gradings"
                rules={[
                  {
                    validator(_, gradings) {
                      if (
                        !gradings ||
                        !Array.isArray(gradings) ||
                        gradings.length < 1
                      ) {
                        return Promise.reject();
                      } else {
                        const totalRatio =
                          gradings.length === 1
                            ? gradings[0].ratio
                            : gradings.reduce(
                                (prev, curr) =>
                                  parseInt(prev?.ratio) + parseInt(curr?.ratio)
                              );
                        if (totalRatio !== 100) {
                          return Promise.reject();
                        }
                        return Promise.resolve();
                      }
                    },
                    message:
                      'Please provide at least 1 grading and the total ratio has to be 100 percent.',
                  },
                ]}
              >
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: 'flex', marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, 'title']}
                          fieldKey={['title']}
                          rules={[
                            { required: true, message: 'Missing grading title' },
                          ]}
                        >
                          <Input placeholder="Grading title" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'ratio']}
                          fieldKey={['ratio']}
                          rules={[
                            { required: true, message: 'Missing grade ratio' },
                          ]}
                        >
                          <InputNumber
                            min={0}
                            max={100}
                            placeholder="Grading ratio"
                          />
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(name)}
                          />
                        ) : null}
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add grading
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
  
            <Row justify="end">
              <Form.Item>
                <Button type="primary" htmlType="submit" >
                  Add
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </Modal>
      </>
    );
  }
  