import pc from "picocolors"
import { writeFile, open } from "fs"
import { getComponentTypesPath } from "../../../helpers"
import { getComponentTypes } from "../../templates/types"

const generateComponentTypes = (name: string, path: string) => {
	const typesPath = getComponentTypesPath(name, path)
	const template = getComponentTypes(name)

	open(typesPath, "w+", function (error) {
		if (error) {
			console.log(error)
		}

		console.log(pc.white(`Writing '${pc.italic(typesPath)}'...`))
	})

	writeFile(typesPath, template, function (error) {
		if (error) {
			console.log(error)
		}
	})
}

export { generateComponentTypes }
