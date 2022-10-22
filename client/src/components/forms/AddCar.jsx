import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { v4 as uuidv4 } from "uuid";
import { ADD_CAR, GET_CARS, GET_PERSONS } from "../../queries";

const AddCar = () => {
  const [addCar] = useMutation(ADD_CAR, {
    refetchQueries: [{ query: GET_PERSONS }],
  });

  const { data, loading, error } = useQuery(GET_PERSONS);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { model, make, year, price, personId } = values;
    const id = uuidv4();
    const newCar = {
      id,
      model,
      make,
      year: parseInt(year),
      price,
      personId,
    };
    addCar({
      variables: newCar,
      update: (cache, { data: { addCar } }) => {
        const data = cache.readQuery({ query: GET_CARS });
        if (data) {
          cache.writeQuery({
            query: GET_CARS,
            data: {
              cars: [...data.cars, addCar],
            },
          });
        }
      },
    });
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
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Add Car
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default AddCar;
