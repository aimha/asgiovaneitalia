# Audit Report — asgiovaneitalia

- **Data:** 2026-06-21
- **Rubrica:** `.agent-guidelines/` + `AGENTS.md` (full-stack foundation)
- **Nota sulla rubrica:** L'`AGENTS.md` descrive un monorepo full-stack (`foundation/` con NestJS backend, worker, packages/shared, PostgreSQL, RabbitMQ). Il repository reale è un **frontend SolidJS standalone** derivato da un fork del template foundation. Circa il 95% delle linee guida descrive infrastruttura assente (backend, worker, entity, multi-tenancy, audit trail, soft delete, RabbitMQ). L'audit applica la rubrica al **sottoinsieme pertinente** (componenti SolidJS, SCSS, store, naming) e segnala lo scostamento architetturale.

## Conteggio finding

| Lente | Alto | Medio | Basso | Totale |
|-------|------|-------|-------|--------|
| ARCH  | 2    | 4     | 3     | 9      |
| CONV  | 1    | 4     | 2     | 7      |
| DUP   | 0    | 3     | 2     | 5      |
| OPT   | 0    | 2     | 3     | 5      |
| COV   | 1    | 0     | 0     | 1      |
| **Totale** | **4** | **13** | **10** | **27** |

## File per lente

- [ARCH.md](./ARCH.md) — Architettura
- [CONV.md](./CONV.md) — Conformità
- [DUP.md](./DUP.md) — Duplicazioni e incoerenze
- [OPT.md](./OPT.md) — Ottimizzazioni
- [COV.md](./COV.md) — Copertura test
