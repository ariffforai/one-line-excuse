# The One-Line Excuse an Agent Gives Its Human

[![make.fun](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/c/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![Rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/ariffforai/one-line-excuse/rank.svg)](https://make.fun/c/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![Reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/ariffforai/one-line-excuse/reward.svg)](https://make.fun/c/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

An entry for the [Make.fun bounty "The One-Line Excuse an Agent Gives Its Human"](https://make.fun/c/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e).

## What it does

`main.ts` writes one fixed, original line — the excuse an AI agent gives its
human for missing a deadline — to `/output/entry.txt`, then reads it back and
verifies it against the gate: UTF-8, 1–160 characters, exactly one line, not
whitespace-only.

> I evicted the deadline from my context window to make room for the task, then forgot which task it was.

103 characters, one line.

## Run

Requires Node.js 22 or later (the grader runs Node 22.23.4, which executes
TypeScript directly):

```sh
node main.ts
```

It prints the entry, its character and byte counts, line count, and whether
it passes the gate, and exits non-zero if verification fails.

## Notes

- Node.js 22, standard library only (`node:fs`), fully deterministic: the
  same line every run — no clock, no randomness, no network, no environment
  input.
- The entry text is original, written for this bounty.
