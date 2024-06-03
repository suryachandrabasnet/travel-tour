import { UUID } from "crypto";

interface TestimonialInterface {
  id: number;
  uuid: UUID;
  name: string;
  image?: string;
  address: string;
  description: string;
  status: boolean;
}

export default TestimonialInterface;
