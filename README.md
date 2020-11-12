# Using multiple zones

With Next.js you can use multiple apps as a single app using its [multi-zones feature](https://nextjs.org/docs/advanced-features/multi-zones). This is an example showing how to use it.

- All pages should be unique across zones. For example, the `home` app should not have a `pages/blog/index.js` page.
- The `blog` app sets [`assetPrefix`](https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix) so that generated JS bundles are within the `/blog` subfolder.
  - To also support the plain `next dev` scenario, `assetPrefix` is set dynamically based on the `BUILDING_FOR_NOW` environment variable, see [`vercel.json`](vercel.json) and [`blog/next.config.js`](blog/next.config.js).
  - Images and other `static` assets have to be prefixed manually, e.g., `` <img src={`${process.env.ASSET_PREFIX}/static/image.png`} /> ``, see [`blog/pages/blog/index.js`](blog/pages/blog/index.js).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-zones)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-zones with-zones-app
# or
yarn create next-app --example with-zones with-zones-app
```

Install the dependencies of every app (`/home` and `/blog`):

```bash
npm install
# or
yarn
```

Install the [Vercel CLI](https://vercel.com/download) if you don't have it already, and then run [`vercel dev`](https://vercel.com/docs/cli?query=dev#commands/dev) in the main directory to start the development server:

```bash
vercel dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)!

> We recommend `vercel dev` in this case instead of `next dev`, as it can start both apps at the same time and use the routes defined in [`vercel.json`](vercel.json)

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).


[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/with-zones)

# Using multiple zones

With Next.js you can use multiple apps as a single app using it's multi-zones feature.
This is an example showing how to use it.

In this example, we've two apps: 'home' and 'blog'.
We also have a set of rules defined in `rules.json` for the proxy.

Now let's start two of our app using:

```
npm run home
npm run blog
```

Then start the proxy:

```
npm run proxy
```

Now you can visit http://localhost:9000 and access and develop both apps a single app.

### Proxy Rules

This is the place we define rules for our proxy. Here are the rules(in `rules.json`) available for this app:

```json
{
  "rules": [
    {"pathname": "/blog", "method":["GET", "POST", "OPTIONS"], "dest": "http://localhost:5000"},
    {"pathname": "/**", "dest": "http://localhost:4000"}
  ]
}
```

These rules are based on ZEIT now [path alias](https://zeit.co/docs/features/path-aliases) rules and use [`micro-proxy`](https://github.com/zeit/micro-proxy) as the proxy.

## Special Notes

* All pages should be unique across zones. A page with the same name should not exist in multiple zones. Otherwise, there'll be unexpected behaviour in client side navigation.
    * According to the above example, a page named `blog` should not be exist in the `home` zone.

## Production Deployment

Here's how are going to deploy this application into production.

* Open the `now.json` file in both `blog` and `home` directories and change the aliases as you wish.
* Then update `rules-prod.json` accordingly.
* Now deploy both apps:

~~~sh
cd home
now && now alias
cd ../blog
now && now alias
cd ..
~~~

* Finally, set the path alias rules with

~~~sh
now alias with-zones.now.sh -r rules-prod.json
~~~

> You can use a domain name of your choice in the above command instead of `with-zones.now.sh`.

That's it.
Now you can access the final app via: <https://with-zones.now.sh>