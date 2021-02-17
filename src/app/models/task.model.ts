import { Priority } from "./priority.enum";
import { Stat } from "./status.enum";

export class Task {
  pk?: string;
  user? :string;
  name :string;
  status :Stat;
  created :Date;
  due_date :Date;
  realization_date? :Date;
  priority : any;
}
