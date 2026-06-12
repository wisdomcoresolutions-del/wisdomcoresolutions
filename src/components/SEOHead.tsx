import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  articlePublishedAt?: string
  noIndex?: boolean
}

const SITE_URL = 'https://wisdomcoresolutions.store'
const DEFAULT_IMAGE = `${SITE_URL}/og-cover.png`

function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  articlePublishedAt,
  noIndex = false
}: SEOHeadProps) {
  const fullTitle = title.includes('WisdomCore')
    ? title
    : `${title} | WisdomCore Solutions`

  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="WisdomCore Solutions" />
      <meta property="og:locale" content="en_IN" />
      {articlePublishedAt && <meta property="article:published_time" content={articlePublishedAt} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}

export default SEOHead
