import { getCapitalisedText } from "../../../../utils"

const getComponentTypes = (name: string) => {
	const capitalisedName = getCapitalisedText(name)

	const template = `interface ${capitalisedName}Props {}

export type { ${capitalisedName}Props }

`

	return template
}

export { getComponentTypes }
