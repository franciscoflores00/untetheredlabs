// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "untethered-labs",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const web = new sst.aws.Nextjs("MyWeb", {
      environment: {
        NODE_ENV: "production",
        MAILCHIMP_API_KEY: "330b66f7c02436efa8c1d3e32a8ba626-us6",
        MAILCHIMP_AUDIENCE_ID: "53670cf6f7"
      }
    });

    return {
      url: web.url
    };
  },
});