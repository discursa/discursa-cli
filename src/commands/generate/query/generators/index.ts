import { queryHookGenerator } from "./hook"
import { queryGenerator } from "./query"

const generateAllQueryFiles = (name: string, featureName: string) => {
	queryHookGenerator(name, featureName)
	queryGenerator(name, featureName)
}

export { queryHookGenerator, queryGenerator, generateAllQueryFiles }
