# E2E Plan: <Feature Name>

## Scope
Define what end-to-end behavior this test plan validates.

## Scenarios Table
| Scenario | Flow Type | Steps | Expected Result |
| --- | --- | --- | --- |
| Happy Path | Primary | 1. <step one><br>2. <step two><br>3. <step three> | User completes the core flow successfully. |
| Failure Handling | Negative | 1. <step one><br>2. <step two> | System surfaces a clear and actionable error. |

## Edge Cases
- [ ] Missing required input fields
- [ ] Duplicate submission handling
- [ ] External API timeout or error
- [ ] Unauthorized or expired credentials
- [ ] Mobile viewport behavior

## Test Commands
```bash
pnpm install
pnpm lint
pnpm test
pnpm test:e2e
```

## Pass Criteria
- All happy path steps pass without manual intervention.
- Edge case checks produce expected safe behavior.
- No blocker-level regressions are introduced.
