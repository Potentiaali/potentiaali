# Kumpulan potentiaali

This repository contains the source code for **Kumpulan potentiaali** webapp, located at https://potentiaali.com

## Development instructions

1. Clone the repo
2. Install _Yarn_ if not installed
3. Run `yarn install`
4. Run `yarn start`

## Build instructions

1. Clone the repo
2. Install _Yarn_ if not installed
3. Run `yarn install`
4. Run `yarn build`
5. Optionally, install `serve` and run `serve -s build` to serve the production app

## Compiling translations

1. Run `yarn extract:messages`
2. Run `yarn manage:translations`

## Tech stack

- React
- React Redux for app state management
- Localization using i18n
- CSS Modules + SCSS

## Directory structure

| Directory                | Description                                                             |
| ------------------------ | ----------------------------------------------------------------------- |
| src/colors               | Color theme of the webpage                                              |
| src/styles               | Default styles of the webpage                                           |
| src/components           | React components that are used in the app.                              |
| src/components/Accordion | Accordion component, as seen in https://potentiaali.com/subjects        |
| src/components/Partials  | Partial components of the app. For example, Nav, Footer and Companies.  |
| src/components/Schedule  | Schedule component, as seen in https://potentiaali.com/schedule         |
| src/data                 | Data & configuration used by the app (schedule, companies, speed rekry) |
| src/i18n                 | Localization files of the app                                           |
| src/pages                | Pages of the app                                                        |
| src/reducers             | Reducers that manage schedule & app language                            |
| src/stories              | Storybook stories                                                       |
