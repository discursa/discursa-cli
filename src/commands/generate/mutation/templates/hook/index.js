import { getCapitalisedText } from "../../../../../utils"
import { getDbModelName } from "../../../helpers"

const createMutationHookTemplate = (name, featureName) => {
	const capitalisedName = getCapitalisedText(name)
	const dbModelName = getDbModelName(featureName)

	const template = `import db from "db"
import { z } from "zod"
import { Ctx } from "blitz"

const ${capitalisedName} = z.object({
	name: z.string()
})

const ${name} = async (
	input: z.infer<typeof ${capitalisedName}>,
	ctx: Ctx
) => {
	const data = ${capitalisedName}.parse(input)

	ctx.session.$authorised()

	const ${dbModelName} = await db.${dbModelName}.create({
		data: data
	})
}

export default ${name}
`

	return template
}
