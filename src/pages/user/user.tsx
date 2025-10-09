import { Button, DatePicker, Form, FormProps, Input, InputNumber, message, Modal, Popconfirm, Select, Table } from 'antd';
import {addUser, deleteUser, editUser, getUsers} from "@/api/user";
import React, { use, useEffect, useState } from 'react'
import { User, UserQuery } from '@/types/user';

import dayjs from 'dayjs'
import { cloneDeep } from 'lodash-es';
const UserTab: React.FC = () => {
  const [userQuery, setUserQuery] = useState<UserQuery>({});
  const [tableData, setTableData] = useState<User[]>([]);
  const [op, setOp] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalForm] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(()=>{
    handleSearch();
  }, []);
  const handleClick = (op: string, row?: User) => {
    setModalVisible(true);
    if(op === "add"){
      setOp("add");
    }else{
      setOp("edit");
      if(row){ 
        const data = cloneDeep<User>(row);
        // 可以给一个字段设置多个类型，方便处理
        data.birthday = dayjs(data.birthday);
        modalForm.setFieldsValue(data);
      }
    }
  };
const handleDelete = (record: User) => {
  const {id, name} = record;
  deleteUser({id, name}).then(res=>{
    messageApi.success("删除成功");
    handleSearch();
  });
};
const columns = [
  {
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    render: (text: number) => {
      return text === 0 ? '女' : '男';
    }
  },
  {
    title: '出生日期',
    dataIndex: 'birthday',
    key: 'birthday',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: (value: string, row:User) => (
      <div>
       <Button type='primary'
       style={{ marginRight: 10 }}
       onClick={()=>handleClick("edit", row)}>Edit</Button>
        <Popconfirm
          title="删除此用户"
          description="确定要删除此用户？"
          onConfirm={() => handleDelete(row)}
          okText="Yes"
          cancelText="No"
        >
          <Button color='danger' variant="solid">Delete</Button>
        </Popconfirm>
      </div>
    )
  },

]
  const handleFinish: FormProps<UserQuery>['onFinish'] = (values) => { 
    setUserQuery(values);
    // 由于state更新是异步的，因此这里handleSearch不会使用输入的内容搜索，拿到的内容为null
    // handleSearch();
  }
  // 解决方式监听state内容变化，变化了就执行搜索。所谓变化了就是执行了setUserQuery()
  useEffect(()=>{
    handleSearch();
  }, [userQuery]);
  const handleSearch = () => {
    setLoading(true);
    getUsers(userQuery).then(res=>{
      setTableData(res.data);
      setLoading(false);
    });
  }
  const handleCancel = ()=>{
    setModalVisible(false);
    modalForm.resetFields();
  }
  const handleOk = () => { 
    modalForm.validateFields().then((row: User) =>{
      row.birthday = dayjs(row.birthday).format("YYYY-MM-DD");
      if(op === "add"){
        addUser(row).then(res=>{
          handleSearch();
          handleCancel();
          messageApi.success("添加成功");
        });
      }else{
        editUser(row).then(res=>{ 
          handleSearch();
          handleCancel();
          messageApi.success("编辑成功");
        });
      }
    }).catch((error)=>{
      message.error("错误");
      console.log(error);
    });
  }
  return (
    <>
    {contextHolder}
    <Form
      layout="inline"
      onFinish={handleFinish}
    >
      <Form.Item<UserQuery> name="name">
        <Input placeholder="请输入用户名" allowClear></Input>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">查询</Button>
        <Button type='primary' 
          onClick={()=>handleClick("add")}
          style={{ marginLeft: 8 }}>新增</Button>
      </Form.Item>
    </Form>
    <Table<User>
      style={{ marginTop: 20 }}
      columns={columns}
      loading={loading}
      dataSource={tableData}
      rowKey={record => record.id}
      >
    </Table>
    <Modal
      title={op === "add" ? "新增用户" : "编辑用户"}
      open={modalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="确定"
      cancelText="取消"
    >
      <Form<User>
        form={modalForm}
        labelCol={{
          span: 6
        }}
        wrapperCol={{
          span: 18
        }}
        labelAlign='left'
      >
        {
          op !== "add" && 
        <Form.Item
          label="ID"
          name="id"
          hidden
        >
          <Input ></Input>
        </Form.Item>
        }

        <Form.Item
          label="姓名"
          name="name"
          rules={[
            {
              required: true,
              message: '请输入姓名'
            }
          ]}
        >
          <Input placeholder="请输入姓名" allowClear></Input>
        </Form.Item>
        <Form.Item
          label="年龄"
          name="age"
          rules={[
            {
              required: true,
              message: '请输入年龄'
            },
            {
              type: "number",
              message: '年龄必须是整数'
            }
          ]}
        >
          <InputNumber style={{width: "100%"}} placeholder="请输入年龄"></InputNumber>
        </Form.Item>
        <Form.Item
          label="性别"
          name="sex"
          rules={[
            {
              required: true,
              message: '请选择性别'
            }
          ]}
        >
          <Select
            placeholder="请选择性别"
            options={[
              {
                value: 0,
                label: '女'
              },
              {
                value: 1,
                label: '男'
              }
            ]}
          >
            
          </Select>
        </Form.Item>
        <Form.Item
          label="出生日期"
          name="birthday"
          rules={[
            {
              required: true,
              message: '请选择出生日期'
            }
          ]}
        >
          
          <DatePicker 
            placeholder='选择出生日期'
            format="YYYY/MM/DD"
            style={{ width: '100%'}}
            ></DatePicker>
        </Form.Item>
        <Form.Item
          label="地址"
          name="address"
          rules={[
            {
              required: true,
              message: '请输入地址'
            }
          ]}
        >
          
          <Input placeholder='请输入地址' allowClear></Input>
        </Form.Item>
      </Form>
    </Modal>
    </>
  )
}

export default UserTab