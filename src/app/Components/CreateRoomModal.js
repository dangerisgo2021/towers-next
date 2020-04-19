import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Radio, Modal } from "antd";
import { getShowModal } from "../../state/redux/modals/selectors/getShowModal";
import { modalCanceled, modalOk } from "../../state/redux/modals/actions";
import { NAME } from "../../state/redux/createRoomModal/consts";
import { formValueChanged } from "../../state/redux/forms/actions";
import { getFormValues } from "../../state/redux/createRoomModal/selectors/getFormValues";

const useCreateRoomModalContainer = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  return {
    form,
    formValues: useSelector(getFormValues),
    show: useSelector(getShowModal),
    onCreateRoomModalCancel: () => {
      dispatch(modalCanceled({ modal: NAME }));
    },
    onCreateRoomModalOk: () => {
      dispatch(modalOk({ modal: NAME }));
    },
    onCreateRoomFormValuesChange: (values) => {
      dispatch(formValueChanged({ form: NAME, values }));
    },
  };
};
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
