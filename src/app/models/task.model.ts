import { User } from "./user.model";

export class Task {
  pk?: string;
  user :string;
  name :string;
  status :string;
  created :Date;
  due_date :Date;
  realization_date :Date;
  priority :number;
}
