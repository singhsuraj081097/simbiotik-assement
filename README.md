# Angular 18 Simbiotik Demo (Mocked)

This repo contains a minimal Angular 18 application implementing the practices described in the PDF.
It uses **json-server** as a mock backend so you can run the app without external API keys.

How to run:

1. Extract the zip or open the folder.
2. Run `npm install` (this will install Angular and json-server).
3. Run `npm start` — this runs json-server at http://localhost:3000 and the Angular app at http://localhost:4200

Credentials:
- Use any email present in `mock/db.json` (e.g., `test@example.com`) and password `password`.

Notes:
- Weather and Map features are mocked by services. You can replace them with real API calls in `src/app/services`.
