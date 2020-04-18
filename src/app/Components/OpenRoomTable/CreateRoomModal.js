import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Radio, Modal } from "antd";
import { getShowModal } from "../../../state/redux/modals/selectors/getShowModal";
import { modalCanceled, modalOk } from "../../../state/redux/modals/actions";
import { MODALS } from "../../../state/redux/modals/reducer";
import {
  formValueChanged,
} from "../../../state/redux/forms/actions";

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const useCreateRoomModalContainer = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  return {
    form,
    show: useSelector(getShowModal),
    onCreateRoomModalCancel: () => {
      dispatch(modalCanceled({ modal: MODALS.createRoomModal }));
    },
    onCreateRoomModalOk: () => {
      dispatch(modalOk({ form: MODALS.createRoomModal }));
    },
    onCreateRoomFormValuesChange: (values) => {
      dispatch(formValueChanged({ form: MODALS.createRoomModal, values }));
    },
  };
};

export const CreateRoomModal = () => {
  const {
    form,
    show,
    onCreateRoomModalCancel,
    onCreateRoomModalOk,
    onCreateRoomFormValuesChange,
  } = useCreateRoomModalContainer();
  console.log({ show, form });
  return (
    <Modal
      title="Create Room"
      visible={show}
      onCancel={onCreateRoomModalCancel}
      onOk={onCreateRoomModalOk}
    >
      <Form
        {...formLayout}
        form={form}
        initialValues={{
          mode: "casual",
        }}
        onValuesChange={onCreateRoomFormValuesChange}
      >
        <Form.Item label="Mode" name="mode">
          <Radio.Group>
            <Radio.Button value="ranked">Ranked</Radio.Button>
            <Radio.Button value="casual">Casual</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Name" name="name">
          <Input placeholder="name" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
