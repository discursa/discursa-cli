import { Command } from "commander"
import { nameArgument } from "../../../arguments"
import { forceOption } from "../../../options"
import { queryAction } from "./actions"
import { featureNameArgument } from "./arguments"

const generateQuery = new Command("query")

generateQuery
	.description("generate new query for feature")
	.addArgument(nameArgument)
	.addArgument(featureNameArgument)
	.addOption(forceOption)
	.action((name, featureName, options) => {
		queryAction(name, featureName, options)
	})

export { generateQuery }
