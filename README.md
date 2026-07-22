# Lighthouse

**Instant access to local emergency numbers, hospitals, and your embassy — anywhere in the world.**

Lighthouse was born from a real moment: moving to a new country and realizing, mid-panic, that you have no idea who to call if something goes wrong. It detects where you are and immediately shows the local police/ambulance/fire numbers, with one tap to call — no language barrier, no guessing.

## Status

This is an early prototype, still in the "talk to real users" stage — not a finished product. See [Project status](#project-status--roadmap) below before assuming any of this is production-ready.

## Live demo

Once this repo is deployed via GitHub Pages, the live link will be:
`https://<your-github-username>.github.io/<repo-name>/`
(update this line once you've deployed — see DEPLOY.md)

## Features

- **Emergency numbers for 236 countries and territories** — police, ambulance, fire, and a general emergency number where one exists, sourced from public emergency-number listings.
- **Location detection**, with a manual country search fallback.
- **10 flagship city guides** (Luxembourg City, Berlin, Amsterdam, Barcelona, Dubai, Singapore, Tokyo, Bangkok, Mexico City, Cape Town) — real hospital contacts, tourist/non-emergency police lines, and a local-language phrase for when English isn't understood.
- **112/911 safety-net tip** — most GSM phones route these to local emergency services even without the exact local number, shown wherever detection might fail.
- **Profile** — Medical ID (blood type, allergies, conditions, medications, emergency contact) kept separate from private info (citizenship, passport, home/local address), since the phone showing this app might be handed to a stranger helping you.
- **Embassy finder** — real address/phone for British and American citizens in the 10 flagship cities; official government locator links for every other citizenship.
- **Installable PWA** — works in any browser, installs to the home screen on iOS and Android, works offline after first load.

## Tech stack

Plain HTML, CSS, and JavaScript — no framework, no build step, no backend. This is deliberate: it keeps the whole app auditable in one file and deployable anywhere that can serve static files.

- `index.html` — the entire app (markup, styles, and logic)
- `manifest.json` — PWA metadata (name, icons, theme color)
- `sw.js` — service worker; caches the app shell for offline use, never caches the live location-lookup API call
- `icons/` — app icons

## Running it locally

No installation needed. Either:
1. Double-click `index.html` to open it directly in a browser, or
2. Serve it locally (needed for the service worker to register): `python3 -m http.server 8000`, then visit `http://localhost:8000`

## Deploying

See [DEPLOY.md](./DEPLOY.md) for plain-language, step-by-step instructions to put this on GitHub and get a free live web address via GitHub Pages.

## Data & privacy

- All emergency, hospital, and embassy data comes from public sources and may change — always trust official local guidance over this app in a real emergency.
- Profile data (Medical ID, citizenship, addresses) is saved **only in your browser's local storage on your own device** — nothing is sent to a server, because there is no server. Uninstalling the app or clearing browser data erases it.
- Location is only used in the browser, in the moment, to look up local emergency numbers — it is not stored or transmitted anywhere beyond that one lookup.

## Known limitations

- A handful of disputed/micro-territories aren't covered yet (e.g. Northern Cyprus, Abkhazia, South Ossetia, Transnistria).
- City detection depends on place-name matching from the device's location — reliable in the 10 flagship cities, less so elsewhere.
- No accounts, no sync across devices, no real backend — Profile data lives on one device only.
- This is not a substitute for official emergency services, and the data has not been legally reviewed.

## Project status & roadmap

Currently at the "get real feedback before building more" stage — testing with real expats and travelers before adding further scope. Planned next milestones, roughly in order:

1. Collect and act on real user testing feedback
2. Legal/privacy review before any real user stores sensitive Profile data
3. A real backend if Profile data needs to sync across devices
4. Native iOS/Android app store presence (requires Xcode + Apple Developer Program, Android Studio + Google Play Console — not needed for the current web/PWA version)

## License

All rights reserved. This is a private, proprietary early-stage project — no open-source license is granted.
