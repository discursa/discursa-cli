import { Command } from "commander"
import { nameArgument } from "../../../arguments"
import { forceOption } from "../../../options"
import { GenerateCommandOptions } from "../types"
import { componentAction } from "./actions"
import { pathArgument } from "./arguments"

const generateComponent = new Command("component")

generateComponent
	.description("generate new component")
	.addArgument(nameArgument)
	.addArgument(pathArgument)
	.addOption(forceOption)
	.action((name: string, path: string, options: GenerateCommandOptions) => {
		componentAction(name, path, options)
	})

export { generateComponent }
