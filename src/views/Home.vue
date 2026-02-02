<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import LatestArticles from '../components/blog/LatestArticles.vue'

const { t } = useI18n()

const aboutFeatures = computed(() => [
  {
    title: t('about.features.liquidity.title'),
    description: t('about.features.liquidity.description')
  },
  {
    title: t('about.features.exchange.title'),
    description: t('about.features.exchange.description')
  },
  {
    title: t('about.features.available.title'),
    description: t('about.features.available.description')
  },
  {
    title: t('about.features.accessible.title'),
    description: t('about.features.accessible.description')
  }
])

const applications = computed(() => [
  {
    title: t('application.rmm.title'),
    description: t('application.rmm.description')
  },
  {
    title: t('application.yam.title'),
    description: t('application.yam.description')
  }
])

const resources = computed(() => [
  {
    title: t('ressources.wiki.title'),
    description: t('ressources.wiki.description')
  }
])

const governanceTools = computed(() => [
  {
    title: t('governance.protocol.title'),
    description: t('governance.protocol.description')
  },
  {
    title: t('governance.forum.title'),
    description: t('governance.forum.description')
  },
  {
    title: t('governance.tally.title'),
    description: t('governance.tally.description')
  }
])

const steps = computed(() => [
  {
    number: '01',
    title: t('process.step1.title'),
    text: t('process.step1.text')
  },
  {
    number: '02',
    title: t('process.step2.title'),
    text: t('process.step2.text')
  },
  {
    number: '03',
    title: t('process.step3.title'),
    text: t('process.step3.text')
  }
])

const stats = computed(() => [
  { label: t('stats.assets'), value: '$128M' },
  { label: t('stats.members'), value: '18 200+' },
  { label: t('stats.regMarketcap'), value: t('stats.comingSoon') },
  { label: t('stats.votes'), value: t('stats.inProgress') }
])
</script>

<template>
  <div class="landing">
    <header class="hero">
      <div class="hero-content">
        <p class="tag">{{ $t('hero.tag') }}</p>
        <h1>
          {{ $t('hero.title') }}
          <span>{{ $t('hero.titleSpan') }}</span>
        </h1>
        <p class="lead">
          {{ $t('hero.lead') }}
        </p>
        <div class="hero-cta">
          <button class="primary filled">{{ $t('hero.ctaDashboard') }}</button>
          <button class="primary outline">{{ $t('hero.ctaVision') }}</button>
        </div>
        <div class="trust-points">
          <div>
            <strong>{{ $t('hero.trustSec') }}</strong>
            <span>{{ $t('hero.trustSecDesc') }}</span>
          </div>
          <div>
            <strong>{{ $t('hero.trustLloyds') }}</strong>
            <span>{{ $t('hero.trustLloydsDesc') }}</span>
          </div>
          <div>
            <strong>{{ $t('hero.trustChainlink') }}</strong>
            <span>{{ $t('hero.trustChainlinkDesc') }}</span>
          </div>
        </div>
      </div>
    </header>

    <section id="about" class="section about">
      <div class="section-heading">
        <p class="tag">{{ $t('about.tag') }}</p>
        <h2>{{ $t('about.title') }}</h2>
        <p>
          {{ $t('about.description') }}
        </p>
      </div>
      <div class="features">
        <article v-for="feature in aboutFeatures" :key="feature.title">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </article>
      </div>
    </section>

    <section id="application" class="section application">
      <div class="section-heading compact">
        <p class="tag">{{ $t('application.tag') }}</p>
        <h2>{{ $t('application.title') }}</h2>
      </div>
      <div class="cards">
        <article v-for="app in applications" :key="app.title" class="card">
          <h3>{{ app.title }}</h3>
          <p>{{ app.description }}</p>
        </article>
      </div>
    </section>

    <section id="ressources" class="section ressources">
      <div class="section-heading compact">
        <p class="tag">{{ $t('ressources.tag') }}</p>
        <h2>{{ $t('ressources.title') }}</h2>
      </div>
      <div class="cards">
        <article v-for="resource in resources" :key="resource.title" class="card">
          <h3>{{ resource.title }}</h3>
          <p>{{ resource.description }}</p>
        </article>
      </div>
    </section>

    <section id="governance" class="section governance">
      <div class="section-heading compact">
        <p class="tag">{{ $t('governance.tag') }}</p>
        <h2>{{ $t('governance.title') }}</h2>
      </div>
      <div class="cards">
        <article v-for="tool in governanceTools" :key="tool.title" class="card">
          <h3>{{ tool.title }}</h3>
          <p>{{ tool.description }}</p>
        </article>
      </div>
    </section>

    <section id="process" class="section process">
      <div class="section-heading compact">
        <p class="tag">{{ $t('process.tag') }}</p>
        <h2>{{ $t('process.title') }}</h2>
      </div>
      <div class="timeline">
        <article v-for="step in steps" :key="step.number" class="step">
          <span class="step-number">{{ step.number }}</span>
          <div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <section id="stats" class="section stats">
      <div class="section-heading compact">
        <p class="tag">{{ $t('stats.tag') }}</p>
        <h2>{{ $t('stats.title') }}</h2>
      </div>
      <div class="stats-grid">
        <article v-for="item in stats" :key="item.label">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </div>
    </section>

    <LatestArticles />

    <section class="section cta">
      <div>
        <p class="tag">{{ $t('cta.tag') }}</p>
        <h2>{{ $t('cta.title') }}</h2>
        <p>
          {{ $t('cta.description') }}
        </p>
      </div>
      <div class="cta-actions">
        <button class="primary filled">{{ $t('cta.buttonPartner') }}</button>
        <button class="primary outline">{{ $t('cta.buttonLearn') }}</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
