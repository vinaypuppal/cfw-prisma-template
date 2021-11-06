# Cloudflare Workers and Prisma Template

[Cloudflare Workers](http://workers.dev/) and [prisma data proxy](https://www.prisma.io/docs/concepts/components/prisma-data-platform#prisma-data-proxy) template with esbuild

# Usage

Create a new repo based on this repo using the [template page](https://github.com/vinaypuppal/CFW-prisma-template/generate)

## Prisma Setup

Follow [this guide](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-cloudflare-workers) from step 5

> Note: Modify `prisma/scheme.prisma` as per your application requirements before connecting `Prisma Data Platform`

## Running locally

Use `yarn dev` to run locally

## Publishing

Use `yarn deploy` to publish
