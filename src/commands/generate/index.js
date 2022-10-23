import { Command } from "commander"
import { generateComponent } from "./component"
import { generateQuery } from "./query"

const generateCommand = new Command("generate")

generateCommand
	.description("generate boilerplate code")
	.addCommand(generateComponent)
	.addCommand(generateQuery)
	.alias("g")

export { generateCommand }
