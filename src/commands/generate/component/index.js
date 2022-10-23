import { Command } from "commander"
import { nameArgument } from "../../../arguments"
import { forceOption } from "../../../options"
import { componentAction } from "./actions"
import { pathArgument } from "./arguments"

const generateComponent = new Command("component")

generateComponent
	.description("generate new component")
	.addArgument(nameArgument)
	.addArgument(pathArgument)
	.addOption(forceOption)
	.action((name, path, options) => {
		componentAction(name, path, options)
	})

export { generateComponent }
