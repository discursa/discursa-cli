import pc from "picocolors"
import { existsSync } from "fs"
import { generateAllQueryFiles } from "../generators"

const queryAction = (name: string, featureName: string) => {
	const featureDir = `./app/features/${featureName}`

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

	console.log(pc.blue(pc.bold(`Generating query files...`)))

	generateAllQueryFiles(name, featureName)
}

export { queryAction }
