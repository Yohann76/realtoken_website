import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

// Fonction pour parser le frontmatter manuellement
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)
  
  if (!match) {
    // Pas de frontmatter, retourner tout le contenu comme body
    return {
      data: {},
      content: content
    }
  }
  
  const frontmatter = match[1]
  const body = match[2]
  
  // Parser le YAML frontmatter basique
  const data = {}
  const lines = frontmatter.split('\n')
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim()
      let value = line.substring(colonIndex + 1).trim()
      
      // Enlever les guillemets si présents
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      
      // Parser les tableaux
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(v => {
          v = v.trim()
          if ((v.startsWith('"') && v.endsWith('"')) || 
              (v.startsWith("'") && v.endsWith("'"))) {
            return v.slice(1, -1)
          }
          return v
        })
      }
      
      data[key] = value
    }
  }
  
  return {
    data,
    content: body
  }
}

// Liste des articles disponibles
// Note: Pour ajouter un nouvel article, créez le fichier .md dans articles/{locale}/ et ajoutez le slug ici
// TODO: Add more articles
// TODO: automatically generate the slug from the filename (or parameter markdown) (e.g. 'introduction-realtoken-dao' -> 'introduction-realtoken-dao')
const articlesList = {
  fr: [
    'perimetre-dao-realtoken'
  ],
  en: [
    'realtoken-dao-scope'
  ]
}

// Correspondance des slugs entre locales (même article, slugs différents selon la langue)
// Quand on est sur /blog/perimetre-dao-realtoken et qu'on passe en EN, on doit charger realtoken-dao-scope
const slugEquivalents = {
  'perimetre-dao-realtoken': { en: 'realtoken-dao-scope' },
  'realtoken-dao-scope': { fr: 'perimetre-dao-realtoken' }
}

/** Retourne le slug à utiliser pour une locale (équivalent du même article dans l'autre langue si besoin) */
export function getSlugForLocale(slug, locale) {
  return slugEquivalents[slug]?.[locale] ?? slug
}

// Note: Les slugs correspondent aux noms de fichiers sans l'extension .md

// Fonction pour charger le contenu d'un article
async function loadArticleContent(slug, locale) {
  try {
    const response = await fetch(`/articles/${locale}/${slug}.md`)
    if (!response.ok) return null
    const text = await response.text()
    return text
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error)
    return null
  }
}

// Fonction pour charger tous les articles
export async function loadArticles(locale = 'fr') {
  const articles = []
  const slugs = articlesList[locale] || []
  
  for (const slug of slugs) {
    const content = await loadArticleContent(slug, locale)
    if (content) {
      const parsed = parseFrontmatter(content)
      articles.push({
        ...parsed.data,
        slug,
        content: md.render(parsed.content),
        rawContent: parsed.content
      })
    }
  }
  
  // Trier par date (plus récent en premier)
  articles.sort((a, b) => new Date(b.date) - new Date(a.date))
  
  return articles
}

// Fonction pour charger un article spécifique (résout le slug équivalent si l'article n'existe pas dans cette locale)
export async function loadArticle(slug, locale = 'fr') {
  const resolvedSlug = getSlugForLocale(slug, locale)
  const content = await loadArticleContent(resolvedSlug, locale)
  if (!content) return null
  
  const parsed = parseFrontmatter(content)
  return {
    ...parsed.data,
    slug: resolvedSlug,
    content: md.render(parsed.content),
    rawContent: parsed.content
  }
}

// Fonction pour obtenir les derniers articles
export async function getLatestArticles(count = 3, locale = 'fr') {
  const articles = await loadArticles(locale)
  return articles.slice(0, count)
}

