# Readiness Rubric — Compliance Checklist

Working file mapping the "SF Vibe Lab - UADY / Readiness Rubric (Professional Readiness Sprint)" against the current state of the `WLC-Delivery` project. Status reflects what could be verified from the repository and the work done in this session. Items outside the code (Trailhead completions, local environment checks, git push, live demo) can only be confirmed by the student.

Legend: Done = verified from repository/session evidence. Action needed = something the student must still do. Not verifiable by AI = requires the student's own confirmation (outside the repository).

## Required Trailhead Work — 15 points

| Requirement | Points | Status |
|---|---|---|
| Agentforce 360 Platform Development Basics completed | 5 | Not verifiable by AI — confirm completion on Trailhead |
| Quick Start: Visual Studio Code for Salesforce Development completed | 5 | Not verifiable by AI — confirm completion on Trailhead |
| Quick Start: Lightning Web Components completed | 5 | Not verifiable by AI — confirm completion on Trailhead |

These are Trailhead badges tied to the student's own account. Nothing in this session can complete or check them.

## Working Development Environment — 15 points

| Requirement | Points | Status |
|---|---|---|
| Visual Studio Code and Salesforce Extension Pack working | 4 | Likely satisfied (used to deploy the LWC and Apex class) — student should confirm/screenshot |
| Salesforce CLI installed and responding | 4 | Done — used successfully for the Account query and every deploy |
| Salesforce org authenticated from VS Code or CLI | 4 | Done — `WLC_Org` alias authenticated and used throughout |
| Node.js/npm and React development environment working | 3 | Action needed — the React project was built and verified (`yarn build`, `yarn lint`) in this session's cloud environment, not on the student's own machine. Run `yarn` then `yarn dev` locally to produce first-hand evidence. |

## Connected Salesforce Project — 15 points

| Requirement | Points | Status |
|---|---|---|
| Valid Salesforce DX project | 5 | Done — `sfdx-project.json`, `force-app/main/default/` confirmed |
| Successful Account query | 5 | Done — SOQL query returned 10 Account records (Id, Name, Industry, Phone) |
| Successful source deployment or retrieval | 5 | Done — LWC skeleton, Apex class, and later revisions deployed successfully |

## Account Explorer LWC — 30 points

| Requirement | Points | Status |
|---|---|---|
| Component deployed and visible on a Lightning page | 8 | Done — assigned to an Account Record Page |
| Displays real Account records from the student's org | 8 | Done — via `@wire(getAccounts)` |
| Shows Name, Industry, and Phone | 4 | Done |
| Includes search, filtering, or sorting | 4 | Done — server-side search (SOQL `LIKE`) with debounce, results ordered by Name |
| Includes useful loading and empty states | 3 | Done — spinner, error state, and an elaborated empty state (icon, contextual message, clear-search button) |
| Code is organized and readable | 3 | Reasonably satisfied — Apex controller, LWC, and CSS are separated with clear naming; final judgment is the facilitator's |

## React Account Explorer — 15 points

| Requirement | Points | Status |
|---|---|---|
| Application runs locally | 4 | Action needed — same as above, only verified in this session's cloud environment so far. Confirm with `yarn && yarn dev` on the student's own machine. |
| Reads provided Account JSON data | 3 | Done — uses the official `Account_Sample_Data.json` from the assignment repository |
| Uses a reusable Account component | 3 | Done — `AccountExplorer` accepts an `accounts` prop |
| Implements the same search, filter, or sort behavior | 3 | Done — reuses the same filtering function written for the LWC |
| Includes an empty state and basic professional styling | 2 | Done — MUI-based styling, matching empty state pattern |

## Professional Evidence — 10 points

| Requirement | Points | Status |
|---|---|---|
| Individual repository or source submission | 2 | **Action needed** — the local repo is linked to GitHub, but nothing from this session has been committed or pushed yet. The Git log only shows the original clone and a branch checkout; the LWC, Apex, and React work all exist only as uncommitted local files. Commit and push before submission. |
| README with installation and run instructions | 3 | Done for the React project (`wlc-react/README.md`). The Salesforce project still has the default Trailhead template README — consider adding a short run-instructions section specific to this project if the facilitator expects one. |
| Short AI work log | 2 | Done — `BITACORA.md`, now summarized in English |
| Student can demonstrate and explain the work | 3 | Not verifiable by AI — this is the live demo/explanation |

## Summary of outstanding actions

1. Confirm the three Trailhead badges are completed.
2. Run the React app locally (`yarn` then `yarn dev`) and keep that as evidence — it has only been verified in this session's cloud sandbox so far.
3. Commit and push all the work from this session (LWC, Apex controller, React project, this checklist, and the work log) to the GitHub repository — nothing has been committed yet.
4. Optionally, add a short run-instructions note to the Salesforce project's own README.
5. Be ready to demonstrate and explain the work live.
