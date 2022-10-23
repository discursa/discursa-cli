import { getCapitalisedText } from "../../../../utils"

const getComponentStyles = (name) => {
	const capitilisedName = getCapitalisedText(name)

	const template = `@tailwind components;
@tailwind utilities;

.${capitilisedName} {}

  `

	return template
}

export { getComponentStyles }
