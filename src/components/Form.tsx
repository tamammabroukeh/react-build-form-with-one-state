import Billing from "./Billing";
import { ChangeEvent, useState } from "react";
const info = {
  billFirstName: "",
  billLastName: "",
  billAddress1: "",
  billAddress2: "",
  billCity: "",
  billState: "",
  billZipCode: "",
};
const Form = () => {
  const [data, setData] = useState(info);

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    setData(info);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const type = e.target.type;
    // console.log(type);

    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { billAddress2, ...otherProps } = data;

  const canSave = [...Object.values(otherProps)].every(Boolean);

  const content = (
    <form className="form flex-col" onSubmit={handleSubmit}>
      <h2>Billing Info</h2>

      <Billing data={data} handleChange={handleChange} />

      <button className="button" disabled={!canSave}>
        Submit
      </button>
    </form>
  );

  return content;
};
export default Form;
