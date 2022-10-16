import pc from "picocolors"
import { open, writeFile } from "fs"
import { getQueryHookPath } from "../../../helpers"
import { queryHookTemplate } from "../../templates/hook"

const queryHookGenerator = (name: string, featureName: string) => {
	const queryHookPath = getQueryHookPath(name, featureName)
	const template = queryHookTemplate(name, featureName)

	open(queryHookPath, "w+", function (error) {
		if (error) {
			console.log(error)
		}

		console.log(pc.white(`Writing in ${pc.italic(queryHookPath)}...`))
	})

	writeFile(queryHookPath, template, function (error) {
		if (error) {
			console.log(error)
		}
	})
}

export { queryHookGenerator }
