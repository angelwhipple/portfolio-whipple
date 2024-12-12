---
title: "Project Phase 6: User Testing"
layout: doc
---

# Project Phase 6: User Testing & Final Release

## Final Deployment
- [Vercel](https://oscar-kappa.vercel.app/)
- [GitHub repository](https://github.com/angelwhipple/oscar)

## User Study Reports
1. **Manya Anandi, Wellesley College international student**   
   When given the first task of joining a ROSCA group, she easily navigated to the login page and created an account. Unfamiliar with the term ROSCA, she questioned what it was, but clicked on the button to organize a group regardless. When creating the rules and regulations, she was unsure what currency the money being tracked in the pot was going to be and decided on dollars. The second task of making a contribution to the pot was done quickly by Manya. She easily navigated to the right buttons and utilized them correctly. She mentioned however, that the placement of the buttons might be confusing for elderly people (the main demographic of participants in the Kitty parties she’s familiar with) given that removing and contributing are right next to each other. Manya started a conversation with the group with a sense of familiarity, which she later confirmed was because the layout of Oscar was intuitive and similar to other messaging platforms that she uses.   
   Her main pain points were with Sending a Reminder and Distributing the Pot. It was unclear that the functionality to distribute the money was hidden within another button (generate lottery winner) and took some exploration to uncover it. In terms of sending a reminder, manya was a bit confused by the very similar layout and style of the SOS and Payment reminder tabs. She was unclear of her situational context on first use, but after seeing the button color change between red and blue, her confusion cleared up.

2. **Rediet, ROSCA organizer**   
   Rediet was asked to create an organizer account, organize a ROSCA, update the pot amount with contributions received, send a payment reminder, distribute the pot to a randomly selected member, and initiate a conversation.   
   Rediet found creating the group, making contributions, and distributing the pot intuitive and straightforward throughout the process. She expressed her comfort with these features, noting, "The steps were clear, and I easily understood how to execute them without further instructions." This indicates that these features are well-designed, aligning closely with user expectations and behaviors.   
   However, Rediet encountered challenges in other areas, notably in adding members and navigating the messaging features. She needed help figuring out how to add members due to not knowing their usernames, a point of confusion that could indicate a need for a more flexible search or invite mechanism within the app. "I was stuck until I received help with the usernames, which shouldn't be a barrier," she remarked, highlighting a potential improvement in user accessibility and system guidance.   
   Furthermore, Rediet was confused about the distinction between sending a payment reminder and sending an SOS, which suggests that the terminology or the visual differentiation between these functions may not be clear enough. She also struggled to locate the message button, expecting it to be on the home page alongside other primary interaction buttons. She commented, "I kept looking for a way to message directly from the home page, where I feel it should be for quicker access."   
   These observations suggest that while some aspects of the OSCAR organizer interface are user-friendly and effective, others may benefit from redesigning to enhance user understanding and accessibility.

3. **Tarak**   
   Tarak's experience with the site revealed several insights into its functionality and usability. During the login process, he encountered confusion in navigating, where he suggested that the login button should be more placed on the main home page for easier access. Tarak created 2 accounts during the testing, once as an organizer and once as a member.   
   When he joined as a member, I sent him a join group invite from my account (as an organizer). He was easily able to navigate to the invitations page and accept my invite. He immediately opened the group but was confused to see that the member had the ability to generate the lottery winner and then disburse the funds to the winner. The process of contributing to the pot was fairly straightforward, but he suggested that the alerts be slightly longer since he feels that some users (especially elderly users/ users with reading disabilities) would not be able to read the alerts quick enough before they vanish. Navigation was a bit challenging when he was trying to go from the accounting page to the home page. “How do I go back to home?” he remarked. He later realized that there was a back button but wished that even the home button on the top bar would also have the same functionality even when on the Group view. He also noticed that the Home button on the top right was underlined (saying that the page is the Home page) even when he was in the Accounting view (which shouldn’t be considered as a Home page according to him) which changed the situational context of the site.   
   When he logged in as an organizer, he had fewer troubles. He said the process of creating the groups was “very easy” and was “organized and clean”. It took him a while to figure out what the notifications did at first and if they were any different from when he was in the member view but he quickly realized they were the same thing. Messaging within a group chat was pretty intuitive for him as well but he wished it simulated what the Messages app looks like on the IPhone where senders messages are on the right and receivers messages on the left for a better design.    


## Design Opportunities
1. **Make inviting members easier (Severity: Major, Level: Conceptual)**   
   - **Flaw:** Rediet struggled with adding members because she did not know their usernames.
   - This issue manifested when Rediet could not proceed without external help, indicating a breakdown across the gulf of execution. 
   - **Solution:** Implement a more intuitive member addition feature, such as an email invite system or a searchable directory within the app. This would reduce dependency on exact username knowledge and align with common social and professional network practices.
2. **Redesign the messaging interface (Severity: Minor, Level: Physical)**   
   - By redesigning the group chat layout to mirror familiar smartphone messaging apps, the platform can have users' existing mental models of communication interfaces. Having a clear visual differentiation between sent and received messages can enhance the overall chat user experience and can make the communication feature more intuitive and engaging.
3. **Clarify terminology (Severity: Minor, Level: Linguistic)**   
   - **Flaw:** Confusion between 'sending a payment reminder' and 'sending SOS.'   
   - This confusion could lead to misuse of features or hesitation, as observed when Rediet was unsure which option to select for appropriate communication.
   - **Solution:** Refine the interface terminology and provide brief, clear descriptions or tooltips for each action. Testing alternative labels and gathering feedback could also help identify more intuitive terms.   
4. **Account Recovery (Severity: Major, Level: Conceptual)**
   - **Flaw:** When a user of our Oscar app loses/forgets their username and password, there is no account recovery method. 
   - During a conversation after the test, Rediet raised an issue that sparked a huge improvement area. She said, “What if I forgot my password the next time I want to access my account? “. Account recovery methods were common in most applications, especially those involving money. She expected similar account recovery methods, but our application was short on that regard.
   - **Solution:** During the signup process, we can request users to provide their phone number and email address so that when they forget their username or password, they can recover their account by providing this extra information.
5. **Messaging Button Accessibility (Severity: Moderate, Level: Physical)**
   - **Flaw:** The placement of the messaging button on the navigation bar deviates from user expectations, which has led to navigation challenges.
   - Rediet experienced frustration and a slowdown in task completion as she searched for the messaging feature, expecting it to be more accessible on the home page along with other buttons and functionalities.
   - **Solution:** Redesign the home page layout to include a direct messaging shortcut, ensuring that essential communication tools are immediately accessible from the main interface.

## Design Revisions
1. **Factored Grouping into Grouping & Accounting:** We decoupled the payment/accounting logic from the concept of grouping users together. This helped generalize our implementation, allowing for more interesting syncs.
2. **Expanded scope of Permissioning:** We expanded user permissions from being field of ```Authenticating.User``` to being a standalone concept. This allowed us to broaden functionality and dynamically display content based on a user's role (member or organizer).
3. **Deprioritized Scheduling:** Since Scheduling was not a central feature of our app, we excluded it from the final implementation. Instead, we prioritized concepts like Grouping, Accounting, and Messaging that spoke to our value proposition of community-based financial growth.
4. **Extended Grouping with requests:** From user testing, we determined users would appreciate a more flexible invite mechanism or way of joining ROSCA groups on the app. As a solution we added groups Requests in addition to Invites so members can search for their ROSCA among a list, then directly request to join.
5. **Changed strings throughout the app:** Because users didn't know what some actions meant, executing certain tasks was difficult even though all the needed actions were available. In response, we tried to provide better situational context by changing strings like "Write a message" to "Express your financial emergency", and "Generate Lottery Winner" to "Issue Payout"

## Demo
[Video](https://drive.google.com/file/d/1-5Kgy_Wzc6c3HdhvlnTmOHtPWcy0Onir/view?usp=drive_link)