# NEXT.JS STARTER REPO

Created to get you up and running quickly without any hosted auth services

-   Next.js 14
-   TypeScript
-   Tailwind
-   ESLint

## PACKAGES

-   Trivago Prettier Sort Imports
-   Tailwind Prettier Formatter
-   Prisma
-   Primsa Client

## AUTH

-   Lucia
-   node-rs/@argon

-   email and password login
-   TODO: Google oAuth
-   TODO: Facebook oAuth
-   TODO: Apple oAuth

### AUTH FUNCTIONS

-   ValidateRequest inside auth.ts: this will validate the request and return both user and session object
-   getCurrentUser inside sessions.ts: extracts the user details and returns user only

**_Note that only attributes in your DatabaseUserAttributes will exposed via this, id is sent by default_**

### AUTH SCHEMA

Schema has been structured as suggested in Lucia docs, you can add any other columns that you wish. **_id_** is created by auth and prisma does not handle this creation.
