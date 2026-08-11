        # Javascript Next.js Application — Node 18

        **Scenario:** 1 - Monolithic  
        **Project type:** Next.js Application  
        **Customer Version:** 18  
        **Syntax:** ES2022 / Node.js 18 — Object.hasOwn, .at(), Error.cause, ?., ??  
        **Next.js:** 14.2.18

        ## APIs

        - `GET /api/v1/health`
        - `GET /api/v1/orders`
        - `POST /api/v1/orders`

        ## Build

        ```bash
        npm install
        npm run build
        npm test
        npm start
        ```

        ## Tools (12)

        See `tools/` — each tool folder links to this project.

        - [`diff-cover`](tools/diff-cover/)
- [`eslint`](tools/eslint/)
- [`eslint-plugin-security`](tools/eslint-plugin-security/)
- [`eslint-plugin-sonarjs`](tools/eslint-plugin-sonarjs/)
- [`jscpd`](tools/jscpd/)
- [`lizard`](tools/lizard/)
- [`mocha`](tools/mocha/)
- [`npm-audit`](tools/npm-audit/)
- [`npm-ls`](tools/npm-ls/)
- [`nyc`](tools/nyc/)
- [`pydriller`](tools/pydriller/)
- [`stryker-js`](tools/stryker-js/)
