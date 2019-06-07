<p align="center">
	<a href="https://git.io/col">
		<img src="https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg" alt="Collaborative Etiquette">
	</a>
	<a href="https://twitter.com/intent/follow?screen_name=puravidaeos">
		<img src="https://img.shields.io/twitter/follow/puravidaeos.svg?style=social&logo=twitter" alt="follow on Twitter">
	</a>
	<a href="#">
		<img src="https://img.shields.io/dub/l/vibe-d.svg" alt="MIT">
	</a>
</p>

<br/>
<p align="center">
	<img src="brand/logo/logo.svg" width="500px">
</p>

DMeetup is decentralized autonomous community and economic system that rewards community members for organizing and attending meetups and workshops. 

By financially and reputationally incentivising the meetup groups organizers and active members of these communities we aim to create a platform that will accelerate knowledge sharing and community groups sustainability, where members are fairly rewarded for their efforts and contributions to the communities.

Users are incentivized to attend events and add value to meetup groups. In order to rsvp an event a user have to stake  EOS and you can get it back the day of the event if you attend. The EOS of the people that don't show up gets distributed among the attendees and the meetup group balance.

You will be able to build a reputation, get rewarded and charge a fee in crypto. The platform rewards the organizers, speakers and active members through the MEETUP reputation token. 

DMeetup a 100% open-source and community-driven project and we welcome contributions of all sorts. There are many ways to help, from reporting issues, proposing features, improving documentation, contributing code, design/ux proposals, refining the economic model and helping us improve our community. People who contribute to the Meetup project will share the DAC profits in proportion to their contributions.

Each meetup group is an independent DAC with it's own balance.

Companies can sponsor meetups events and groups with EOS and get publicity on the event and group.

The profits of each meetup group gets distributed among all members proportionally to their contributions to the group.

The value of their contributions will be calculated based on the activity and their DMeetup reputation within a period of time.

## Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Development Setup](#development-setup)
  - [Global Dependencies](#global-dependencies)
- [Directory Structure](#directory-structure)
- [React Documentation](#react-documentation)
- [Continuous Integration Process](#continuous-integration-process)
- [Contributing](#contributing)
- [About EOS Costa Rica](#about-eos-costa-rica)
- [License](#license)
- [Contributors](#contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Development Setup

Basic knowledge about Docker, Docker Compose, EOS and NodeJS is required.

- Video tutorial [Docker Containers | Learn Docker Basics in 30 Mins](https://www.youtube.com/watch?v=0kwXLcwUw0Q)

### Global Dependencies

- Docker https://docs.docker.com/install/.  
  At least 10GB RAM (Docker -> Preferences -> Advanced -> Memory -> 10GB or above)

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

We use a Kanban-style board with built-in triggers to automatically move issues and pull requests across New Issues, To Do, In Progress and Done columns. That's were we prioritize the work. [Go to Project Board](https://github.com/puravidaeos/dmeetup/projects/1).

We follow EOS Costa Rica's Open Source Contributing Guidelines. https://developers.eoscostarica.io/docs/open-source-guidelines

Please report bugs big and small by [opening an issue](https://github.com/puravidaeos/dmeetup/issues).

## License

MIT © [Pura Vida EOS](https://puravidaeos.one)  

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/391270?v=4" width="100px;"/><br /><sub><b>Gabo Esquivel</b></sub>](https://gaboesquivel.com)<br />[🤔](#ideas-gaboesquivel "Ideas, Planning, & Feedback") [📖](https://github.com/eoscostarica/dmeetup/commits?author=gaboesquivel "Documentation") [💻](https://github.com/eoscostarica/dmeetup/commits?author=gaboesquivel "Code") [👀](#review-gaboesquivel "Reviewed Pull Requests") [📹](#video-gaboesquivel "Videos") [📢](#talk-gaboesquivel "Talks") | [<img src="https://avatars1.githubusercontent.com/u/1179619?v=4" width="100px;"/><br /><sub><b>Jorge Murillo</b></sub>](https://github.com/murillojorge)<br />[🤔](#ideas-murillojorge "Ideas, Planning, & Feedback") [📖](https://github.com/eoscostarica/dmeetup/commits?author=murillojorge "Documentation") [🎨](#design-murillojorge "Design") [💻](https://github.com/eoscostarica/dmeetup/commits?author=murillojorge "Code") [👀](#review-murillojorge "Reviewed Pull Requests") | [<img src="https://avatars2.githubusercontent.com/u/3157426?v=4" width="100px;"/><br /><sub><b>Kevin Wolf</b></sub>](https://github.com/kevinwolfcr)<br />[🤔](#ideas-kevinwolfcr "Ideas, Planning, & Feedback") [📖](https://github.com/eoscostarica/dmeetup/commits?author=kevinwolfcr "Documentation") [💻](https://github.com/eoscostarica/dmeetup/commits?author=kevinwolfcr "Code") [👀](#review-kevinwolfcr "Reviewed Pull Requests") | [<img src="https://avatars0.githubusercontent.com/u/5632966?v=4" width="100px;"/><br /><sub><b>Xavier Fernandez</b></sub>](https://github.com/xavier506)<br />[🤔](#ideas-xavier506 "Ideas, Planning, & Feedback") [📝](#blog-xavier506 "Blogposts") [📢](#talk-xavier506 "Talks") [🚇](#infra-xavier506 "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars2.githubusercontent.com/u/40245170?v=4" width="100px;"/><br /><sub><b>Edgar Fernandez</b></sub>](http://www.eoscostarica.io)<br />[🤔](#ideas-edgar-eoscostarica "Ideas, Planning, & Feedback") [📝](#blog-edgar-eoscostarica "Blogposts") [📢](#talk-edgar-eoscostarica "Talks") | [<img src="https://avatars2.githubusercontent.com/u/13205620?v=4" width="100px;"/><br /><sub><b>Rubén Abarca Navarro</b></sub>](https://github.com/rubenabix)<br />[🤔](#ideas-rubenabix "Ideas, Planning, & Feedback") [👀](#review-rubenabix "Reviewed Pull Requests") | [<img src="https://avatars1.githubusercontent.com/u/1449049?v=4" width="100px;"/><br /><sub><b>Friedger Müffke</b></sub>](https://github.com/friedger)<br />[💻](https://github.com/eoscostarica/dmeetup/commits?author=friedger "Code") [🐛](https://github.com/eoscostarica/dmeetup/issues?q=author%3Afriedger "Bug reports") [💡](#example-friedger "Examples") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
