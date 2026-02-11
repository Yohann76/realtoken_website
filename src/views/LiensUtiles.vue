<template>
  <div class="app-hub-page">
    <header class="hero">
      <div class="hero-content">
        <p class="tag">{{ $t('liensUtiles.tag') }}</p>
        <h1>{{ $t('liensUtiles.pageTitle') }}</h1>
        <p class="lead">{{ $t('liensUtiles.pageDescription') }}</p>
      </div>
    </header>

    <template v-for="(section, index) in sections" :key="section?.title">
      <section
        v-if="section"
        :class="['section', 'section-inner-wrap', sectionClass(index)]"
      >
        <div class="section-inner">
          <div class="section-heading compact">
            <p class="tag">{{ section.tag }}</p>
            <h2>{{ section.title }}</h2>
          </div>

          <!-- Section with main app (RMM, YAM, REG): main card left, tools right -->
          <div v-if="section.main" class="hub-row">
            <div class="hub-main-card">
              <div class="hub-main-icon" aria-hidden="true"></div>
              <h3>{{ section.main.title }}</h3>
              <p>{{ section.main.description }}</p>
              <div class="hub-main-footer">
                <a
                  :href="section.main.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="app-link"
                >
                  {{ section.main.linkText }}
                  <span class="app-link-arrow" aria-hidden="true">→</span>
                </a>
                <span v-if="section.main.managedBy" class="hub-managed-badge hub-managed-badge--below">{{ $t('liensUtiles.managedBy.' + section.main.managedBy) }}</span>
              </div>
            </div>
            <div class="hub-tools">
              <a
                v-for="(tool, i) in section.tools"
                :key="i"
                :href="tool.href"
                target="_blank"
                rel="noopener noreferrer"
                class="hub-tool-card"
              >
                <span class="hub-tool-title">{{ tool.title }}</span>
                <p class="hub-tool-desc">{{ tool.description }}</p>
                <div class="hub-tool-footer">
                  <span class="hub-tool-icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM5 19h2v-7H3v2h2v5zm2 0h10v-2H7v2zm0-4h10v-2H7v2zm0-6h10V7H7v2z"/>
                    </svg>
                  </span>
                  <span v-if="tool.managedBy" class="hub-managed-badge">{{ $t('liensUtiles.managedBy.' + tool.managedBy) }}</span>
                </div>
              </a>
            </div>
          </div>

          <!-- Section without main (Realtokens): tools grid only -->
          <div v-else class="hub-tools hub-tools--grid">
            <a
              v-for="(tool, i) in section.tools"
              :key="i"
              :href="tool.href"
              target="_blank"
              rel="noopener noreferrer"
              class="hub-tool-card"
            >
              <span class="hub-tool-title">{{ tool.title }}</span>
              <p class="hub-tool-desc">{{ tool.description }}</p>
              <div class="hub-tool-footer">
                <span class="hub-tool-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM5 19h2v-7H3v2h2v5zm2 0h10v-2H7v2zm0-4h10v-2H7v2zm0-6h10V7H7v2z"/>
                  </svg>
                </span>
                <span v-if="tool.managedBy" class="hub-managed-badge">{{ $t('liensUtiles.managedBy.' + tool.managedBy) }}</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </template>

    <!-- Section "Qui gère ces applications ?" (comme Rôle et périmètre) -->
    <section id="who-manages" class="section section-inner-wrap section-legend">
      <div class="section-inner">
        <div class="section-heading compact">
          <p class="tag">{{ $t('liensUtiles.whoManages.tag') }}</p>
          <h2>{{ $t('liensUtiles.whoManages.title') }}</h2>
        </div>
        <div class="legend-cards">
          <article class="legend-card">
            <h3>{{ $t('liensUtiles.whoManages.dao.title') }}</h3>
            <p>{{ $t('liensUtiles.whoManages.dao.description') }}</p>
          </article>
          <article class="legend-card">
            <h3>{{ $t('liensUtiles.whoManages.realt.title') }}</h3>
            <p>{{ $t('liensUtiles.whoManages.realt.description') }}</p>
          </article>
          <article class="legend-card">
            <h3>{{ $t('liensUtiles.whoManages.community.title') }}</h3>
            <p>{{ $t('liensUtiles.whoManages.community.description') }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm, locale } = useI18n()
const SECTION_IDS = ['rmm', 'yam', 'realtokens', 'reg']

const sections = computed(() => {
  const _ = locale.value
  return SECTION_IDS.map((id) => tm(`liensUtiles.sections.${id}`)).filter(Boolean)
})

function sectionClass(index) {
  return index % 2 === 0 ? 'section-navy' : 'section-light'
}
</script>

<style scoped>
.app-hub-page {
  color: #f8fbff;
  background: linear-gradient(135deg, rgba(10, 31, 68, 0.98), rgba(5, 15, 36, 0.95));
}

.hero {
  position: relative;
  padding: 48px min(8vw, 120px) 80px;
  background:
    linear-gradient(rgba(10, 31, 68, 0.88), rgba(10, 31, 68, 0.95)),
    url('https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1600&q=80')
      center/cover;
}

