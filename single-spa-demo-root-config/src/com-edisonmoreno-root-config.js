import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@com-edisonmoreno/spa-demo-header",
  app: () => System.import("@com-edisonmoreno/spa-demo-header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@com-edisonmoreno/spa-demo-home",
  app: () => System.import("@com-edisonmoreno/spa-demo-home"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@com-edisonmoreno/spa-demo-test-page",
  app: () => System.import("@com-edisonmoreno/spa-demo-test-page"),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@com-edisonmoreno/navbar",
//   app: () => System.import("@com-edisonmoreno/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
