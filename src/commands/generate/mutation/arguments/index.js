import { Argument } from "commander"

const featureArgument = new Argument(
	"<featureName>",
	"name of feature where mutation will be created"
)

featureArgument.argRequired()

const typeArgument = new Argument(
	"[type]",
	"generates a certain type of mutation"
)

typeArgument
	.default("create")
	.choices(["create", "update", "delete"])
	.argOptional()

export { featureArgument, typeArgument }
