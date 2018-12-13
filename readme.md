<p align="center">
	<a href="https://travis-ci.org/eoscostarica/dmeetup">
		<img src="https://travis-ci.org/eoscostarica/dmeetup.svg?branch=master" alt="TravisCI">
	</a>
	<a href="http://standardjs.com">
		<img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="StandardJS">
	</a>
	<a href="https://git.io/col">
		<img src="https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg" alt="Collaborative Etiquette">
	</a>
	<a href="https://discord.gg/bBpQHym">
		<img src="https://img.shields.io/discord/447118387118735380.svg?logo=discord" alt="chat on Discord">
	</a>
	<a href="https://twitter.com/intent/follow?screen_name=eoscostarica">
		<img src="https://img.shields.io/twitter/follow/eoscostarica.svg?style=social&logo=twitter" alt="follow on Twitter">
	</a>
	<a href="#">
		<img src="https://img.shields.io/dub/l/vibe-d.svg" alt="MIT">
	</a>
</p>

<br/>
<p align="center">
	<img src="brand/logo/logo.svg" width="500px">
</p>

A decentralized platform and economic system that rewards community members for organizing and attending meetups and workshops. You will be able to build a reputation, get rewarded and charge a fee in crypto. 

It's a version of [Meetup](https://meetup.com) with token incentives for the members.  
A version of [Steemit](https://steemit.com) for meetups.

Users are incentivized to attend events and add value to meetup groups. In order to rsvp an event a user have to stake a certain ammound of EOS, the EOS of the people that don't show up gets distributed among the attendees and the meetup group balance.

The platform rewards the organizers, speakers and members through the MEETUP reputation token. 

Each meetup group is an idependent contract with it's own balance.

Companies can sponsor meetup by executign the sponsor_event action on the meetup group contract. 

By financially and reputationally incentivising the meetup groups organizers and active members of these communities we aim to create a platform that will accelerate knowledge sharing and community groups sustainability, where members are fairly rewarded for their efforts and contributions to the communities.

It is a 100% open-source and community-driven project and we welcome contributions of all sorts. There are many ways to help, from reporting issues, proposing features, improving documentation, contributing code, design/ux proposals, refining the economic model and helping us improve our community.

The main communication channels for organizing and collaborating are this repository and the [EOS Costa Rica Discord server](https://discord.gg/bBpQHym). Feel to join and ask as many questions you may have.

## Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Architecture](#architecture)
- [Development Setup](#development-setup)
  - [Global Dependencies](#global-dependencies)
  - [EOS Local Network](#eos-local-network)
- [Directory Structure](#directory-structure)
- [React Documentation](#react-documentation)
- [Continuous Integration Process](#continuous-integration-process)
- [Contributing](#contributing)
- [About EOS Costa Rica](#about-eos-costa-rica)
- [License](#license)
- [Contributors](#contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Architecture

This project is based on [EOS DApp Boilerplate](https://github.com/eoscostarica/eos-dapp-boilerplate).

<p align="center">
	<img src="docs/architecture.png" width="600">
</p>

## Development Setup

Basic knowledge about Docker, Docker Compose, EOS and NodeJS is required.

- Video tutorial [Docker Containers | Learn Docker Basics in 30 Mins](https://www.youtube.com/watch?v=0kwXLcwUw0Q)

### Global Dependencies

- Docker https://docs.docker.com/install/.  
  At least 10GB RAM (Docker -> Preferences -> Advanced -> Memory -> 10GB or above)

### EOS Local Network

Make sure you are running [EOSLOCAL](https://github.com/eoscostarica/eos-local).

## Directory Structure

```
.
├── docs/ .............................................. documentation files and media
├── contracts/ ......................................... eos smart contracts 
├── services/ .......................................... microservices
|   ├── demux/ ......................................... demux-js service
|   |   ├── utils/ ..................................... general utilities
|   |   ├── src/ ....................................... application biz logic 
|   |   ├── Dockerfile ................................. service image spec 
|   |   ├── pm2.config.js .............................. process specs for pm2
|   |   ├── tsconfig.json .............................. tslint config
|   |   ├── tslint.json ................................ code style rules
|   |   └── package.json ............................... service dependencies manifest
|   |
|   ├── postgres/ ...................................... postgres db service
|   |   └── migrations/ ................................ flyway migrations
|   |
|   ├── hasura/ ........................................ graphql endpoint service
|   |   └── migrations/ ................................ hasura migrations
|   |
|   └── frontend/ ...................................... reactjs frontend
|       ├── public/ .................................... static and public files
|       ├── src/ ....................................... reactjs views and components
|       ├── config-overrides.js ........................ configuration overrides for `cra`
|       ├── .env ....................................... environment variables
|       ├── .eslintrc .................................. code style rules
|       └── package.json ............................... service dependencies manifest
|   
├── docker-compose.yaml ................................ docker compose for local dev
├── contributing.md .................................... contributing guidelines
├── license ............................................ project license
├── makefile ........................................... make tasks manifest
├── readme.md .......................................... project documentation
├── netlify.toml ....................................... netlify config file
├── .travis.yml ........................................ travis ci config file
└── .editorconfig ...................................... common text editor configs
```

## React Documentation

The React client was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

See [full create-react-app documentation](docs/create-react-app.md)

**App Components**

- [react-app-rewired](https://github.com/timarney/react-app-rewired) for tweaking `create-react-app` configuration without ejecting
- [reach-router](https://github.com/reach/router) for a more accessible router.
- state management with [rematch](https://github.com/rematch/rematch) to use `redux` best practices without all the boilerplate.
- [grid-styled](https://github.com/jxnblk/grid-styled) for a flexbox grid built on top of `styled-components` and [system-components](https://github.com/jxnblk/styled-system/tree/master/system-components) for a consistent design system.

## Continuous Integration Process

We follow a continuous integration process based on Github flow that leverages the following tools:

- [TravisCI](https://travis-ci.org/) to run test and code style checks
- [Netlify](https://netlify.com) for continuous delivery to the stanging server and creation pull request specific environments for testing. awesome!
- [Code Factor](https://codefactor.io) for automated code quality reviews.

## Contributing

We use a Kanban-style board with built-in triggers to automatically move issues and pull requests across New Issues, To Do, In Progress and Done columns. That's were we prioritize the work. [Go to Project Board](https://github.com/eoscostarica/dmeetup/projects/1).

We follow EOS Costa Rica's Open Source Contributing Guidelines. https://developers.eoscostarica.io/docs/open-source-guidelines

Our weekly sync call is every Monday 7pm-8pm Costa Rica / Central Standard Time at [meet.eoscostarica.io](https:/meet.eoscostarica.io).

Please report bugs big and small by [opening an issue](https://github.com/eoscostarica/dmeetup/issues).

## About EOS Costa Rica

<p align="center">
	<a href="https://eoscostarica.io">
		<img src="https://cdn.rawgit.com/eoscostarica/assets/574d20a6/logos/eoscolors-transparent.png" width="300">
	</a>
</p>
<br/>

We challenge ourselves to provide the EOS platform with a strong geographical and political diversity by running the most robust EOS Block Producer possible from Costa Rica; We pledge to leverage our talent, experience, and sustainable internet resources to meet such an important challenge.

EOS Costa Rica supports the EOS.io community by maintaining and contributing to open source initiatives, meetups and workshops.

[eoscostarica.io](https://eoscostarica.io)

## License

MIT © [EOS Costa Rica](https://eoscostarica.io)  

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/391270?v=4" width="100px;"/><br /><sub><b>Gabo Esquivel</b></sub>](https://gaboesquivel.com)<br />[🤔](#ideas-gaboesquivel "Ideas, Planning, & Feedback") [📖](https://github.com/eoscostarica/dmeetup/commits?author=gaboesquivel "Documentation") [💻](https://github.com/eoscostarica/dmeetup/commits?author=gaboesquivel "Code") [👀](#review-gaboesquivel "Reviewed Pull Requests") [📹](#video-gaboesquivel "Videos") [📢](#talk-gaboesquivel "Talks") | [<img src="https://avatars1.githubusercontent.com/u/1179619?v=4" width="100px;"/><br /><sub><b>Jorge Murillo</b></sub>](https://github.com/murillojorge)<br />[🤔](#ideas-murillojorge "Ideas, Planning, & Feedback") [📖](https://github.com/eoscostarica/dmeetup/commits?author=murillojorge "Documentation") [🎨](#design-murillojorge "Design") [💻](https://github.com/eoscostarica/dmeetup/commits?author=murillojorge "Code") [👀](#review-murillojorge "Reviewed Pull Requests") | [<img src="https://avatars2.githubusercontent.com/u/3157426?v=4" width="100px;"/><br /><sub><b>Kevin Wolf</b></sub>](https://github.com/kevinwolfcr)<br />[🤔](#ideas-kevinwolfcr "Ideas, Planning, & Feedback") [📖](https://github.com/eoscostarica/dmeetup/commits?author=kevinwolfcr "Documentation") [💻](https://github.com/eoscostarica/dmeetup/commits?author=kevinwolfcr "Code") [👀](#review-kevinwolfcr "Reviewed Pull Requests") | [<img src="https://avatars0.githubusercontent.com/u/5632966?v=4" width="100px;"/><br /><sub><b>Xavier Fernandez</b></sub>](https://github.com/xavier506)<br />[🤔](#ideas-xavier506 "Ideas, Planning, & Feedback") [📝](#blog-xavier506 "Blogposts") [📢](#talk-xavier506 "Talks") [🚇](#infra-xavier506 "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars2.githubusercontent.com/u/40245170?v=4" width="100px;"/><br /><sub><b>Edgar Fernandez</b></sub>](http://www.eoscostarica.io)<br />[🤔](#ideas-edgar-eoscostarica "Ideas, Planning, & Feedback") [📝](#blog-edgar-eoscostarica "Blogposts") [📢](#talk-edgar-eoscostarica "Talks") | [<img src="https://avatars2.githubusercontent.com/u/13205620?v=4" width="100px;"/><br /><sub><b>Rubén Abarca Navarro</b></sub>](https://github.com/rubenabix)<br />[🤔](#ideas-rubenabix "Ideas, Planning, & Feedback") [👀](#review-rubenabix "Reviewed Pull Requests") | [<img src="https://avatars1.githubusercontent.com/u/1449049?v=4" width="100px;"/><br /><sub><b>Friedger Müffke</b></sub>](https://github.com/friedger)<br />[💻](https://github.com/eoscostarica/dmeetup/commits?author=friedger "Code") [🐛](https://github.com/eoscostarica/dmeetup/issues?q=author%3Afriedger "Bug reports") [💡](#example-friedger "Examples") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
