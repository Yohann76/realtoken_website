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
  background: rgba(5, 15, 36, 0.8);
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-top: 48px;
}

.blog-cta {
  margin-top: 48px;
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

