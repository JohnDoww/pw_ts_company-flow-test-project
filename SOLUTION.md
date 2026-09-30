## Locator strategy
I prefer `data-testid` locators they are most reliable than other element attributes.
While writing those tests I have used different kind of locators: CSS, getByText, getByRole, getByTestId.
I payed attention on unique locators and available for both lang settings
I added only once custom `data-testid`  to show case how will I handle it on the real project.

## Flake strategy
- The organization lookup is mocked with `page.route()`, so tests don't depend
  on the external Brønnøysund API or on network conditions.
- No fixed sleeps; all waiting is via auto-waiting and web-first assertions.
- Tests are independent and don't share state.
- Every method has entry and exit points, so it's clear when app is ready to go forward
- All tests were executed multiple times to prove the stability by `npx playwright test -- --repeat-each={numberOfRepetition}` 


## What was done
- Fully implemented required points
- Optional point - Structure. Was fully designed. I would love to show you how it works and how will it be asy to maintain and scale it.
- Optional point - More bugs.
- The rest optional points were skipped due to personal time limitations. 
