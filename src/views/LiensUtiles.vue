<template>
  <div class="liens-utiles-page">
    <header class="liens-utiles-header">
      <div class="header-content">
        <p class="tag">{{ $t('liensUtiles.tag') }}</p>
        <h1>{{ $t('liensUtiles.pageTitle') }}</h1>
        <p class="lead">{{ $t('liensUtiles.pageDescription') }}</p>
      </div>
    </header>

    <section class="liens-utiles-section">
      <div
        v-for="section in sections"
        :key="section.id"
        v-show="section.links.length"
        class="section-block"
      >
        <h2 class="section-title">{{ $t(section.titleKey) }}</h2>
        <div class="links-grid">
          <a
            v-for="(link, index) in section.links"
            :key="index"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="link-card"
          >
            <span class="link-card-title">{{ $t(link.titleKey) }}</span>
            <span class="link-card-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM5 19h2v-7H3v2h2v5zm2 0h10v-2H7v2zm0-4h10v-2H7v2zm0-6h10V7H7v2z"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const sections = [
  {
    id: 'rmm',
    titleKey: 'liensUtiles.sections.rmm.title',
    links: [
      { titleKey: 'liensUtiles.sections.rmm.links.telegram', href: 'https://t.me/rmm_available_liquidity' },
      { titleKey: 'liensUtiles.sections.rmm.links.dune', href: 'https://dune.com/sigri44/realtoken-rmm' },
      { titleKey: 'liensUtiles.sections.rmm.links.gainOrLoss', href: 'https://analytics.rmm.realtoken.community/' },
      { titleKey: 'liensUtiles.sections.rmm.links.rent2repay', href: 'https://github.com/RealToken-Community/DEVCONTEST-rent2repay' }
    ]
  },
  {
    id: 'yam',
    titleKey: 'liensUtiles.sections.yam.title',
    links: [
      { titleKey: 'liensUtiles.sections.yam.links.viewer', href: 'https://yam.joed.site/' },
      { titleKey: 'liensUtiles.sections.yam.links.report', href: 'https://yam-report.realtoken.community/' }
    ]
  },
  {
    id: 'reg',
    titleKey: 'liensUtiles.sections.reg.title',
    links: [
      { titleKey: 'liensUtiles.sections.reg.links.claim', href: 'https://claim.realtoken.network/reg' },
      { titleKey: 'liensUtiles.sections.reg.links.dune', href: 'https://dune.com/teugos/realtoken-dao-dashboard' },
      { titleKey: 'liensUtiles.sections.reg.links.incentive', href: 'https://vote.realtoken.network/dao/incentive' }
    ]
  },
  {
    id: 'dashboardRealt',
    titleKey: 'liensUtiles.sections.dashboardRealt.title',
    links: [
      { titleKey: 'liensUtiles.sections.dashboardRealt.links.pitsbi', href: 'https://realt.pitsbi.io' },
      { titleKey: 'liensUtiles.sections.dashboardRealt.links.cryptalloc', href: 'https://www.cryptalloc.com/realtlab/' },
      { titleKey: 'liensUtiles.sections.dashboardRealt.links.rentTracker', href: 'https://ehpst.duckdns.org/realt_rent_tracker/' }
    ]
  }
]
</script>

<style scoped>
.liens-utiles-page {
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(10, 31, 68, 0.98), rgba(5, 15, 36, 0.95));
  color: #f8fbff;
}

.liens-utiles-header {
  padding: 48px min(8vw, 120px) 80px;
  background:
    linear-gradient(rgba(10, 31, 68, 0.88), rgba(10, 31, 68, 0.95)),
    url('https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1600&q=80')
      center/cover;
}

.header-content {
  max-width: 720px;
  margin-top: 24px;
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

.liens-utiles-section {
  padding: 48px min(8vw, 120px) 96px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-block {
  margin-bottom: 48px;
}

.section-block:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-orange);
  margin: 0 0 20px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.link-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #f8fbff;
  text-decoration: none;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease, color 0.2s ease;
}

.link-card:hover {
  border-color: rgba(255, 140, 66, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
  color: var(--color-orange);
}

.link-card-title {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4;
  flex: 1;
  min-width: 0;
}

.link-card-icon {
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

.link-card:hover .link-card-icon {
  background: rgba(255, 140, 66, 0.25);
}

@media (max-width: 768px) {
  .liens-utiles-header,
  .liens-utiles-section {
    padding-left: min(6vw, 24px);
    padding-right: min(6vw, 24px);
  }

  .links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
