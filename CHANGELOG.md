# @ctx-core/fetch-undici

## 1.2.15

### Patch Changes

- package.json: exports: update
- fix: package.json: exports: + default
- Updated dependencies
- Updated dependencies
  - @ctx-core/app_version@16.0.15
  - @ctx-core/dom@11.1.10
  - @ctx-core/error@11.4.2
  - @ctx-core/fetch@12.2.8
  - @ctx-core/fibonacci@8.0.39
  - @ctx-core/object@22.1.4
  - @ctx-core/package@9.1.29
  - @ctx-core/sleep@8.0.37

## 1.2.14

### Patch Changes

- update dependencies

## 1.2.13

### Patch Changes

- ddd775862: undici: ^4.16.0 -> ^5.0.0

## 1.2.12

### Patch Changes

- update dependencies
- Updated dependencies
  - @ctx-core/app_version@16.0.12
  - @ctx-core/dom@11.1.9
  - @ctx-core/error@11.4.1
  - @ctx-core/object@22.1.3

## 1.2.11

### Patch Changes

- undici: ^4.15.1 -> ^4.16.0

## 1.2.10

### Patch Changes

- update dependencies
- Updated dependencies
  - @ctx-core/app_version@16.0.11

## 1.2.9

### Patch Changes

- update dependencies

## 1.2.8

### Patch Changes

- update dependencies

## 1.2.7

### Patch Changes

- fix: response*pair*: no Content-Type header: text response

## 1.2.6

### Patch Changes

- fix: response*pair*: application/json: text/JSON.parse

## 1.2.5

### Patch Changes

- from @ctx-core/fetch

  - response*pair*:

    fix: application/json: JSON.parse

    - try/catch around JSON.parse: console.error(text)

  - fix: response*pair*: Content-Type headers is falsy

## 1.2.4

### Patch Changes

- fix: headers\_: server side
- Updated dependencies
  - @ctx-core/fetch@12.2.3

## 1.2.3

### Patch Changes

- update dependencies

## 1.2.2

### Patch Changes

- update dependencies

## 1.2.1

### Patch Changes

- fetch*response_pair*: ∈ fetch_response_pair\_\_
- Updated dependencies
- Updated dependencies
  - @ctx-core/fetch@12.2.0

## 1.2.0

### Minor Changes

- - fetch*response_pair*,response*pair*

### Patch Changes

- Updated dependencies
  - @ctx-core/fetch@12.1.0

## 1.1.8

### Patch Changes

- undici: ^4.13.0 -> ^4.14.1

## 1.1.7

### Patch Changes

- fix: .gitignore: + node_modules
  - @ctx-core/app_version@16.0.6

## 1.1.6

### Patch Changes

- update dependencies
- Updated dependencies
  - @ctx-core/app_version@16.0.5

## 1.1.5

### Patch Changes

- update dependencies
- Updated dependencies
  - @ctx-core/app_version@16.0.3
  - @ctx-core/dom@11.1.6
  - @ctx-core/error@11.3.1
  - @ctx-core/fetch@12.0.4
  - @ctx-core/package@9.1.27

## 1.1.4

### Patch Changes

- update dependencies

## 1.1.3

### Patch Changes

- update dependencies

## 1.1.2

### Patch Changes

- 9c361b0c8: update dependencies

## 1.1.1

### Patch Changes

- Updated dependencies
  - @ctx-core/app_version@16.0.0

## 1.1.0

### Minor Changes

- - raw_fetch

### Patch Changes

- use fetch instead of safe_fetch
- Updated dependencies
  - @ctx-core/fetch@12.0.3

## 1.0.3

### Patch Changes

- - fix: import

## 1.0.2

### Patch Changes

- Use types & browser modules from @ctx-core/fetch
- Updated dependencies
  - @ctx-core/fetch@12.0.0

## 1.0.1

### Patch Changes

- dom types: fetch,Request,Response
- Updated dependencies
  - @ctx-core/fibonacci@8.0.38

## 1.0.0

### Major Changes

- initial version of isomorphic fetch using undici
