<script setup>
const benefits = [
  {
    title: 'Rendement tokenisé',
    description:
      'Distribuez des loyers quotidiens vers les portefeuilles des membres via des smart contracts audités.'
  },
  {
    title: 'Liquidité 24/7',
    description:
      'Accédez à des parts immobilières fractionnées négociables en toute transparence sur la DAO.'
  },
  {
    title: 'Conformité intégrée',
    description:
      'Intégrez KYC/KYB, gouvernance communautaire et reporting temps réel sur chaque actif.'
  }
]

const steps = [
  {
    number: '01',
    title: 'Acquisition & due diligence',
    text: 'Sélection d’actifs immobiliers prime et audits juridiques avant tokenisation.'
  },
  {
    number: '02',
    title: 'Tokenisation en chaîne',
    text: 'Création de parts numériques (ERC-20) adossées aux flux économiques de chaque bien.'
  },
  {
    number: '03',
    title: 'Distribution & gouvernance',
    text: 'Investisseurs globaux participent, votent et perçoivent les revenus directement on-chain.'
  }
]

const stats = [
  { label: 'Actifs sous gestion', value: '$128M' },
  { label: 'Taux d’occupation moyen', value: '97%' },
  { label: 'Membres vérifiés', value: '18 200+' },
  { label: 'Audits smart contracts', value: '6 complétés' }
]
</script>

<template>
  <div class="landing">
    <header class="hero">
      <nav class="top-nav">
        <div class="logo">
          <div class="cube"></div>
          <div>
            <span>RealToken DAO</span>
            <small>Asset Management</small>
          </div>
        </div>
        <div class="nav-links">
          <a href="#application">Application</a>
          <a href="#ressources">Ressources</a>
          <a href="#governance">Gouvernance</a>
        </div>
        <button class="primary ghost">Contacter nous</button>
      </nav>

      <div class="hero-content">
        <p class="tag">Tokenisation immobilière on-chain</p>
        <h1>
          Investissez dans des actifs réels
          <span>avec la précision d’un protocole DeFi.</span>
        </h1>
        <p class="lead">
          RealToken DAO unifie la solidité d’un trust immobilier et la transparence Web3. Créez, gérez et
          échangez des parts fractionnées adossées à des immeubles premium en quelques clics.
        </p>
        <div class="hero-cta">
          <button class="primary filled">Accéder au dashboard</button>
          <button class="primary outline">Découvrir la vision</button>
        </div>
        <div class="trust-points">
          <div>
            <strong>SEC-ready</strong>
            <span>Cadre juridique validé</span>
          </div>
          <div>
            <strong>Assurance Lloyd’s</strong>
            <span>Protection locative</span>
          </div>
          <div>
            <strong>Oracle Chainlink</strong>
            <span>Reporting automatisé</span>
          </div>
        </div>
      </div>
    </header>

    <section id="about" class="section about">
      <div class="section-heading">
        <p class="tag">À propos</p>
        <h2>Le pont entre la pierre et la finance programmable.</h2>
        <p>
          Chaque token RealToken représente une part vérifiable d’un portefeuille immobilier. Les flux de
          trésorerie sont versés directement aux détenteurs tandis que la DAO supervise gouvernance, maintenance et
          expansion stratégique.
        </p>
      </div>
      <div class="features">
        <article>
          <h3>Hero section</h3>
          <p>Promesse forte et CTA double, sur fond immersif d’un actif réel tokenisé.</p>
        </article>
        <article>
          <h3>Key benefits</h3>
          <p>Cartes modulaires mettant en avant rendement, liquidité et conformité.</p>
        </article>
        <article>
          <h3>How it works</h3>
          <p>Processus en trois étapes, clair pour les nouveaux investisseurs Web3.</p>
        </article>
        <article>
          <h3>Stats & confiance</h3>
          <p>Preuves sociales, audits et métriques pour réduire le temps de décision.</p>
        </article>
      </div>
    </section>

    <section id="benefits" class="section benefits">
      <div class="section-heading compact">
        <p class="tag">Bénéfices clés</p>
        <h2>Professionnalisez la tokenisation immobilière.</h2>
      </div>
      <div class="cards">
        <article v-for="benefit in benefits" :key="benefit.title" class="card">
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.description }}</p>
        </article>
      </div>
    </section>

    <section id="process" class="section process">
      <div class="section-heading compact">
        <p class="tag">Process</p>
        <h2>Comment la DAO orchestre chaque actif.</h2>
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
        <p class="tag">Preuves</p>
        <h2>Des indicateurs vérifiables, en temps réel.</h2>
      </div>
      <div class="stats-grid">
        <article v-for="item in stats" :key="item.label">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </div>
    </section>

    <section class="section cta">
      <div>
        <p class="tag">Prêt à lancer</p>
        <h2>Déployez votre prochain actif RealToken.</h2>
        <p>
          Connectez votre wallet, sélectionnez un véhicule juridique et laissez la DAO orchestrer l’émission, la
          distribution et le marché secondaire.
        </p>
      </div>
      <div class="cta-actions">
        <button class="primary filled">Tokeniser un bien</button>
        <button class="primary outline">Parler à l’équipe</button>
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

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 64px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.logo small {
  display: block;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.72);
  letter-spacing: 0.2em;
}

.cube {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, var(--color-orange), #ffb97a);
  clip-path: polygon(0 0, 70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%);
  box-shadow: 0 10px 30px rgba(255, 140, 66, 0.45);
}

.nav-links {
  display: flex;
  gap: 24px;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
}

.nav-links a:hover {
  color: var(--color-orange);
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

.benefits {
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
  .top-nav {
    flex-direction: column;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero::after {
    inset: 16px;
  }

  .step {
    flex-direction: column;
  }
}
</style>
