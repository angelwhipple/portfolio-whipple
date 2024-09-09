---
layout: doc
---

<script setup>
  import {data as assignments} from './assignments/assignments.data';
  import { withBase } from 'vitepress';
</script>

# Assignments

<ol v-if="assignments.length > 0">
  <li v-for="assignment of assignments">
    <a :href="withBase(assignment.url)">{{ assignment.frontmatter.title }}</a>
  </li>
</ol>
<p v-else>
  Nothing here yet!
</p>
