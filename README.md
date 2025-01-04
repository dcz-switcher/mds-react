# EXPERIMENTATION

A React components library


## Installation

```
npm install git://github.com/dcz-switcher/mds-react#v0.3.0
```
> ### Tips
> - set the latest version after #
> - don't forget the "v" before version : #v0.3.0 (not #0.3.0)

## Update
1. set the new version in package.json (don't forget the "v")
2. use the update command ```npm update mds-react```

## Usage

```
import {Button, Icon} from "mds-react"
```

# New version workflow
1. don't forget to add export * in index.ts in components folder, if needed
2. update the version in package.js
3. build with ```npm run build```
4. commit & push
5. wait for the Storybook build on Github pages (look in "Actions" section)
6. create a new Tag with the same version as package.json


## Sources
Main source: https://medium.com/simform-engineering/building-a-component-library-with-react-typescript-and-storybook-a-comprehensive-guide-ba189accdaf5

other sources
https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe#building-your-library

https://blog.logrocket.com/how-to-build-component-library-react-typescript/

