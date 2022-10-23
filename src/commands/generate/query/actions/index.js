import { existsSync } from "fs"
import pc from "picocolors"
import { getQueryHookPath, getQueryPath } from "../../helpers"
import { generateAllQueryFiles } from "../generators"

const queryAction = (name, featureName, options) => {
	const featureDir = `./app/features/${featureName}`
	const queryPath = getQueryPath(name, featureName)
	const queryHookPath = getQueryHookPath(name, featureName)

	console.log(pc.blue(pc.bold(`Generating query files...`)))

	if (!name.includes("get")) {
		return console.log(pc.red("Query name must start with 'get' word"))
	}

	if (!existsSync(featureDir)) {
		return console.log(
			pc.red(
				`${featureName} feature doesn't exist, in ${pc.italic(
					"'./app/features'"
				)} directory`
			)
		)
	}

	if (options.force) {
		return generateAllQueryFiles(name, featureName)
	}

	if (existsSync(queryPath)) {
		return console.log(
			pc.red(`Error: path ${pc.italic(`'${queryPath}'`)} has already existed`)
		)
	}

	if (existsSync(queryHookPath)) {
		console.log(
			pc.red(
				`Error: path ${pc.italic(`'${queryHookPath}'`)} has already existed`
			)
		)
	}

	generateAllQueryFiles(name, featureName)
}

export { queryAction }
