import {useDispatch, useSelector} from "react-redux";
import {Form} from "antd";
import {getFormValues} from "state/redux/createRoomModal/selectors/getFormValues";
import {getShowModal} from "state/redux/modals/selectors/getShowModal";
import {modalCanceled, modalOk} from "state/redux/modals/actions";
import {NAME} from "state/redux/createRoomModal/consts";
import {formValueChanged} from "state/redux/forms/actions";

export const useCreateRoomModalContainer = () => {
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