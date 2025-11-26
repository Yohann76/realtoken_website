<script setup>
const aboutFeatures = [
  {
    title: 'Liquidité',
    description: 'Accédez à des actifs immobiliers tokenisés négociables 24/7 sur les marchés décentralisés.'
  },
  {
    title: 'Échange',
    description: 'Échangez vos tokens RealToken de manière transparente et sécurisée sur l\'écosystème.'
  },
  {
    title: 'Disponible',
    description: 'Des actifs réels accessibles à tous, fractionnés en parts numériques vérifiables.'
  },
  {
    title: 'Accessible',
    description: 'Investissez dans l\'immobilier premium sans barrières traditionnelles ni intermédiaires.'
  }
]

const applications = [
  {
    title: 'RMM',
    description: 'RealToken Market Maker - Plateforme de liquidité et d\'échange pour les tokens RealToken, facilitant les transactions et la découverte de prix.'
  },
  {
    title: 'YAM',
    description: 'Your Asset Manager - Interface de gestion pour suivre vos actifs tokenisés, visualiser les rendements et gérer votre portefeuille RealToken.'
  }
]

const resources = [
  {
    title: 'Wiki',
    description: 'Documentation complète sur l\'écosystème RealToken, les protocoles, la gouvernance et les guides d\'utilisation.'
  }
]

const governanceTools = [
  {
    title: 'Protocole décentralisé',
    description: 'Gouvernance communautaire transparente où chaque détenteur de REG peut participer aux décisions importantes.'
  },
  {
    title: 'Forum',
    description: 'Espace de discussion et de proposition pour la communauté RealToken DAO.'
  },
  {
    title: 'Tally',
    description: 'Plateforme de vote on-chain pour les propositions de gouvernance et les décisions de la DAO.'
  }
]

const steps = [
  {
    number: '01',
    title: 'Acheter des tokens depuis un partenaire',
    text: 'Acquérez vos tokens RealToken auprès de nos partenaires certifiés et intégrez l\'écosystème.'
  },
  {
    number: '02',
    title: 'Tokens disponibles dans l\'écosystème (RMM, YAM)',
    text: 'Vos tokens sont immédiatement accessibles sur RMM pour l\'échange et YAM pour la gestion de portefeuille.'
  },
  {
    number: '03',
    title: 'Obtenir un token REG et participer à la gouvernance',
    text: 'Recevez vos tokens REG pour participer activement à la gouvernance décentralisée. Bientôt : des NFT pour améliorer la gouvernance décentralisée.'
  }
]

const stats = [
  { label: 'Actifs sous gestion', value: '$128M' },
  { label: 'Membres de l\'écosystème', value: '18 200+' },
  { label: 'Marketcap REG', value: 'À venir' },
  { label: 'Nombre de votes', value: 'En cours' }
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
        <h2>Tokenisation d'actifs réels : liquidité, échange, disponible, accessible.</h2>
        <p>
          RealToken DAO transforme l'investissement immobilier en rendant les actifs réels accessibles, 
          échangeables et disponibles 24/7. Chaque token représente une part vérifiable d'un portefeuille 
          immobilier premium, avec une liquidité instantanée et une gouvernance décentralisée.
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
        <p class="tag">Application</p>
        <h2>Les outils de l'écosystème RealToken.</h2>
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
        <p class="tag">Ressources</p>
        <h2>Documentation et guides pour l'écosystème.</h2>
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
        <p class="tag">Gouvernance</p>
        <h2>Gouvernance décentralisée pour la communauté.</h2>
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
        <p class="tag">Comment ça marche</p>
        <h2>Rejoignez l'écosystème RealToken en trois étapes.</h2>
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
        <p class="tag">Partenaires</p>
        <h2>Intégrez votre token et façonnez l'avenir de l'écosystème RealToken.</h2>
        <p>
          Rejoignez l'écosystème RealToken en tant que partenaire. Intégrez vos tokens et bénéficiez 
          de la liquidité, de la gouvernance et de l'infrastructure de la DAO pour développer votre projet.
        </p>
      </div>
      <div class="cta-actions">
        <button class="primary filled">Devenir partenaire</button>
        <button class="primary outline">En savoir plus</button>
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
