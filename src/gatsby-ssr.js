import React from "react";

export const onRenderBody = (
  { setHeadComponents },
  { host, namespace, collectorUri, config }
) => {
  if (process.env.NODE_ENV !== `production`) {
    return null
  }

  if (!host || !collectorUri) {
    return null
  }

  setHeadComponents([
    <script
      key={`gatsby-plugin-snowplow-tracker`}
      dangerouslySetInnerHTML={{
        __html: `
            ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
            p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
            };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
            n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","${host}","snowplow"));
            if (typeof snowplow === "function") {
              snowplow('newTracker', '${namespace}', '${collectorUri}', ${JSON.stringify(config)});
            }
          `
      }}
    />
  ])
}