---
title: "Backend Design & Implementation"
layout: doc
---

# A4: Backend Design & Implementation

## Links
- [Vercel app](https://crash-backend.vercel.app/)
- [Repo](https://github.com/angelwhipple/crash-backend)

## Concept data models
- [Grouping](https://github.com/angelwhipple/crash-backend/blob/main/server/concepts/grouping.ts)
- [Eventing](https://github.com/angelwhipple/crash-backend/blob/main/server/concepts/eventing.ts)
- [Requesting](https://github.com/angelwhipple/crash-backend/blob/main/server/concepts/requesting.ts)
- [Locating](https://github.com/angelwhipple/crash-backend/blob/main/server/concepts/locating.ts)
- [Expiring](https://github.com/angelwhipple/crash-backend/blob/main/server/concepts/expiring.ts)
- [Authenticating](https://github.com/angelwhipple/crash-backend/blob/main/server/concepts/authenticating.ts)
- [Sessioning](https://github.com/angelwhipple/crash-backend/blob/main/server/concepts/sessioning.ts)

## Syncs
[routes.ts](https://github.com/angelwhipple/crash-backend/blob/main/server/routes.ts)

## Design Reflection
The main ambiguity I encountered concerned the role my Expiring concept actually played with respect to other concepts. Originally I intended for Events to expire after they've ended, and for Requests to be optionally set to expire by users. This would have required some app-level sync that would check for requests/events whose expiration dates had passed, and deleting the resources associated with them. 

I ultimately decided that a dedicated Expiring concept wasn't fitting, since my app doesn't initially have any need for timed Requests. Only Events could have used Expiring, but instead opposed setting expiring timers to completely delete an Event on its end date, Events could also be implicitly "hidden" by filtering out Events with an end date in the past.

Another design choice I made, was that to merge the provided FriendRequestDoc with my more general RequestDoc. I made this choice because they basically stored the same information, but the Requesting concept is designed to handle Group, Friend, and Event requests. This allowed me to reuse API routes and methods from Requesting for multiple purposes.

