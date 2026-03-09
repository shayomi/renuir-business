# Skill: Debugging
## When to use
Use this skill when diagnosing bugs, regressions, or inconsistent behavior.

## Steps (numbered)
1. Reproduce the issue reliably with clear preconditions.
2. Isolate the failure area by narrowing scope and dependencies.
3. Check logs, stack traces, and runtime signals for root-cause clues.
4. Review `.legion/context/` for known issues, constraints, and prior decisions.
5. Implement and verify a targeted fix.
6. Document systemic issues in `.legion/context/technical-debt.md` if applicable.

## Output
A validated bug fix with documented root cause and debt tracking when the issue reveals a broader systemic gap.
