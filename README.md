![GitHub](https://img.shields.io/github/license/backtestjs/backtestjs)
![GitHub package.json version](https://img.shields.io/github/package-json/v/backtestjs/backtestjs)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%backtestjs%2Fbacktestjs%2Fhit-counter&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com)

# Backtest JS: Quick Start

Enhance your trading strategies with (BacktestJS)[https://github.com/backtestjs/core], the leading CLI tool crafted for trading developers. Leverage the power of TypeScript (or JavaScript) to backtest your strategies with unmatched precision, efficiency, and flexibility.

## Why this

This repository has been created to provide a starting point for those who want to start using BacktestJS. This will allow you to explore the capabilities of BacktestJS and start developing your trading strategies quickly.

## Instructions

Clone this repo and start writing your strategies immediately:

```bash
  git clone git@github.com:backtestjs/quick-start.git backtestjs-test
  cd backtestjs-test
  npm install
```

If you want to use this repository as a base for your project and not just as a basis for evaluating BacktestJS, we recommend removing the "remote" so that you can work with git locally and if necessary, replace it with your own repository.

So, you can use the following commands:

- To remove the current repository and be independent `git remote remove origin`
- To add a new (your) repository `git remote add origin <your-git-url>`

## Initial Setup

When you run the project for the first time, you need to set up the database. Follow these steps:

1. Validate your Prisma schemas: `npx prisma validate`
2. Generate the Prisma client: `npx prisma generate`
3. Create the database: `npx prisma db push`

These commands ensure that your project is properly configured and ready to use.

## Run this project

Start strategic backtesting with a single command:

```bash
  npm run dev # main.ts
  npm run start # dist/main.js
```

## Project Structure

This section will provide an overview of the project's structure. Understanding the layout of the project will help you navigate and use this project more effectively.

The project is organized as follows:

- `.env`: This file contains environment variables. The `DATABASE_URL` variable should be inserted with the path to the target file. By default, SQLite is used, so it's not necessary to have an external database. For example, an absolute path like `DATABASE_URL=file:/Users/backtesjs/quick-start/db/backtestjs.db` is valid.

- `main.ts`: This is the entry point of the project. Here you can found an exaample of how to use BacktestJS. Please, refer to [BacktestJS documentation](https://backtestjs.github.io/core/) for more information.

- `strategies`: This directory contains the source code for the strategies. Each strategy is a separate file that implements the logic for a specific trading strategy.

- `db`: This directory is used to store the SQLite database file. Remember to change .env `DATABASE_URL` variable to point to this file. Use absolute path.

## Some useful commands

`npm install` install all dependencies

`npm link @backtestjs/core` link the local version of the core package (useful for development)

`npm install --include=dev prisma` install prisma cli (useful for manage SQLite database)

`npm install @backtestjs/core` install the latest version of the core package (useful for production)

`npx prisma validate` validate your Prisma schema

`npx prisma generate` generate Prisma Client (required if you change your Prisma schema or your database url)

`npx prisma db push` push your Prisma schema to your database
