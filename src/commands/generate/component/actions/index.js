import { existsSync } from "fs"
import pc from "picocolors"
import { getComponentDirPath } from "../../helpers"
import { generateAllComponentFiled } from "../generators"

const componentAction = (name, path, options) => {
	const componentDirPath = getComponentDirPath(name, path)

	console.log(pc.blue(pc.bold(`Generating component files in ${path}...`)))

	if (options.force) {
		return generateAllComponentFiled(name, path)
	}

	if (existsSync(componentDirPath)) {
		return console.log(
			pc.red(
				`Error: path ${pc.italic(`'${componentDirPath}'`)} has already existed`
			)
		)
	}

	generateAllComponentFiled(name, path)
}

export { componentAction }
