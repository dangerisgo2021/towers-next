const isClient = process.browser;
const onRedirectCallback = (appState) => {
  if (isClient) {
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
};

const origin = isClient ? window.location.origin : "http://localhost:3000/";
export const auth0Config = {
  domain: "dangerisgo2021.auth0.com",
  client_id: "YtGukNvXnohMkTan6gtQ859I3k4wWCq5",
  redirect_uri: `${origin}/`,
  onRedirectCallback: onRedirectCallback,
};

