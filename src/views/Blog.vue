<template>
  <div class="blog-page">
    <header class="blog-header">
      <Navigation />
      <div class="header-content">
        <p class="tag">{{ $t('blog.tag') }}</p>
        <h1>{{ $t('blog.pageTitle') }}</h1>
        <p class="lead">{{ $t('blog.pageDescription') }}</p>
      </div>
    </header>

    <section class="blog-section">
      <div class="articles-container" v-if="articles.length">
        <ArticleCard 
          v-for="article in articles" 
          :key="article.slug" 
          :article="article" 
        />
      </div>
      <div v-else class="loading">
        <p>{{ $t('blog.loading') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { loadArticles } from '../utils/blog.js'
import Navigation from '../components/Navigation.vue'
import ArticleCard from '../components/blog/ArticleCard.vue'

const { locale } = useI18n()
const articles = ref([])

const fetchArticles = async () => {
  articles.value = await loadArticles(locale.value)
}

onMounted(fetchArticles)
watch(locale, fetchArticles)
</script>

<style scoped>
.blog-page {
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(10, 31, 68, 0.98), rgba(5, 15, 36, 0.95));
  color: #f8fbff;
}

.blog-header {
  padding: 48px min(8vw, 120px) 80px;
  background:
    linear-gradient(rgba(10, 31, 68, 0.88), rgba(10, 31, 68, 0.95)),
    url('https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1600&q=80')
      center/cover;
}

.header-content {
  max-width: 720px;
  margin-top: 64px;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-orange);
}

.tag::before {
  content: '';
  width: 24px;
  height: 1px;
  background: var(--color-orange);
}

h1 {
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  line-height: 1.1;
  margin: 24px 0;
  color: #fff;
}

.lead {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.82);
  margin-top: 16px;
}

.blog-section {
  padding: 96px min(8vw, 120px);
}

.articles-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 32px;
}

.loading {
  text-align: center;
  padding: 80px 20px;
  color: rgba(255, 255, 255, 0.6);
}
</style>

