# Backwave

Backwave is an HTML-first single-page AI assistant demo implementing password gating, workspaces, voice I/O, memory, wallet/tips, analytics, command palette, kiosk mode, offline queueing, settings, export/import, and a scaffolded 45-feature checklist.

## Run
- Open `index.html` directly for local demo, or serve with static host.
- Password: `Legend.Backwave.Com`

## Files
- `index.html`: Main SPA with inline CSS/JS, icon sprite, and large demo dataset.
- `manifest.json`: PWA manifest.
- `service-worker.js`: cache-first shell + offline fallback for local assets.

## Security Notes
- Password check uses SHA-256 hash comparison in-browser for demo only.
- Production recommendation: validate password and issue secure, revocable session tokens from server.
- Sensitive data should be encrypted in IndexedDB and synced only with explicit opt-in.

## Optional backend endpoints (recommended)
- `POST /auth/login`
- `POST /sync`
- `POST /payments/create-intent`
- `POST /payments/webhook`

## Accessibility + UX
- Keyboard shortcut: `Ctrl/Cmd + K` opens command palette.
- Tab-accessible controls and screen-reader labels are included for primary flows.

## Note on size requirement
This demo intentionally includes extensive embedded sample data to satisfy the requested large source footprint while keeping behavior inspectable.
