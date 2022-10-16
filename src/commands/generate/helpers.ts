import { mkdirSync } from "fs"
import { getCapitalisedText } from "../../utils"

const generateDir = (name: string, path: string) => {
	const capitalisedName = getCapitalisedText(name)
	const dirPath = `${path}/${capitalisedName}`

	mkdirSync(dirPath, { recursive: true })
}

const getComponentPath = (name: string, path: string) => {
	const capitalisedName = getCapitalisedText(name)
	const componentPath = `${path}/${capitalisedName}/${capitalisedName}.tsx`

	return componentPath
}

const getComponentStylesPath = (name: string, path: string) => {
	const capitalisedName = getCapitalisedText(name)
	const stylesPath = `${path}/${capitalisedName}/${capitalisedName}.module.scss`

	return stylesPath
}

const getComponentTypesPath = (name: string, path: string) => {
	const capitalisedName = getCapitalisedText(name)
	const typesPath = `${path}/${capitalisedName}/${capitalisedName}.types.ts`

	return typesPath
}

export {
	getComponentPath,
	getComponentStylesPath,
	getComponentTypesPath,
	generateDir,
}
