---
layout: base.njk
title: Developer Support
---
 We have a public [Slack](https://nhs-login-support-slack-invite.herokuapp.com) where you can contact us for support.

 ## Guidance for generating asymmetric key pair

 You will need to provide a public key when registering your service. This is required for the authentication mechanism on the token endpoint. The steps below explain how to generate that public key and corresponding private key. 

 Full details can be found [here](https://en.wikibooks.org/wiki/Cryptography/Generate_a_keypair_using_OpenSSL).

 |Generate private_key.pem:                                                          |
 |-----------------------------------------------------------------------------------|
 | openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048 |

 |Generate corresponding public_key.pem:                                             |
 |-----------------------------------------------------------------------------------|
 |  openssl rsa -pubout -in private_key.pem -out public_key.pem                      |


 You should now have your key pair. Only send the contents of public_key.pem file when requesting access to a new environment.

 ## Adding the NHS login button to your service
 The NHS login button is available as a [downloadable package](https://github.com/nhsconnect/nhslogin).
 You must follow the [NHS login button guidelines](https://github.com/nhsconnect/nhslogin/raw/master/NHSloginbuttonguidelines.pdf)

 ## Linking your service to our NHS login settings page
 NHS login provides capability for users to change their NHS login settings online, helping to reduce calls into your support desks. To help users do this, NHS login needs you to create a link from your service to the NHS login settings page. Users will need to be logged into your service to use this link.
 Use the [NHS login Link to Settings Page presentation](https://github.com/nhsconnect/nhslogin/raw/master/NHSlogin%20Link%20to%20Settings%20Page%20v1.0.pptx) for guidance on this.

 ## Using NHS login to create or retrieve GP credentials
 If you are an IM1 supplier, learn how to use NHS login to create or retrieve GP credentials. These include an Account ID, ODS Code and Linkage Key. This means users do not have to go their GP practice to register for your service.
 Use the [NHS login GPIC presentation](https://github.com/nhsconnect/nhslogin/raw/master/NHSlogin%20GPIC%20v1.0.pptx) for guidance on this.