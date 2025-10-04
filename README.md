# Get2KnowU

This project is configured to use the npm CLI for dependency management and Expo tooling.

## Prerequisites

- Node.js 18 or newer (LTS recommended)
- npm (ships with Node.js)
- Xcode or Android Studio if you plan to run iOS/Android simulators

## Getting started

```bash
npm install
npm start
```

The start command launches Expo's development server. Use the on-screen prompts to run the app on iOS, Android, or the web.

## Useful scripts

- `npm run ios` – start the Expo server and launch the iOS simulator.
- `npm run android` – start the Expo server and launch the Android emulator.
- `npm run build` – trigger an EAS build (requires cloud credentials).
- `npm run publish:prod` – publish the latest update to the production branch.

## Cleaning up caches

If you encounter issues caused by stale caches, clear them with:

```bash
npm run clear
```

## Upgrading dependencies

When updating packages, prefer `npm install <package>@<version>` so the generated `package-lock.json` stays in sync across collaborators. Avoid using Yarn—it is no longer part of this setup.
