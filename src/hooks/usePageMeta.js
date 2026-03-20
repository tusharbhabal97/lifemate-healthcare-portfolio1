import { useEffect } from 'react';

const upsertMeta = (selector, attrs) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    Object.entries(attrs)
      .filter(([key]) => key !== 'content')
      .forEach(([key, value]) => tag.setAttribute(key, value));
    document.head.appendChild(tag);
  }
  if (attrs.content) {
    tag.setAttribute('content', attrs.content);
  }
};

export const usePageMeta = ({ title, description, keywords, canonicalUrl, ogTitle, ogImage, ogUrl, jsonLd }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      upsertMeta('meta[name="description"]', { name: 'description', content: description });
      upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
      upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    }

    if (keywords) {
      upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords });
    }

    if (title || ogTitle) {
      upsertMeta('meta[property="og:title"]', { property: 'og:title', content: ogTitle || title });
      upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: ogTitle || title });
    }

    if (ogImage) {
      upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage });
      upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: ogImage });
    }

    if (ogUrl || canonicalUrl) {
      upsertMeta('meta[property="og:url"]', { property: 'og:url', content: ogUrl || canonicalUrl });
    }

    if (canonicalUrl) {
      let canonicalTag = document.head.querySelector('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute('href', canonicalUrl);
    }

    if (jsonLd) {
      const schemaId = 'lifemate-schema';
      let schemaTag = document.getElementById(schemaId);
      if (!schemaTag) {
        schemaTag = document.createElement('script');
        schemaTag.type = 'application/ld+json';
        schemaTag.id = schemaId;
        document.head.appendChild(schemaTag);
      }
      schemaTag.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, keywords, canonicalUrl, ogTitle, ogImage, ogUrl, jsonLd]);
};
