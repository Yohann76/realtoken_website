<template>
  <nav class="top-nav">
    <router-link to="/" class="logo">
      <div class="cube"></div>
      <div>
        <span>{{ $t('logo.name') }}</span>
        <small>{{ $t('logo.subtitle') }}</small>
      </div>
    </router-link>
    <div class="nav-links">
      <a href="/#application">{{ $t('nav.application') }}</a>
      <a href="/#ressources">{{ $t('nav.ressources') }}</a>
      <a href="/#governance">{{ $t('nav.governance') }}</a>
      <router-link to="/blog">{{ $t('nav.blog') }}</router-link>
    </div>
    <div class="nav-right">
      <LanguageSelector />
      <button class="primary ghost">{{ $t('nav.contact') }}</button>
    </div>
  </nav>
</template>

<script setup>
import LanguageSelector from './LanguageSelector.vue'
</script>

<style scoped>
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
  text-decoration: none;
  color: inherit;
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

.nav-links a {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--color-orange);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
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

.primary.ghost {
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
  background: transparent;
}

.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(255, 140, 66, 0.4);
}

@media (max-width: 768px) {
  .top-nav {
    flex-direction: column;
    gap: 16px;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-right {
    justify-content: center;
    width: 100%;
  }
}
</style>

