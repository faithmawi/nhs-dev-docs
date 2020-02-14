---
layout: base.njk
title: Linking to “Manage NHS login Settings” Page (Version 1.0)
---
## Introduction

**NHS login currently allows users to:**
-  change their email address
- change their password
- change their mobile phone number
- delete their NHS login

## Technical Details

NHS login supports the parameter asserted_login_identity as part of the OIDC flow. This allows the user to seamlessly access the “Manage NHS login Settings” functionality from the partner service without the need for re-authentication. 
***
1. asserted_login_identity will be a querystring parameter 
2. parameter content is a signed jwt
3. the asserted_login_identity token is a one-time token(TTL 60 sec)
***
Refer to the **NHS login Interface Specification – Federation** document for technical details. In the context of document :
- RP1 is partner service 
- RP2 is NHS login


## Technical Details - Parameter : asserted_login_identity

|asserted_login_identity|

***
## Want to edit this page?
1. Click this [link](https://github.com/faithmawi/nhs-dev-docs)
2. Next, click on the **src** file
2. Then click the edit button in the top right of the document
3. Make sure you click **Commit changes** when you're done