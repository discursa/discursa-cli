import { Argument } from "commander"

const nameArgument = new Argument(
	"<name>",
	"name of the future feature"
).argRequired()

export { nameArgument }
