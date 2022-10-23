import { queryHookGenerator } from "./hook"
import { queryGenerator } from "./query"

const generateAllQueryFiles = (name, featureName) => {
	queryHookGenerator(name, featureName)
	queryGenerator(name, featureName)
}

export { queryHookGenerator, queryGenerator, generateAllQueryFiles }
