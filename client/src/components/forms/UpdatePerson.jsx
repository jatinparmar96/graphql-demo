import { useMutation } from "@apollo/client";
import { Button, Form, Input } from "antd";
import { UPDATE_PERSON } from "../../queries";

const UpdatePerson = (props) => {
  const [form] = Form.useForm();

  const [updatePerson] = useMutation(UPDATE_PERSON);
  const { id, firstName, lastName } = props;
  const onFinish = (values) => {
    const { firstName, lastName } = values;

    updatePerson({
      variables: {
        id,
        firstName,
        lastName,
      },
    });

    props.onButtonClick();
  };

  return (
    <Form
      form={form}
      name="update-person-form"
      layout="inline"
      onFinish={onFinish}
      size="large"
      initialValues={{
        firstName: firstName,
        lastName: lastName,
      }}
    >
      <Form.Item
        name="firstName"
        rules={[{ required: true, message: "Please input your first name!" }]}
      >
        <Input placeholder="i.e. John" />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[{ required: true, message: "Please input your last name!" }]}
      >
        <Input placeholder="i.e. Smith" />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              (!form.isFieldTouched("firstName") &&
                !form.isFieldTouched("lastName")) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Update Contact
          </Button>
        )}
      </Form.Item>
      <Form.Item>
        <Button type="danger" onClick={props.onButtonClick}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};
export default UpdatePerson;
