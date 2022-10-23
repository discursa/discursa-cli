import { Argument } from "commander"

const featureNameArgument = new Argument(
	"<featureName>",
	"name of feature where query will be created"
)

featureNameArgument.argRequired()

export { featureNameArgument }
