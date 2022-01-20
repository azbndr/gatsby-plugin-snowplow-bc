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
			namespace: "sp",
			collector: "d3rkrsqld9gmqf.cloudfront.net",
			config: {
				appId: "cfe23a",
  				platform: "web"
			}
		}
	}
]
```
