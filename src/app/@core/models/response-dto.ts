import { User } from "./user";
import { Role } from "./role";
import { Company } from "./company";

export interface ResponseDto {
  data: User | Company | Role;

}
