export interface IFormData {
  data: {
    billFirstName: string;
    billLastName: string;
    billAddress1: string;
    billAddress2: string;
    billCity: string;
    billState: string;
    billZipCode: string;
  };
  handleChange: () => void;
}
