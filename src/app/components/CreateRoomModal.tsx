import React from "react";
import { Form, Input, Radio, Modal } from "antd";
import { useCreateRoomModalContainer } from "app/components/towers/hooks/useCreateRoomModalContainer";

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

export const CreateRoomModal = () => {
  const {
    form,
    show,
    formValues,
    onCreateRoomModalCancel,
    onCreateRoomModalOk,
    onCreateRoomFormValuesChange,
  } = useCreateRoomModalContainer();

  return (
    <Modal
      title="Create Room"
      visible={show}
      onCancel={onCreateRoomModalCancel}
      onOk={onCreateRoomModalOk}
    >
      <Form
        form={form}
        initialValues={formValues}
        {...formItemLayout}
        layout="horizontal"
        onValuesChange={onCreateRoomFormValuesChange}
      >
        <Form.Item label="Mode" name="mode">
          <Radio.Group>
            <Radio.Button value="CASUAL">Casual</Radio.Button>
            <Radio.Button value="RANKED">Ranked</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Name" name="name">
          <Input placeholder="name" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
