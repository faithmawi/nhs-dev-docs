---
layout: base.njk
title: The OIDC login flow
---

 ## Overview
 The goal of the OIDC authorisation code flow is for the relying party (your service) to obtain an ID Token from the OIDC provider (NHS login).
 
 The ID Token contains identifying information about the user (claims), such as family name, date of birth, and NHS number. Further claims can be obtained via the userinfo endpoint. 
 
 The claims returned are based on the scopes specified in the original auth request - see table 11 of the EIS for more information. 
 
 The ID Token also contains information about authentication mechanisms used and the level to which a user’s identity has been verified - these are called vectors of trust, see the EIS for more information.

 ## Initiating authorisation Flow
 The first step involves the client sending a request to NHS login with the desired parameters (example included here). These include your identifying information, such as client_id, and scopes, which will ultimately determine the returned claims.

 ## Completing authorisation Flow
 NHS login will return an authorisation code, which you then use to obtain the ID Token. This is done by making a request to the NHS login token endpoint. The token endpoint requires authentication via private_key_jwt method. The returned ID Token must be validated before it can be used within your service.

 ***
## Want to edit this page?
1. Click this [link](https://github.com/faithmawi/nhs-dev-docs)
2. Next, click on the **src** file
2. Then click the edit button in the top right of the document
3. Make sure you click **Commit changes** when you're done