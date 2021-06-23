import { CommandInt } from "../interfaces/commandInt";
import { oneHundred } from "./oneHundred";
import { view } from "./view";
import { edit } from "./edit";
import { help } from "./help";
import { sub } from "./subtract";

export const CommandList: CommandInt[] = [oneHundred, view, edit, sub, help];
