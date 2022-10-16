import pc from "picocolors"
import { generateAllComponentFiled } from "../generators"

const componentAction = (name: string, path: string) => {
	console.log(pc.blue(pc.bold(`Generating component files in ${path}...`)))

	generateAllComponentFiled(name, path)
}

export { componentAction }
