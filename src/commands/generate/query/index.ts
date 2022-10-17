import { Command } from "commander"
import { nameArgument } from "../../../arguments"
import { forceOption } from "../../../options"
import { GenerateCommandOptions } from "../types"
import { queryAction } from "./actions"
import { featureNameArgument } from "./arguments"

const generateQuery = new Command("query")

generateQuery
	.description("generate new query for feature")
	.addArgument(nameArgument)
	.addArgument(featureNameArgument)
	.addOption(forceOption)
	.action(
		(name: string, featureName: string, options: GenerateCommandOptions) => {
			queryAction(name, featureName, options)
		}
	)

export { generateQuery }
