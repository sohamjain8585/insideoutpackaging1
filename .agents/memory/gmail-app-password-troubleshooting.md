---
name: Gmail app password troubleshooting
description: What to check when nodemailer/Gmail SMTP repeatedly fails with "Username and Password not accepted" (535-5.7.8) even after regenerating the app password.
---

When a Gmail SMTP login fails with error code 535-5.7.8 ("Username and Password not accepted") repeatedly, even after the user says they regenerated the app password:

- The most common root cause is the user pasting their **regular account login password** instead of the 16-character **App Password** from myaccount.google.com/apppasswords. Both fail with the identical error message, so the error alone can't distinguish the two — you have to walk the user through the App Password generation flow explicitly.
- App Passwords require 2-Step Verification to be ON first; if it was just turned on, Google can take a few minutes to fully enable the App Passwords page.
- Defensively trim `GMAIL_USER` and strip whitespace from `GMAIL_APP_PASSWORD` in code (`.replace(/\s+/g, "")`) since Google displays the password with spaces (`abcd efgh ijkl mnop`) and users often paste it verbatim.

**Why:** Repeated identical 535 errors after "regenerating" the secret strongly suggest the user is re-submitting the wrong kind of credential, not a transient issue — worth explicitly re-explaining the App Password UI rather than just re-requesting the secret again.

**How to apply:** After 2 failed attempts with the same 535 error, stop just re-requesting the secret — give the full step-by-step App Password generation walkthrough instead, since the failure mode is usually user confusion, not a code bug.
