import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { GET_PERSONS, UPDATE_CAR } from "../../queries";

const UpdateCar = (props) => {
  const { id, make, model, year, price, personId } = props;

  const { data, loading, error } = useQuery(GET_PERSONS);
  const [updateCar] = useMutation(UPDATE_CAR, {
    refetchQueries: [{ query: GET_PERSONS }],
  });

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { make, model, year, price, personId } = values;

    updateCar({
      variables: {
        id,
        make,
        model,
        year: parseInt(year),
        price: parseFloat(price),
        personId,
      },
    });
    props.onButtonClick();
  };
  return (
    <Form
      form={form}
      name="update-contact-form"
      layout="inline"
      onFinish={onFinish}
      size="large"
      initialValues={{
        make,
        model,
        year,
        price,
        personId,
      }}
    >
      <Form.Item
        name="model"
        rules={[{ required: true, message: "Please input your Car Model!" }]}
      >
        <Input placeholder="i.e. City" />
      </Form.Item>
      <Form.Item
        name="make"
        rules={[{ required: true, message: "Please input your car make!" }]}
      >
        <Input placeholder="i.e. Honda" />
      </Form.Item>
      <Form.Item
        name="year"
        rules={[
          {
            required: true,
            message: "Please input your car model year!",
          },
          {
            type: "number",
            min: 1900,
            message: "Year cannot be less than 1900",
            transform: (value) => +value,
          },
          {
            type: "number",
            max: 2022,
            message: "Year cannot be greater than 2022",
            transform: (value) => +value,
          },
          {
            type: "number",
            message: "Please only input integer",
            transform: (value) => +value,
          },
        ]}
      >
        <Input placeholder="i.e. 2021" />
      </Form.Item>
      <Form.Item
        name="price"
        rules={[
          { required: true, message: "Please input your car price!" },
          {
            type: "number",
            message: "Price must be a floating point",
          },
        ]}
      >
        <InputNumber
          min={1}
          step="0.01"
          addonAfter="$"
          placeholder="i.e. 15000"
        />
      </Form.Item>
      <Form.Item
        name="personId"
        rules={[{ required: true, message: "Please input your car price!" }]}
      >
        <Select>
          {!loading && !error && data ? (
            <>
              {data.persons.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.firstName} {item.lastName}
                </Select.Option>
              ))}
            </>
          ) : (
            <></>
          )}
        </Select>
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched() ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Update Car
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
export default UpdateCar;
