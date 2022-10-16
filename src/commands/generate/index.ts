import { Command } from "commander"
import { generateComponent } from "./component"

const generateCommand = new Command("generate")

generateCommand
	.description("generate boilerplate code")
	.addCommand(generateComponent)
	.alias("g")

export { generateCommand }
