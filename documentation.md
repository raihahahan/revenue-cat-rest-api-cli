# Documentation

## Folder structure
* `index.ts`: Main file. No modifications required
* `src/api.ts`: Code that directly works with the RevenueCat API
* `src/interface.ts`: Code for the CLI program
* `src/constants.ts`: Data for the CLI program

## Adding a new feature (in order)
1. `src/api.ts`: Add a new helper function in this file. This is the only file that contains code which directly talks to the RevenueCat REST API.
2. `src/constants.ts`: Write data (e.g. strings) for instructions on the new feature.
3. `src/interface.ts`: Add a new case into the switch statement. Make use of the api helper functions and the constants data.
