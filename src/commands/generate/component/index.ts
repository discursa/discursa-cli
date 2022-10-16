import { Command } from "commander"
import { nameArgument } from "../../../arguments"
import { componentAction } from "./actions"
import { pathArgument } from "./arguments"

const generateComponent = new Command("component")

generateComponent
	.description("generate new component")
	.addArgument(nameArgument)
	.addArgument(pathArgument)
	.action((name: string, path: string) => {
		componentAction(name, path)
	})

export { generateComponent }
