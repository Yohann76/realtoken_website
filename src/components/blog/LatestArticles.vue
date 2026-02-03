<template>
  <section id="blog" class="section blog-preview">
    <div class="section-heading compact">
      <p class="tag">{{ $t('blog.tag') }}</p>
      <h2>{{ $t('blog.title') }}</h2>
      <p>{{ $t('blog.description') }}</p>
    </div>
    <div class="articles-grid" v-if="articles.length">
      <ArticleCard 
        v-for="article in articles" 
        :key="article.slug" 
        :article="article" 
      />
    </div>
    <div class="blog-cta" v-if="articles.length">
      <router-link to="/blog" class="primary outline">
        {{ $t('blog.viewAll') }}
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { getLatestArticles } from '../../utils/blog.js'
import ArticleCard from './ArticleCard.vue'

const { locale } = useI18n()
const articles = ref([])

onMounted(async () => {
  articles.value = await getLatestArticles(3, locale.value)
})
</script>

<style scoped>
.blog-preview {
  padding: 80px min(6vw, 80px) 100px;
  max-width: 1120px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.blog-preview :deep(.section-heading) {
  text-align: center;
  max-width: 520px;
  margin: 0 auto 56px;
}

.blog-preview :deep(.tag) {
  justify-content: center;
}

.blog-preview :deep(.tag::before) {
  display: none;
}

.blog-preview :deep(.section-heading h2) {
  font-size: clamp(1.75rem, 2.5vw, 2.5rem);
  font-weight: 600;
  margin: 12px 0 16px;
  letter-spacing: -0.02em;
}

.blog-preview :deep(.section-heading p) {
  color: rgba(255, 255, 255, 0.72);
  font-size: 1rem;
  line-height: 1.65;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 0;
}

.blog-cta {
  margin-top: 40px;
  text-align: center;
}

.primary {
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 12px 28px;
  border-radius: 999px;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #fff;
  text-decoration: none;
}

.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(255, 140, 66, 0.4);
  border-color: var(--color-orange);
  color: var(--color-orange);
}
</style>

