import { getCapitalisedText } from "../../../../utils"
import { getQueryPath } from "../../helpers"

const queryTemplate = (name: string, featureName: string) => {
	const capitalisedName = getCapitalisedText(name)
	const queryPath = getQueryPath(name, featureName)
	const dbModelName = featureName.substring(0, featureName.length - 1)

	const template = `import { z } from "zod"
import ${name} from ${queryPath}
import db from "db"

const ${capitalisedName} = z.object({
	id: z.string()
})

const name = async (input: z.infer<typeof ${capitalisedName}>) => {
	const data = ${capitalisedName}.parse(input)

	const ${dbModelName} = await db.${dbModelName}.findFirst({
		where: {
			id: data.id
		}
	})
}
`

	return template
}

export { queryTemplate }
