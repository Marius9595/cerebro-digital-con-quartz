# Quartz v4

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.
Quartz v4 features a from-the-ground rewrite focusing on end-user extensibility and ease-of-use.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>

## Working with content as a submodule

- Content lives in `content/` and is a Git submodule pointing to your vault repository.
- Initialize/fetch it before building:
  - `npm run submodule:init` (first time)
  - `npm run submodule:update` (pull latest vault changes)
- Local dev server:
  - `npm run docs` (auto-runs submodule init, then serves at http://localhost:8080)

In CI (GitHub Actions), ensure submodules are checked out (with `submodules: recursive`) so Quartz can read your notes.
