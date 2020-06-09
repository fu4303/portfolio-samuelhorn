<template>
  <div>
    <h1>{{ $page.project.title }}</h1>
    <div v-html="$page.project.content" />
  </div>
</template>

<page-query>
query Project ($id: ID!) {
  project: project (id: $id) {
    title
    path
    content
  }
}
</page-query>