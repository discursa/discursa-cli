import { generateDir } from "../../helpers"
import { generateComponent } from "./component"
import { generateComponentStyles } from "./styles"
import { generateComponentTypes } from "./types"

const generateAllComponentFiled = (name, path) => {
	generateDir(name, path)
	generateComponentStyles(name, path)
	generateComponentTypes(name, path)
	generateComponent(name, path)
}

export {
	generateComponent,
	generateComponentStyles,
	generateComponentTypes,
	generateAllComponentFiled,
}
