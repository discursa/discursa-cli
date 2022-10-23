import { getCapitalisedText } from "../../../../utils"

const queryTemplate = (name, featureName) => {
	const capitalisedName = getCapitalisedText(name)
	const dbModelName = featureName.substring(0, featureName.length - 1)

	const template = `import { z } from "zod"
import db from "db"

const ${capitalisedName} = z.object({
	id: z.string()
})

const ${name} = async (input: z.infer<typeof ${capitalisedName}>) => {
	const data = ${capitalisedName}.parse(input)

	const ${dbModelName} = await db.${dbModelName}.findFirst({
		where: {
			id: data.id
		}
	})
}

export default ${name}
`

	return template
}

export { queryTemplate }
