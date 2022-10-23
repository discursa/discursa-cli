import pc from "picocolors"
import { open, writeFile } from "fs"
import { getQueryPath } from "../../../helpers"
import { queryTemplate } from "../../templates/query"

const queryGenerator = (name, featureName) => {
	const queryPath = getQueryPath(name, featureName)
	const template = queryTemplate(name, featureName)

	open(queryPath, "w+", function (error) {
		if (error) {
			console.log(error)
		}

		console.log(pc.white(`Writing in ${pc.italic(queryPath)}`))
	})

	writeFile(queryPath, template, function (error) {
		if (error) {
			console.log(error)
		}
	})
}

export { queryGenerator }
