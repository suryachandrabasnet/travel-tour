import { UUID } from "crypto";

interface ourTeamInterface {
  uuid: UUID;
  name: string;
  image?: string;
  phone_number: string;
  email: string;
  position: string;
  status: boolean;
}

export default ourTeamInterface;
