![GitHub](https://img.shields.io/github/license/backtestjs/backtestjs)
![GitHub package.json version](https://img.shields.io/github/package-json/v/backtestjs/backtestjs)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%backtestjs%2Fbacktestjs%2Fhit-counter&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com)

# Backtest JS: Test Project

Enhance your trading strategies with BacktestJS, the leading CLI tool crafted for trading developers. Leverage the power of TypeScript (or JavaScript) to backtest your strategies with unmatched precision, efficiency, and flexibility.

## Instructions

Clone this repo and start writing your strategies immediately.

```bash
  git clone git@github.com:backtestjs/test-project.git backtestjs-test-project
  cd backtestjs-test-project
  npm install
```

## Run this project

Start strategic backtesting with a single command:

```bash
  npm run dev # main.ts
  npm run start # dist/main.js
```

## Useful commands

`npm install` install all dependencies

`npm link @backtestjs/core` link the local version of the core package (useful for development)

`npm install --include=dev prisma` install prisma cli (useful for manage SQLite database)

`npm install @backtestjs/core` install the latest version of the core package (useful for production)

`npx prisma validate` validate your Prisma schema

`npx prisma generate` generate Prisma Client (required if you change your Prisma schema or your database url)

`npx prisma db push` push your Prisma schema to your database