.hero-content {
  max-width: 720px;
  position: relative;
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

.hero h1 {
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  line-height: 1.1;
  margin: 24px 0;
  color: #fff;
}

.lead {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.82);
  margin: 0;
}

/* Full-width sections (same as Home) */
.section-inner-wrap {
  width: 100%;
  max-width: none;
  padding: 80px min(8vw, 120px) 100px;
  margin: 0;
  box-sizing: border-box;
}

.section-navy {
  background: var(--color-navy);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.section-light {
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

/* Section "Qui gère" : fond gris, 3 cartes comme Rôle et périmètre (home) */
.section-legend {
  background: #242424;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.section-legend .section-heading h2 {
  color: #fff;
}

.section-legend .section-heading .tag {
  color: var(--color-orange);
}

.legend-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 0;
}

.legend-card {
  padding: 28px 26px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.legend-card:hover {
  border-color: rgba(255, 140, 66, 0.4);
  background: rgba(255, 255, 255, 0.06);
}

.legend-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 10px;
  letter-spacing: 0.01em;
  color: #fff;
}

.legend-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
}

@media (max-width: 900px) {
  .legend-cards {
    grid-template-columns: 1fr;
  }
}

.section-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.section-heading {
  text-align: center;
  max-width: 520px;
  margin: 0 auto 48px;
}

.section-heading .tag {
  justify-content: center;
}

.section-heading .tag::before {
  display: none;
}

.section-heading h2 {
  font-size: clamp(1.75rem, 2.5vw, 2.5rem);
  font-weight: 600;
  margin: 12px 0 0;
  letter-spacing: -0.02em;
}

.section-navy .section-heading h2 {
  color: #fff;
}

.section-light .section-heading h2 {
  color: #242424;
}

/* Main card (cercle jaune / orange sur fond gris) */
.hub-row {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 40px;
  align-items: start;
}

.hub-main-card {
  padding: 32px 28px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.section-light .hub-main-card {
  background: #fafafa;
  border-color: rgba(0, 0, 0, 0.08);
}

.hub-main-card:hover {
  border-color: rgba(255, 140, 66, 0.5);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.section-light .hub-main-card:hover {
  border-color: rgba(255, 140, 66, 0.35);
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.hub-main-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-orange);
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(255, 140, 66, 0.4);
}

.hub-main-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #fff;
}

.section-light .hub-main-card h3 {
  color: #242424;
}

.hub-main-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
}

.section-light .hub-main-card p {
  color: #5c5c5c;
}

.app-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-orange);
  margin-top: 8px;
  transition: gap 0.2s ease, color 0.2s ease;
}

.app-link:hover {
  color: var(--color-orange-light);
  gap: 10px;
}

.app-link-arrow {
  font-size: 1.1em;
  line-height: 1;
}

.hub-main-footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-top: 12px;
}

.hub-main-footer .app-link {
  margin-top: 0;
}

.hub-main-footer .hub-managed-badge--below {
  margin-top: 0;
}

.hub-managed-badge {
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
}

.section-light .hub-managed-badge {
  color: rgba(0, 0, 0, 0.5);
}

.hub-tool-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  padding-top: 4px;
}

/* Tools list */
.hub-tools {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.hub-tools--grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.hub-tool-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 20px 22px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: inherit;
  text-decoration: none;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease, color 0.2s ease;
}

.section-light .hub-tool-card {
  background: #fafafa;
  border-color: rgba(0, 0, 0, 0.08);
}

.hub-tool-card:hover {
  border-color: rgba(255, 140, 66, 0.4);
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
  color: var(--color-orange);
}

.section-light .hub-tool-card:hover {
  border-color: rgba(255, 140, 66, 0.35);
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  color: var(--color-orange);
}

.section-light .hub-tool-card:hover .hub-tool-title {
  color: var(--color-orange);
}

.hub-tool-title {
  font-size: 1rem;
  font-weight: 600;
  min-width: 0;
  width: 100%;
}

.section-light .hub-tool-title {
  color: #242424;
}

.hub-tool-card:hover .hub-tool-title {
  color: inherit;
}

.hub-tool-desc {
  font-size: 0.88rem;
  line-height: 1.5;
  margin: 0;
  width: 100%;
  min-width: 0;
  color: rgba(255, 255, 255, 0.75);
}

.section-light .hub-tool-desc {
  color: #5c5c5c;
}

.hub-tool-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 140, 66, 0.15);
  color: var(--color-orange);
  transition: background 0.2s ease;
}

.hub-tool-card:hover .hub-tool-icon {
  background: rgba(255, 140, 66, 0.25);
}

@media (max-width: 900px) {
  .hub-row {
    grid-template-columns: 1fr;
  }

  .hub-tools--grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero,
  .section-inner-wrap {
    padding-left: min(6vw, 24px);
    padding-right: min(6vw, 24px);
  }
}
</style>
