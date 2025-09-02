// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "untethered-labs",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const web = new sst.aws.Nextjs("MyWeb", {
      environment: {
        NODE_ENV: "production"
      },
      // domain: "endurancelabs.co" // Commented out until DNS is configured
    });

    return {
      url: web.url,
      customUrl: web.domain
    };
  },
});
