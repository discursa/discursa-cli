import { getQueryHookName } from "../../helpers"

const queryHookTemplate = (name: string, fatureName: string) => {
	const queryHookName = getQueryHookName(name)

	const template = `import { useQuery } from "@blitzjs/rpc"
import ${name} from "../api/queries/${name}"

const ${queryHookName} = (${fatureName}Id: string) => {
	return useQuery(${name}, {
		id: ${fatureName}Id
	})
}

`

	return template
}

export { queryHookTemplate }
