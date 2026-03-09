# Decisions (ADR Log)

Architecture decisions and why we made them.

---

## ADR-001 — Next.js for Web

**Decision:** Use Next.js (App Router) for renuir-product-web and renuir-business.
**Reason:** SSR/SSG for SEO, fast iteration, strong ecosystem.
**Date:** 2026

---

## ADR-002 — Separate business & product web repos

**Decision:** Keep renuir-business and renuir-product-web as separate apps.
**Reason:** Different audiences, different deployment cadences, avoids coupling.
**Date:** 2026

---

## ADR-003 — API-first for business integrations

**Decision:** Build a public REST API as the primary integration method for hotels/institutions.
**Reason:** Enables broad ecosystem adoption without requiring UI usage.
**Status:** In planning.

---

<!-- Add new ADRs below -->
