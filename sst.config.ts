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
    // Define secrets
    const MAILCHIMP_API_KEY = new sst.Secret("MAILCHIMP_API_KEY");
    const MAILCHIMP_AUDIENCE_ID = new sst.Secret("MAILCHIMP_AUDIENCE_ID");

    const web = new sst.aws.Nextjs("MyWeb", {
      environment: {
        NODE_ENV: "production"
      },
      link: [MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID]
    });

    return {
      url: web.url
    };
  },
});
