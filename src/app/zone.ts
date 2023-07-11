import {Step} from "./step";

export interface Zone {
  name: string,
  steps: Step[],
  completed: boolean
}
