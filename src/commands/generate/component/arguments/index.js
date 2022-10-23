import { Argument } from "commander"

const pathArgument = new Argument("[path]", "path for the future feature")

pathArgument.default("./app/common/components")

export { pathArgument }
