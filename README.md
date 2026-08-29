# WLC-Delivery

## Presentation Video

<table>
  <tr>
    <td width="200" align="center">
      <a href="https://youtu.be/5AO0dPRXOds">
        <img src="https://img.youtube.com/vi/5AO0dPRXOds/mqdefault.jpg" alt="Presentation Video" width="180">
      </a>
    </td>
    <td>
      <b>Presentation Video</b><br>
      Walkthrough of the delivery: the Account Explorer LWC running inside Salesforce and the React app running against sample data.<br><br>
      <a href="https://youtu.be/5AO0dPRXOds">https://youtu.be/5AO0dPRXOds</a>
    </td>
  </tr>
</table>

Also available in the [`Demo Video`](Demo%20Video/README.md) folder.

The problem, in professional terms

An organization needs its sales team to be able to quickly look up its customer portfolio (Accounts) without leaving Salesforce, and in parallel, the product team wants to prototype the same customer-browsing experience in a standalone web application (React), decoupled from the backend, so they can iterate on the design without touching production data or risking the integrity of the org.

This is a very common real-world pattern: the same piece of UI/UX gets built twice, on two different stacks, for two different purposes.

Inside Salesforce (LWC): the component needs to read real, live data, because the end user (a salesperson) makes decisions based on up-to-date information.
Outside Salesforce (React): the product team shouldn't have to depend on an authenticated org to work on the design, so it's built against sample data (JSON), simulating the shape the real data will have.

The core technical challenge is: solve the business logic (search, filtering, sorting, state handling) once and port it across two frameworks, instead of solving it twice from scratch. This is exactly what's being evaluated when a developer is asked to "build the same thing on two platforms": the ability to separate logic from presentation.

With that goal in mind, here's how it's built:

1. Confirm the real data source
Before writing any UI, validate that the connection to the org is healthy: an authenticated session, a test SOQL query (Name, Industry, Phone), and a successful deploy/retrieve. Without this, any component you build has nothing to be populated with.

2. Stand up the Salesforce component skeleton
Generate the empty LWC and deploy it immediately, before adding any logic. The professional reasoning: if something fails later, you already know the problem is logic-related, not a configuration/deployment issue.

3. Connect the component to real data
Implement the method that fetches the Accounts (via an Apex @AuraEnabled method or a standard wire adapter) and render it in a simple table. This is where the component stops being a mockup and starts reflecting the real state of the business.

4. Solve the search, filter, and sort logic
This is the core of the problem: given a set of records, let the user explore them efficiently. It's solved once, in plain JavaScript, independent of the data source — this is exactly what will let you reuse it in React later.

5. Handle the interface states (loading and empty)
A professional component never assumes data is always ready or always exists. Add a "loading" state while the query resolves, and an "empty" state when the filter finds no results.

6. Put the component into production (a Lightning Page)
Integrate it into a real page within the org and visually verify that an end user could use it as-is.

7. Rebuild the same experience in React, against sample data
Take the logic already solved in step 4 and move it to a reusable React component, fed by a static JSON instead of a live connection. This demonstrates that the business logic doesn't depend on the platform.

8. Document the solution the way an engineer would when handing off their work
A README with install/run instructions, a log of what AI assistance was used and how it was verified, and evidence (screenshots or links) of each component working. This isn't an extra — it's what lets someone else (or your evaluator) trust and reproduce what you built.

## Evidence

Screenshots supporting this delivery are kept in the `img/` folder at the root of the repository.

| Image | Description |
|---|---|
| [img/soql-query-result.png](img/soql-query-result.png) | SOQL query run from the terminal, confirming the org connection |
| [img/account-explorer-lwc.png](img/account-explorer-lwc.png) | Account Explorer LWC deployed on a Salesforce Lightning page |
| [img/account-explorer-react-local.png](img/account-explorer-react-local.png) | Account Explorer React app running locally |
| [img/trailhead-profile.png](img/trailhead-profile.png) | Trailhead profile overview |
| [img/trailhead-badges.png](img/trailhead-badges.png) | Completed Trailhead badges |
