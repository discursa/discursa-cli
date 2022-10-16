import { Command } from "commander"
import { nameArgument } from "../../../arguments"
import { queryAction } from "./actions"
import { featureNameArgument } from "./arguments"

const generateQuery = new Command("query")

generateQuery
	.description("generate new query for feature")
	.addArgument(nameArgument)
	.addArgument(featureNameArgument)
	.action((name: string, featureName: string) => {
		queryAction(name, featureName)
	})

export { generateQuery }
