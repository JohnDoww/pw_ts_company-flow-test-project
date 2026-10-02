Bug 1. Title: Dashboard page not refreshed when navigate there by header navigation panel
Severity: Low 
Area: Dashboard info cards
Steps:
    1. log in as Admin
    2. See amount of active clients in the Active Clients card on Dashboard page
    3. Open Clients page
    4. Create a new Client with Active status 
    5. Navigate by Header nav panel to Dashboard page
    6. Inspect the amount of active clients in the Active Clients card on Dashboard page
Expected: Amount of Active Clients increased by 1 point, as we just created active client
Actual: Amount of Active Clients the same as in step 2
Notes: User see the valid amount of Clients when refresh the page. We need to refresh the cards data once user navigate there. Reproduce rate 5/5. Issue exists for both roles. 


Bug 2. Title: Accountant can manage Users, when open users page by direct url
Severity: High 
Area: Accountant Permission for /users
Steps:
    1. log in as Accountant
    2. Go to https://company-flow.netlify.app/users
    3. Invite user
    4. Inspect the users list
Expected: Accountant redirected to home page when trying to open users page by link. API requests to /users endpoints return 403.
Actual: Accountant can access Users page by direct url and manage users
Notes: Reproduce rate 5/5. Accountant Role specific. The Edit action is not available in the UI for this role.


Bug 3. Title: Time entries contains the deleted client's records
Severity: High 
Area: Time entries
Steps:
    1. Log in as Admin
    2. Open Clients page
    3. Create Client A
    4. Open Time entries page
    5. Create Record for Client A, the rest data can be random
    6. Verify you see the just created record in Time entries page
    7. Open Clients page
    8. Delete created Client A
    9. Open Time entries page
    10. Inspect the created record for Client A
Expected:  Record must be fully deleted
Actual: We see the Record for Client A, only name hidden
Notes: Screenshot must be attached. Reproduce rate 5/5. Admin role specific.

Bug 4. Title: Newly created task by Admin is not visible for Accountant and vise versa
Severity: High
Area: Tasks
Steps:
    1. Log in as Admin
    2. Open Tasks page
    3. Create a new task with valid data
    4. Verify the created task in the tasks list
    5. Log out.
    6. Log in as Accountant
    7. Open Tasks page
    8. Inspect the Tasks list
Expected: Admin can see the task which were created by Accountant and vise versa
Actual: The new Admin's task is not visible in the list for Accountant
Notes: Reproduce rate 5/5. Screenshot must be attached. Issue exists for both roles.


Bug 5. Title: Users can't edit time entries
Severity: High
Area: Time entries
Steps:
    1. Log in as any user
    2. Open Time entries page
    3. Create a time entry (or select an existing one)
    4. Try to edit the time entry
Expected: The time entry is updated and the new data is shown in the list
Actual: There is no ability to edit the time entry
Notes: Reproduce rate 5/5. Issue exists for both roles. Screenshot must be attached


Bug 6. Title: Accountant can edit Client data when opening the client page by direct URL
Severity: High
Area: Accountant Permission for /clients
Steps:
    1. Log in as Accountant
    2. Open Clients page
    3. Open Any Client
    4. Navigate to URL: https://company-flow.netlify.app/clients/{CLIENT_ID}/edit
    5. Change any client field and save
    6. Open Clients page
    7. Inspect the updated client
Expected: Accountant is redirected to the home page when opening the edit page by link. API update requests return 403.
Actual: Accountant can open the edit page by direct URL and the client data is changed
Notes: Reproduce rate 5/5. Accountant role specific. The Edit action is not available in the UI for this role.


Bug 7. Title: Hours card and rate show wrong data
Severity: High
Area: Dashboard info cards
Steps:
    1. Log in as any user
    2. Create time entries with known hours and rate. Billable Checkbox is on.
    3. Add to calculations any already created records for current week
    4. Open Dashboard page
    5. Inspect the Hours card and the Rate value
Expected: Cards show the same data as in calculations in step 3.
Actual: Cards show different values.
Notes: Reproduce rate 5/5. Issue exists for both roles. Screenshot must be attached

Bug 8. Title: Get no results when search by org number/org place on Clients page
Severity: Medium
Area: Clients search
Steps:
    1. Log in as any user
    2. Go to Clients page
    3. Search for existing client by Place / Org number
    4. Inspect the search results
Expected: Got the clients, where Place / Org number match the search request
Actual: Got no results.
Notes: Reproduce rate 5/5. Issue exists for both roles. Screenshot must be attached
