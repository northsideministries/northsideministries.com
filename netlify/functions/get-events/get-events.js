const msal = require('@azure/msal-node')
const process = require('process')
const qs = require('qs')

const handler = async function (event) {
  // apply our function to the queryStringParameters and assign it to a variable
  const API_PARAMS = qs.stringify(event.queryStringParameters)
  console.log('API_PARAMS', API_PARAMS)

  // Obtain OAuth token using MSAL
  const { MS_APP_ID } = process.env
  const msalConfig = {
    auth: {
      clientId: `${MS_APP_ID}`,
      redirectUri: 'http://localhost:8888'
    }
  };
  const msalRequest = {
    scopes: [
      'calendars.readwrite'
    ]
  }
  const msalClient = new msal.PublicClientApplication(msalConfig);

  // Login
  try {
    const authResult = await msalClient.loginPopup(msalRequest);
    // const token = authResult.accessToken;

    msalClient.setActiveAccount(authResult.account);

    // Create an authentication provider
    const authProvider = new MSGraphAuthCodeMSALBrowserAuthProvider
      .AuthCodeMSALBrowserAuthenticationProvider(msalClient, {
        account: msalClient.getActiveAccount(),
        scopes: msalRequest.scopes,
        interactionType: msal.InteractionType.PopUp
      });
  
    // Initialize the Graph client
    const graphClient = MicrosoftGraph.Client.initWithMiddleware({authProvider});
  
    // Logout
    msalClient.logout();
  } catch (error) {
    console.error(error);
  }

  return {
    statusCode: 200,
    body: ''
  }
}

module.exports = { handler }
