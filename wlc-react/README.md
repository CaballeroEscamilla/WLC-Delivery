# WLC — Account Explorer (React)

React version of the Salesforce `accountExplorer` LWC: same account search experience, here fed by sample JSON data instead of a live connection to the org.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/)

## Installation

1. Move into the project folder:
   ```bash
   cd wlc-react
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
   This downloads React, MUI, and the rest of the dependencies listed in `package.json` (creates the `node_modules` folder).

## Running it

Start the development server:

```bash
yarn dev
```

Open the URL shown in the terminal in your browser (`http://localhost:5173` by default).

## Other available commands

```bash
yarn build     # generates the production build in dist/
yarn preview   # serves that production build locally
yarn lint      # runs the linter (oxlint)
```

## Structure

```
src/
  components/
    AccountExplorer/
      AccountExplorer.jsx   ← reusable component (accepts an `accounts` prop)
  data/
    accounts.json           ← sample data provided by the assignment
  utils/
    filterAccounts.js       ← search logic, ported from the LWC
  theme.js                  ← MUI theme (blue #0176d3, the same accent used in the LWC)
  App.jsx
```

## Data source

`src/data/accounts.json` is an exact copy of the sample JSON specified by the assignment:
[`Account_Sample_Data.json`](https://github.com/leafarhz/sf-vibe-lab-uady/blob/main/01_week_readiness_sprint/Account_Sample_Data.json) (repo `leafarhz/sf-vibe-lab-uady`). It has 8 accounts with the fields `Name`, `Industry`, and `Phone` — no `Id`, so the table uses `Name` as the React key.
