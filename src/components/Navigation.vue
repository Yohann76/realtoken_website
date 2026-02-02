<template>
  <header class="nav-wrapper">
    <nav class="top-nav">
      <router-link to="/" class="logo" @click="menuOpen = false">
        <div class="cube"></div>
        <div>
          <span>{{ $t('logo.name') }}</span>
          <small>{{ $t('logo.subtitle') }}</small>
        </div>
      </router-link>

      <button
        type="button"
        class="hamburger"
        :class="{ active: menuOpen }"
        aria-label="Menu"
        aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-desktop">
        <div class="nav-links">
          <a href="/#application" @click="menuOpen = false">{{ $t('nav.application') }}</a>
          <a href="/#ressources" @click="menuOpen = false">{{ $t('nav.ressources') }}</a>
          <a href="/#governance" @click="menuOpen = false">{{ $t('nav.governance') }}</a>
          <router-link to="/blog" @click="menuOpen = false">{{ $t('nav.blog') }}</router-link>
        </div>
        <div class="nav-right">
          <LanguageSelector />
          <button class="primary ghost">{{ $t('nav.contact') }}</button>
        </div>
      </div>
    </nav>

    <Transition name="menu">
      <div v-show="menuOpen" class="nav-mobile" aria-hidden="!menuOpen">
        <div class="nav-mobile-inner">
          <a href="/#application" @click="menuOpen = false">{{ $t('nav.application') }}</a>
          <a href="/#ressources" @click="menuOpen = false">{{ $t('nav.ressources') }}</a>
          <a href="/#governance" @click="menuOpen = false">{{ $t('nav.governance') }}</a>
          <router-link to="/blog" @click="menuOpen = false">{{ $t('nav.blog') }}</router-link>
          <div class="nav-mobile-actions">
            <LanguageSelector />
            <button class="primary ghost">{{ $t('nav.contact') }}</button>
          </div>
        </div>
      </div>
    </Transition>

    <div class="nav-spacer" aria-hidden="true"></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSelector from './LanguageSelector.vue'

const menuOpen = ref(false)

const closeOnEscape = (e) => {
  if (e.key === 'Escape') menuOpen.value = false
}

const closeOnResize = () => {
  if (window.innerWidth >= 769) menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('keydown', closeOnEscape)
  window.addEventListener('resize', closeOnResize)
})

onUnmounted(() => {
  window.removeEventListener('keydown', closeOnEscape)
  window.removeEventListener('resize', closeOnResize)
})
</script>

<style scoped>
.nav-wrapper {
  --nav-height: 72px;
}

.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  min-height: var(--nav-height);
  padding: 0 min(8vw, 120px);
  background: rgba(5, 15, 36, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
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
  flex-shrink: 0;
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

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 32px;
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

/* Espaceur pour éviter que le contenu passe sous la nav */
.nav-spacer {
  height: var(--nav-height);
  pointer-events: none;
}

/* Hamburger : visible uniquement sur mobile */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 44px;
  height: 44px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  z-index: 1001;
  transition: transform 0.2s ease;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
  transition: transform 0.25s ease, opacity 0.2s ease;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Menu mobile (drawer) */
.nav-mobile {
  position: fixed;
  top: var(--nav-height);
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(5, 15, 36, 0.98);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  overflow-y: auto;
}

.nav-mobile-inner {
  padding: 24px min(8vw, 120px) 48px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-mobile-inner a {
  padding: 14px 0;
  font-size: 1.1rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: color 0.2s ease;
}

.nav-mobile-inner a:hover,
.nav-mobile-inner a.router-link-active {
  color: var(--color-orange);
}

.nav-mobile-actions {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

/* Responsive : hamburger + drawer en dessous de 769px */
@media (max-width: 768px) {
  .top-nav {
    padding-left: min(6vw, 24px);
    padding-right: min(6vw, 24px);
  }

  .hamburger {
    display: flex;
  }

  .nav-desktop {
    display: none;
  }
}

@media (min-width: 769px) {
  .nav-mobile {
    display: none !important;
  }
}
</style>
