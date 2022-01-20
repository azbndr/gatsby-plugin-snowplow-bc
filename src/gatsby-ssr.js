import * as React from 'react';
import PropTypes from 'prop-types';

const JSTrackerFile = () => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;n.crossorigin="anonymous";
n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","./sp-456123.js","snowplow"));
      `,
    }}
  />
);

const SnowplowInstall = ({ namespace, collector, config }) => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `snowplow('newTracker', '${namespace}', '${collector}', ${JSON.stringify(config)});`,
    }}
  />
);
SnowplowInstall.propTypes = { namespace: PropTypes.string, collector: PropTypes.string, config: PropTypes.object };
SnowplowInstall.defaultProps = { namespace: 'sp', collector: '', config: {} };

exports.onRenderBody = ({ setHeadComponents }, { namespace, collector, config }) => {
  return setHeadComponents([
    <JSTrackerFile key="gatsby-plugin-snowplow-bc-jsfile" />,
    <SnowplowInstall
      namespace={namespace}
      collector={collector}
      config={config}
      key="gatsby-plugin-snowplow-bc-install"
    />,
  ]);
};