:global(body) {
  background: radial-gradient(circle at top, rgba(10, 31, 68, 0.85), #030a1c 60%);
}

.landing {
  color: #f8fbff;
  background: linear-gradient(135deg, rgba(10, 31, 68, 0.98), rgba(5, 15, 36, 0.95));
}

.section {
  padding: 96px min(8vw, 120px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.hero {
  position: relative;
  min-height: 90vh;
  padding: 48px min(8vw, 120px) 120px;
  background:
    linear-gradient(rgba(10, 31, 68, 0.88), rgba(10, 31, 68, 0.95)),
    url('https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1600&q=80')
      center/cover;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 32px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  pointer-events: none;
}

.primary {
  border: 1px solid transparent;
  padding: 12px 28px;
  border-radius: 999px;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary.filled {
  background: var(--color-orange);
  color: var(--color-navy);
  box-shadow: 0 15px 30px rgba(255, 140, 66, 0.35);
}

.primary.ghost {
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
  background: transparent;
}

.primary.outline {
  border-color: rgba(255, 255, 255, 0.4);
  color: #fff;
  background: transparent;
}

.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(255, 140, 66, 0.4);
}

.hero-content {
  position: relative;
  max-width: 720px;
  z-index: 1;
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

h1 span {
  display: block;
  color: var(--color-orange);
}

.lead {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: 32px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.trust-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}

.trust-points div {
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  background: rgba(5, 15, 36, 0.55);
}

.section-heading {
  max-width: 720px;
}

.section-heading.compact {
  max-width: 560px;
}

.section-heading h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  margin: 16px 0;
}

.section-heading p {
  color: rgba(255, 255, 255, 0.78);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 48px;
}

.features article {
  padding: 24px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.application {
  background: rgba(5, 15, 36, 0.8);
}

.ressources {
  background: rgba(10, 31, 68, 0.6);
}

.governance {
  background: rgba(5, 15, 36, 0.8);
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.card {
  padding: 32px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(10, 31, 68, 0.2));
}

.process {
  background: linear-gradient(120deg, rgba(10, 31, 68, 0.9), rgba(5, 15, 36, 0.9));
}

.timeline {
  margin-top: 40px;
  display: grid;
  gap: 24px;
}

.step {
  display: flex;
  gap: 24px;
  padding: 28px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.step-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.2);
}

.stats {
  background: rgba(5, 15, 36, 0.95);
}

.stats-grid {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.stats-grid article {
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  text-align: center;
  background: rgba(10, 31, 68, 0.6);
}

.stats-grid strong {
  display: block;
  font-size: 2rem;
  color: var(--color-orange);
}

.cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  background: linear-gradient(135deg, rgba(255, 140, 66, 0.15), rgba(10, 31, 68, 0.85));
}

.cta-actions {
  display: flex;
  gap: 16px;
}

@media (max-width: 768px) {
  .hero::after {
    inset: 16px;
  }

  .step {
    flex-direction: column;
  }
}
</style>
