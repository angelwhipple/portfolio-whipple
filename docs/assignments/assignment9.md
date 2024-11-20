---
title: "Project Phase 3: Convergent Design"
layout: doc
---

# Project Phase 3: Convergent Design

## Concepts
1. **Concept:** Grouping
   - **Purpose:** Allow invited users to come together, pool resources, and complete tasks together
   - **Operational principle:** A user creates a group and invites other users to join, making them an organizer. Group members can track their pooled resources, and distribute said resources among themselves.
   - **State**
     - groups: **set** Group
     - name: groups -> **one** String
     - owner: groups -> **one** User
     - members: groups -> **set** User
     - currentValue: groups -> **one** Integer
     - cycleStartDate: groups -> **one** Date
     - cycleDuration: groups -> **one** Integer
     - contributionFrequency: groups -> **one** Integer
     - contributionAmount: groups -> **one** Integer
     - currentRound: groups -> **one** Integer
   - **Actions**
      ```
        create()
        disband()
        addMember()
        removeMember()
        getMembers()
        getGroup()
        getOwner()
        getCurrentRound()
        setCurrentRound()
        getContributionFrequency()
        setContributionFrequency()
        getContirbutionAmount()
        setContributionAmount()
        contribute()
        disburse()
      ```
2. **Concept:** Permissioning
   - **Purpose:**
   - **Operational principle:** 
   - **State:**
     - organizers: **set** User
     - members: **set** User
   - **Actions:**
      ```
        addMemberPrivileges(u: User)
        addOrganizerPrivileges(u: User)
        getRoles(u: User)
      ```

## Dependency Diagram

## Synchronizations

## Visual Design Study
[Link to slides](https://docs.google.com/presentation/d/1Quqzt2-apsNIZY8JpYUU5dHNnswlzgmrzjgr9w5SKcY/edit?usp=sharing)

## Wireframes
[Figma link](https://www.figma.com/proto/MVGBqp7x2k5w4ne2zxCgS1/6.1040-Oscar-Prototype?node-id=9-4&node-type=canvas&t=K10lI56XIkc2Bq7r-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A4&show-proto-sidebar=1)

## Heuristic Evaluation
#### Usability

#### Physical

#### Linguistic
- Our app's wireframe seems to speak a user's language well by using commonplace, nontechnical phrases like "Join a group," "Contribute to pot," etc
- We provide helpful confirmation messages like "Message sent," "SOS sent," and "Invitation sent" to help users evaluate whether they've successfully executed a task
- On a more literal level, our app could speak a user's language even better by having a translation option, since we are targeting more culturally diverse audiences
- Our buttons are labeled quite descriptively with phrases like "Schedule meeting," "Organize/join a group," and "Generate winner," all of which provide users a good information scent for how they can execute certain tasks
- We could provide an even better information scent by adding some central text like "My Groups" or "Group Dashboard" to the page where members/organizers can view all the groups they've joined 

## Project Plan
- Our team will prioritize Permissioning and Scheduling in P4. If there is additional time, we will also attempt to implement Grouping. 
- In P5, we will implement Notifying, Messaging, and if needed Grouping.

#### P3 Tasks (DEADLINE: NOVEMBER 20th)
- [ ] Heuristic evaluation
  - **Yonas:** Usability criteria
  - **Manasa:** Physical
  - **Angel:** Linguistic
- [ ] Define concept states and actions
  - **Ashi:** Scheduling & Messaging
  - **Manasa:** Notifying
  - **Angel:** Grouping & Permissioning
- [ ] **Angel:** Synchronizations

#### P4 Tasks (DEADLINE: NOVEMBER 27th)
- [x] **Angel:** Setup Vercel deployment and MongoDB
- [ ] Implement Permissioning
  - [ ] **Ashi:** Implement the back-end
    - Create a data model 
    - Create the data representation 
    - Develop RESTful routes 
  - [ ] **Manasa:** Implement the front-end
    - Implement basic component functionality and reactivity 
    - Front-end data store 
    - Synthesize components into views 
- [ ] Implement Scheduling
  - [ ] **Angel:** Implement the back-end
    - Create a data model 
    - Create the data representation 
    - Develop the RESTful Routes 
  - [ ] **Yonas:** Implement the front-end:
    - Implement basic component functionality and reactivity
    - Front-end data store
    - Synthesize components into views

#### Deadlines
- Back-End: **Due Nov 22, 2024 10:00 PM** 
- Pre-Debug Front-End and Back-End: **Due Nov 25, 2024 8:00 PM** 
- Final Alpha Deployment: **Due Nov 27, 2024 11:59 PM**

#### Backup plan
If we're cutting it close before a deadline, we can reduce the scope of our Scheduling concept by scrapping of some of the intended actions (i.e recommending scheduled times). We've also agreed that we're okay with dropping our Messaging concept if we run low on time, as it is an additional feature but not central to the core functionality of our app. If a pair realizes they can’t implement a concept (or a section of the concept) by the deadline, first, ask for help from the other pair. We'll attempt a simpler implementation or ask Dana for guidance before scrapping any concepts completely. We can also redistribute the work, and at worst switch pairs to get some additional hands on the concept. 

