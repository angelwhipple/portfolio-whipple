---
title: "Frontend Design & Implementation"
layout: doc
---

# A5: Frontend Design & Implementation

## Links
- [Vercel](https://crash-frontend-seven.vercel.app/)
- [Repo](https://github.com/angelwhipple/crash-frontend)

## Deliverables
- [x] Deployment to Vercel
- [ ] Full set of working components for ONE concept (unstyled)
- [x] Heuristic evaluation & writeup

## Heuristic evaluation
- Design decisions supporting/violating heuristics? Suggestions? Any tradeoffs?

1. **Usability**
   - Core features like work communities and the map are pretty **discoverable**. You are directed to join a community right after logging in, and pages like the map or the community homepage are just a click away by their icon in the navbar.
   - The ability to create a roommate group or a new community beyond the start screen could be more **discoverable**. In the wireframe it is easy to find/join other communities & groups, but it is somewhat unclear where to create them.
   - The interface ensures **pleasantness** with a simple and consistent color scheme. 
   - Another contributor to **pleasantness** are the use of icons to easily denote different tabs, and the different types of items on the map (communities, roommate groups, events).
2. **Physical**
   - The community homepage, which you can find by clicking the logo in the navbar, does a good job at conveying **situational context**. It does this by indicating which tab of the sidebar menu is active with an underline. 
   - Also adding **situational context** on the community homepage, is the "Active Community" dropdown. Since users can potentially be members of multiple communities, the dropdown conveys that there could be multiple and which one they're currently looking at.
   - The map could do a much better job at providing **situational context** for the scope of the content you're viewing. It should be clearer whether you're viewing groups and events only within your community, or all communities globally.
   - Another way I could improve **situational context** on the map view is with filters. It should be easily toggleable and clear whether you're only locating communities, roommate groups, events, or all three.
   - The navbar could provide better **situational context** by highlighting or filling the icon for the currently active tab.
   - The search bar obeys **Fitt's Law** pretty well in that it is persistent across any page. A user will always know to go to the top of the page to search for a group, event, community, etc and be brought to the appropriate page.
   - To better adhere to **Fitt's Law**, the "see more" buttons on the community homepage could be made bigger or discarded of entirely in exchange for just clicking anywhere within an entity to view more info about it.
3. **Linguistic**
   - The interface does a good job at **speaking a user's language** with descriptive strings like "join/create a community," "roommate group," "X sent you a friend/roommate request," and "Y wants to join your community." These help to create clear distinctions between the idea of communities and roommate groups, or roommates and friendships, as opposed to referring to the more general concepts of Groups and Requests.
   - The map page UI provides users an **information scent** by indicating which community an event or roommate group is being hosted under. This gives users a clue to events and groups only being accessible through a verified work/school community.

## Visual design study
- Collage inspiration from diverse visual media
- Produce **2** slides focusing on typography and color, respectively
- Annotate with design choices to explore