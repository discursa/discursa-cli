import pc from "picocolors"
import { writeFile, open } from "fs"
import { getComponentStylesPath } from "../../../helpers"
import { getComponentStyles } from "../../templates/styles"

const generateComponentStyles = (name, path) => {
	const stylesPath = getComponentStylesPath(name, path)
	const template = getComponentStyles(name)

	open(stylesPath, "w+", function (error) {
		if (error) {
			console.log(error)
		}

		console.log(pc.white(`Writting '${pc.italic(stylesPath)}'...`))
	})

	writeFile(stylesPath, template, function (error) {
		if (error) {
			console.log(error)
		}
	})
}

export { generateComponentStyles }
