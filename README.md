# Discursa CLI

CLI for more comfortable development

## Commands

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

#### generate query

Generate a query

```shell
yarn discursa generate query <name> <featureName>
```

**Arguments and options**  | **Description**  |
---                        |              --- |
`name`                     | Name of the query |
`featureName`              | Name of feature where query will be generated |

| Attention! name of query must start from `get` word

##### Example

Generation a `getDiscussion` query:

```shell
yarn discursa generate query getDiscussion discussions

Generation query files in './app/features/discussions'...
Writing './app/features/discussions/api/queries/getDiscussion.ts'
Writing './app/features/discussions/hoooks/useDiscussionQuery.ts'
```

## Additional info

- 📫 Send feedback: [@onelil05](https://twitter.com/onelil05)
