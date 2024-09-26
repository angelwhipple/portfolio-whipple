---
title: "Real-world Database Tradeoffs"
lecture: Lecture 7
layout: doc
---

# Real-world Database Tradeoffs
Today, we learned about relational databases. Everything we’d learned up until now had been relatively new to me, but relational databases were something I’d heard about several times before. For the most part, I’ve heard nothing but good things about SQL and its ability to efficiently relate data between tables. Then I remembered a tech talk hosted by Hudson River Trading that I recently went to. The developers actually explained to us the reasoning behind their decision to use a NoSQL database called Redis.

In the world of finance and economics, you’d expect relational databases to be the go-to. Especially in algorithmic trading, where a lot of complex data analysis is done to make predictions and fine-tune trading strategies. Seemingly unrelated and/or unimportant metrics, like a company’s recent publicity and P/E ratio, could together produce trends that are far more useful than the data they represent individually. So one would logically expect the algorithm engineers over at HRT to prefer SQL, and its neat ability to query such data across multiple database tables.

To my surprise however, SQL data structures and schemas have some rigidity that make them less preferable. At HRT, where traders are working with constantly changing, real-time data, horizontal scalability is important. SQL databases and their well-defined rows/columns work to ensure consistency, which is much harder to maintain in more distributed settings. In comes Redis, a flexible, NoSQL alternative designed to handle high volumes of high-velocity trading data.

But there’s still plenty of cases in which SQL is the clear winner. My friend was an economist intern at Walmart this summer, and often told me about her work. As part of her case study on the effects of wage hikes on Walmart associates, she’d use SQL in her daily work to analyze datasets dating back to 1980. Say one table contained data about employee wages, and the other contained data about hours worked. To figure out how much a set of employees made biweekly, she’d join those two tables on the condition the employee IDs (WIN #) matched up. Additionally, she could restrict the output where she wanted to ignore data points above/below some threshold, like requiring the date column to be later than 2016. And with this, she could plot data points from the resulting relation and make some really interesting analyses. All with a single query.