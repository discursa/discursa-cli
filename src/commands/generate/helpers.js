import { mkdirSync } from "fs"
import { getCapitalisedText } from "../../utils"
import { featureArgument } from "./mutation/arguments"

const generateDir = (name, path) => {
	const capitalisedName = getCapitalisedText(name)
	const dirPath = `${path}/${capitalisedName}`

	mkdirSync(dirPath, { recursive: true })
}

const getComponentPath = (name, path) => {
	const capitalisedName = getCapitalisedText(name)
	const componentPath = `${path}/${capitalisedName}/${capitalisedName}.tsx`

	return componentPath
}

const getComponentStylesPath = (name, path) => {
	const capitalisedName = getCapitalisedText(name)
	const stylesPath = `${path}/${capitalisedName}/${capitalisedName}.module.scss`

	return stylesPath
}

const getComponentTypesPath = (name, path) => {
	const capitalisedName = getCapitalisedText(name)
	const typesPath = `${path}/${capitalisedName}/${capitalisedName}.types.ts`

	return typesPath
}

const getComponentDirPath = (name, path) => {
	const capitalisedName = getCapitalisedText(name)
	const componentDirPath = `${path}/${capitalisedName}`

	return componentDirPath
}

const getQueryPath = (name, featureName) => {
	const queryPath = `./app/features/${featureName}/api/queries/${name}.ts`

	return queryPath
}

const getHookName = (name) => {
	const capitalisedName = getCapitalisedText(name)
	const hookName = `use${capitalisedName}`

	return hookName
}

const getQueryHookName = (name) => {
	const queryHooksName = `use${name.slice(3)}Query.ts`

	return queryHooksName
}

const getQueryHookPath = (name, featureName) => {
	const queryHookName = getQueryHookName(name)
	const queryHookPath = `./app/features/${featureName}/hooks/${queryHookName}`

	return queryHookPath
}

const getMutationPath = (name, featureName) => {
	const mutationPath = `app/features/${featureName}/api/mutations/${name}.ts`

	return mutationPath
}

const getMutationHookPath = (name, featureName) => {
	const mutationHookName = getHookName(name)
	const mutationHookPath = `app/features/${featureName}/hooks/${mutationHookName}`

	return mutationHookPath
}

const getDbModelName = (featureName) => {
	const dbModelName = featureName.substring(0, featureName.length - 1)

	return dbModelName
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
	getMutationPath,
	getMutationHookPath,
	getDbModelName,
}
