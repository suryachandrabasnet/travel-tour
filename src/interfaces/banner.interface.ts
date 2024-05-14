import { UUID } from "crypto";

interface BannerInterface {
  id: number;
  uuid: UUID;
  title: string;
  image?: string;
  description: string;
  url: string;
  status: boolean;
}

export default BannerInterface;
