# gatsby-plugin-snowplow

Gatsby plugin to add Snowplow tracker to your site.

## Install

`npm install --save gatsby-plugin-snowplow-bc` or

`yarn add gatsby-plugin-snowplow-bc`

## How to use

```
// In your gatsby-config.js
plugins: [
	{
		resolve: "gatsby-plugin-snowplow-bc",
		options: {
			host: "//host.cdn.net", //host for the sp.js
			namespace: "sp",
			collector: "//host.cdn.net", //host for the collector
			config: {
				appId: "myAppId",
			}
		}
	}
]
```
