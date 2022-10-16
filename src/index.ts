#! /usr/bin/env node

import { Command } from "commander"
import { generateCommand } from "./commands"

const cli = new Command()

cli
	.name("discursa")
	.description("CLI for discursa")
	.version("0.0.1")
	.addCommand(generateCommand)

cli.parse()
