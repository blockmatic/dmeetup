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

<p align="center">
	<a href="https://eoscostarica.io">
		<img src="https://github.com/eoscostarica/assets/blob/master/eoscolors-transparent.png" width="300">
	</a>
</p>

# ÐMeetup

Decentralized version of Meetup with token incentives for the community members.  
Steemit for on-site and online events and workshops.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Contents

- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Bug Reporting](#bug-reporting)
- [Features](#features)
  - [Phase 1](#phase-1)
  - [Phase 2](#phase-2)
- [Technology](#technology)
  - [Why EOS ?](#why-eos-)
  - [EOS.io Application Stack](#eosio-application-stack)
  - [Building EOS DApps](#building-eos-dapps)
  - [EOS Documentation](#eos-documentation)
  - [EOS Storage](#eos-storage)
  - [IPFS Documentation](#ipfs-documentation)
  - [React Documentation](#react-documentation)
  - [About EOS Costa Rica](#about-eos-costa-rica)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started

dmeetup is an EOS and IPFS based decentralized application that allows people to publish on-site and online meetup events and workshops. You will be able to build a reputation and get rewarded in crypto. The platform will also allow you to charge in crypto for your workshops. We envision the rep system as something similar to steemit. When this is ready we would like to perform an AirDrop on the EOS blockchain.

It is a 100% open-source and community-driven project and we welcome contributions of all sorts. There are many ways to help, from reporting issues, improving documentation, contributing code, design/ux proposal, economic modeling and helping us improve our community.

The main communication channels for organizing and collaborating are this repository and the [EOS Costa Rica Discord server](https://discord.gg/bBpQHym). Feel to join and ask as many questions you may have.

[![Introduction to Blockchain](https://monosnap.com/image/GOx4Jv5DSd1H4cl1WDAftR5X5DMQI5.png)](https://www.youtube.com/watch?v=sYAktmG1NuA)

## Contributing

We use a Kanban-style board with built-in triggers to automatically move issues and pull requests across To do, In progress and Done columns. That's were we prioritize the work. [Go to Project Board](https://github.com/eoscostarica/dmeetup/projects/1).

We follow the [open source collaborative ettiquete](https://github.com/rstacruz/collaborative-etiquette/blob/master/README.md#top) and the [standardjs code style](https://standardjs.com).

Read the [contributing guidelines](CONTRIBUTING.md) for details.

There a many reasons to get involved in an open source project like this one. If haven't participated in an open source project before and you are still not sure whether you should, this is presentation is for you. [eoscostarica-oss.pdf](https://gaboesquivel.com/slides/eoscostarica-oss.pdf)

## Bug Reporting

Please report bugs big and small by [opening an issue](https://github.com/eoscostarica/dmeetup/issues). No possible bug report is too small.

## Features

### Phase 1

- Accounts
- User posts a meetup event and tags it
- User makes a reservation to the meetup event
- User votes up the meetup ( reputation )
- Events feed with filters

### Phase 2

- User pays to rsvp the meetup
- Token rewards for the speakers/organizers

# Technology

- EOS
- IPFS
- React.js
- Docker for the dev environment

## Why EOS ?

[![Why EOS](https://monosnap.com/image/CDcIfufeYs0rJPH2viNkCJSPV6bY4O.png)](https://www.youtube.com/watch?v=3kqkTYqTvDA)

![EOS Network](https://github.com/eoscostarica/dmeetup/blob/master/docs/img/eos-network.jpg)

## EOS.io Application Stack

![](https://github.com/eoscostarica/dmeetup/blob/master/docs/img/eos-application-stack.png)  
source https://steemit.com/eos/@eosio/introducing-eos-io-application-stack

## Building EOS DApps

- [Webinar: Building Distributed Apps With EOS.IO Blockchain](https://objectcomputing.com/resources/events/webinars/building-apps-with-eos/webinar-recording)

## EOS Documentation & Resources

- https://github.com/EOSIO/eos/wiki
- https://developers.eos.io/
- https://github.com/EOS-Nation/Awesome-EOS
- [EOS Educational Series on YouTube](https://www.youtube.com/channel/UClgHiX4W1yxyohrif0gEllA)

## EOS Storage

- [5 Reasons Why EOS Storage Will Change Data Storage Forever](https://www.youtube.com/watch?v=7mFzb5SqS9U)
- [EOS.IO Storage White Paper](https://steemit.com/eos/@eosio/eos-io-storage-white-paper-now-available)

EOS Storage will allow you to host dApps thru EOS APIs, this hasn't been implemented yet, though.
In the mean time we are going to have use IPFS directly.

- https://ipfs.io/docs/
- https://github.com/ipfs/awesome-ipfs

## IPFS Documentation

- https://github.com/ipfs/ipfs#how-ipfs-work
- https://ipfs.io/docs/
- https://beta.docs.ipfs.io
- https://github.com/ipfs/js-ipfs

[![IFPS Simply Explained](https://monosnap.com/image/PW76DIRPGLOmtWyPEiXK2NvsDHiR4x.png)](https://www.youtube.com/watch?v=5Uj6uR3fp-U)

## React Documentation

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[docs/create-react-app.md](docs/create-react-app.md)

## Core Team

- Project Lead [@gaboesquivel](https://github.com/gaboesquivel).
- ÐApp Architect [@kevin-wolf](https://github.com/kevin-wolf).

## About EOS Costa Rica

EOS Blockchain is aiming to become a decentralized operating system which can support large-scale decentralized applications.

EOS Costa Rica supports the global and local open source efforts and development communities by maintaining and contribute to open source initiatives, meetups and workshops.

We challenge ourselves to provide the EOS platform with a strong geographical and political diversity by running the most robust EOS Block Producer possible from Costa Rica; We pledge to leverage our talent, experience, and sustainable internet resources to meet such an important challenge.

[eoscostarica.com](https://eoscostarica.com)

## License

MIT © [EOS Costa Rica](https://eoscostarica.com)  
See LICENSE for more info
