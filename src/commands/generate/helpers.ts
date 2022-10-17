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

const getComponentDirPath = (name: string, path: string) => {
	const capitalisedName = getCapitalisedText(name)
	const componentDirPath = `${path}/${capitalisedName}`

	return componentDirPath
}

const getQueryPath = (name: string, featureName: string) => {
	const queryPath = `./app/${featureName}/api/queries/${name}.ts`

	return queryPath
}

const getQueryHookName = (name: string) => {
	const queryHooksName = `use${name.slice(3)}Query`

	return queryHooksName
}

const getQueryHookPath = (name: string, featureName: string) => {
	const queryHookName = getQueryHookName(name)
	const queryHookPath = `./app/${featureName}/hooks/${queryHookName}`

	return queryHookPath
}

export {
	getComponentPath,
	getComponentStylesPath,
	getComponentTypesPath,
	getComponentDirPath,
	generateDir,
	getQueryPath,
	getQueryHookName,
	getQueryHookPath,
}
