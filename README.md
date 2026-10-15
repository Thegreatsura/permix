# Permix

[![npm version](https://badge.fury.io/js/permix.svg)](https://npmjs.com/package/permix) ![You need Permix](https://img.shields.io/badge/You_need-Permix-purple)

Permix is a lightweight, framework-agnostic, type-safe permissions management library for JavaScript applications on the client and server sides.

## Documentation

You can find the documentation [here](https://permix.letstri.dev).

## Example

To quick start you only need to write the following code:

```ts
import { createPermix } from 'permix'

const permix = createPermix<{
  post: ['read']
}>()

permix.setup({
  post: {
    read: true,
  },
})

permix.check('post.read') // true
```

Permix has other powerful features, so here's check out the [docs](https://permix.letstri.dev/docs) or the [examples](https://github.com/letstri/permix/tree/main/examples) directory.

## AI agents

Your agents know every permission in place: the whole permission model lives in one typed `createPermix<...>` schema, and any permission an agent invents, misspells, or forgets is a TypeScript error.

- [Agent skills](permix/skills/README.md) ship inside the npm package — `npx skills add letstri/permix`, or copy them from `node_modules/permix/skills/` so they match your installed version.
- LLM-friendly docs: [`llms.txt`](https://permix.letstri.dev/llms.txt), [`llms-full.txt`](https://permix.letstri.dev/llms-full.txt), and any docs page as Markdown by appending `.md` to its URL.
- Prompts, `AGENTS.md` conventions, and gating in-app AI tools: [AI Agents guide](https://permix.letstri.dev/docs/agents).

## License

MIT License - see the [LICENSE](https://github.com/letstri/permix/blob/main/LICENSE) file for details
