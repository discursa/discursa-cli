import { getCapitalisedText } from "../../../../utils"

const getComponent = (name) => {
	const capitalisedName = getCapitalisedText(name)

	const template = `import { FC } from "react"
import type { ${capitalisedName}Props } from "./${capitalisedName}.types"
import styles from "./${capitalisedName}.module.scss"

const ${capitalisedName}: FC<${capitalisedName}Props> = (props) => {
  const {} = props

  return (
    <div className={styles.${capitalisedName}}>
      <p>${capitalisedName}</p>
    </div>
  )
}

`

	return template
}

export { getComponent }
