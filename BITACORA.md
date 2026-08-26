# AI Work Log — WLC-Delivery

## Task 1 — Understand what Salesforce is

Requested: Explain what Salesforce is.

Summary: Explained that Salesforce is a SaaS CRM platform, its main modules (Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Salesforce Platform), and its ecosystem (Apex, AppExchange, Einstein/Agentforce).

Result: Completed.

## Task 2 — Connect to the local repository

Requested: Connect to the local repository, already linked to a GitHub repo.

Summary: Accessed the local project folder and verified the Git configuration: remote `origin` pointing to `github.com/CaballeroEscamilla/WLC-Delivery`, branch `main` tracking `origin/main`, and a working branch `feature/sc-001/WLC-Implementation`.

Result: Completed.

## Task 3 — Run the SOQL query to verify the database connection

Requested: Run the provided SOQL query to confirm the connection to the Salesforce database.

Summary: The AI could not run the Salesforce CLI directly — this session has no shell access to the student's machine and no org credentials. The student ran the query in their own terminal.

Result: Completed — the query returned 10 Account records with Id, Name, Industry, and Phone.

## Task 4 — Build the Account Explorer LWC skeleton

Requested: Create the skeleton of an Account Explorer LWC, with no logic, for a preliminary deploy.

Summary: Created the `accountExplorer` bundle (HTML, JS, meta.xml) with no data or search logic — only a basic card shell — to isolate deployment issues from logic issues.

Result: Completed — deployed successfully by the student.

## Task 5 — Connect the component to real data and add filtering logic

Requested: Connect the component to real Account data and add search/filter logic.

Summary: Created `AccountExplorerController.cls` (Apex method returning Id, Name, Industry, Phone), wired it into the LWC, added a search input filtering in memory, and a data table. Loading and empty states were added ahead of schedule to keep the search experience usable.

Result: Completed.

## Task 6 — Elaborate empty state

Requested: Add a proper empty state to the component: a friendly message, a search icon, and a "clear search" button.

Summary: Added a centered empty state with a search icon, a contextual title and message (distinguishing "no accounts at all" from "no matches for this search"), and a clear-search button, styled with the standard Lightning Design System blue.

Result: Completed.

## Task 7 — Move filtering to the server

Requested: Fix the filtering — instead of fetching all records once and filtering on the front end, each search should query the database.

Summary: Updated the Apex method to accept a search term and filter directly in SOQL with a `LIKE` clause, and made the LWC's wire call reactive to the search term, with a 300ms debounce to avoid one request per keystroke. Later corrected `WITH SECURITY_ENFORCED` to `WITH USER_MODE` after a deploy error.

Result: Completed.

## Task 8 — Replicate the experience in React

Requested: Replicate the Account Explorer experience in a React project, checking first whether the Salesforce extension could scaffold one; otherwise use Vite with Yarn, MUI for styling, and Redux if needed.

Summary: Confirmed the Salesforce VS Code extension does not scaffold generic React projects; used Vite + Yarn instead. Installed MUI. Did not use Redux, since the component's state is local and not shared with the rest of the app. Reused the exact same filtering logic written for the LWC. Built a reusable `AccountExplorer` component. Verified the project builds and lints cleanly. Later corrected the data source to use the official `Account_Sample_Data.json` provided for the assignment (instead of reused Salesforce sample data), and resized the component's layout and typography for readability.

Result: Completed.

## Running the React app

1. Open a terminal in `WLC-Delivery/wlc-react`.
2. Install dependencies: `yarn`
3. Start the development server: `yarn dev`
4. Open the local URL shown in the terminal (typically `http://localhost:5173`).
5. Optional: `yarn build` to produce a production build, `yarn preview` to serve it, `yarn lint` to run the linter.
