import { UUID } from "crypto";

interface UserInterface {
  id: number;
  uuid: UUID;
  first_name: string;
  last_name: string;
  email: string;
  image?: string;
  phone_number: string;
  password: string;
  user_type: string;
}

export default UserInterface;
