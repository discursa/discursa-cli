import { writeFile, open } from "fs"
import pc from "picocolors"
import { getComponentPath } from "../../../helpers"
import { getComponent } from "../../templates/component"

const generateComponent = (name, path) => {
	const componentPath = getComponentPath(name, path)
	const template = getComponent(name)

	open(componentPath, "w+", function (error) {
		if (error) {
			console.log(error)
		}

		console.log(pc.white(`Writing '${pc.italic(componentPath)}'...`))
	})

	writeFile(componentPath, template, function (error) {
		if (error) {
			console.log(error)
		}
	})
}

export { generateComponent }
