import { useMutation } from "@apollo/client";
import { Button, Form, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import { ADD_PERSON, GET_PERSONS } from "../../queries";

const AddPerson = () => {
  const [addContact] = useMutation(ADD_PERSON);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { firstName, lastName } = values;

    addContact({
      variables: {
        id: uuidv4(),
        firstName,
        lastName,
      },
      update: (cache, { data: { addPerson } }) => {
        const data = cache.readQuery({ query: GET_PERSONS });
        addPerson = { ...addPerson, cars: [] };
        cache.writeQuery({
          query: GET_PERSONS,
          data: {
            persons: [...data.persons, addPerson],
          },
        });
      },
    });
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="add-contact-form"
      layout="horizontal"
      onFinish={onFinish}
      size="large"
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
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Add Contact
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default AddPerson;
