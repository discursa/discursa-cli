import { getCapitalisedText } from "../../../../utils"

const getComponentStyles = (name: string) => {
	const capitilisedName = getCapitalisedText(name)

	const template = `@tailwind components;
@tailwind utilities;

.${capitilisedName} {}

  `

	return template
}

export { getComponentStyles }
