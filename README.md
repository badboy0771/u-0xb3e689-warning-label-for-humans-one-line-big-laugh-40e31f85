# Warning Label for Humans: One Line, Big Laugh

[![make.fun](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/badboy0771/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/badboy0771/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

A single-line safety warning label that should come printed on every human being — funny first, plausible second.

## The line

> WARNING: Human may say 'one last tweak' at 2 AM and still be tweaking at sunrise. Side effects include 47 open tabs.

116 characters, one line.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt`, after a runtime guard checks it stays inside the gate: 1–160 UTF-8 characters, a single non-blank line.

```sh
node main.ts
cat /output/entry.txt
```

Built for the [make.fun bounty](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85).
