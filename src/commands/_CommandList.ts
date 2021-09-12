import { CommandInt } from "../interfaces/commandInt";
import { oneHundred } from "./oneHundred";
import { view } from "./view";
import { edit } from "./edit";
import { help } from "./help";
import { sub } from "./subtract";
// import { quotes } from "./quotes";

export const CommandList: CommandInt[] = [view, oneHundred, edit, sub, help];
