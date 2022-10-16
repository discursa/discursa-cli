# Discursa CLI

CLI for more comfortable development

## Commands

---

### generate (alias g)

Save your time by generating boilerplate code

```shell
yarn discursa generate <type>
```

**Description**    | **Description**  |
---                |              --- |
`component <name>` | Generate a component component |

#### generate component

Generate a component

```shell
yarn discursa generate component <name> [path]
```

**Arguments and options**  | **Description**  |
---                        |              --- |
`name`                     | Name of the component |
`path`                     | Path of the component (default: `app/common/components`) |

##### Example

Generation a button component:

```shell
yarn discursa generate component Button

Generation component files in './app/common/components'...
Writing './app/common/components/Button/Button.module.scss'
Writing './app/common/components/Button/Button.types.ts'
Writing './app/common/components/Button/Button.tsx'
```

## Additional info

- 📫 Send feedback: [@onelil05](https://twitter.com/onelil05)
