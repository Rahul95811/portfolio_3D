import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({
  title = "Kilaparthi Rahul | Cybersecurity & CS Student",
  description = `Cybersecurity Intern, Bug Bounty Hunter, and B.Tech Computer Science & Engineering student at Gitam University. Proficient in Java, Python, C, and Web Technologies.`,
  type = "website",
  keywords = "Cybersecurity, Bug Bounty Hunter, Gitam University, Kilaparthi Rahul, Python, Java, C, Web Technologies, Burp Suite, Network Security, Portfolio",
  image = "",
  url = "https://github.com/Rahulkilaparthi",
  locale = "en_US",
  publishedAt,
  modifiedAt = new Date().toISOString(),
  article,
}) => {
  const { pathname } = useLocation();
  const siteUrl = "https://github.com/Rahulkilaparthi";
  const canonicalUrl = `${siteUrl}${pathname}`;
  const imageUrl = image;

  const ldJson = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebSite",
    name: title,
    description: description,
    image: imageUrl,
    url: canonicalUrl,
    author: {
      "@type": "Person",
      name: "Kilaparthi Rahul",
      url: "https://www.linkedin.com/in/kilaparthi-rahul-63b13a293/",
      sameAs: [
        "https://github.com/Rahulkilaparthi",
        "https://www.linkedin.com/in/kilaparthi-rahul-63b13a293/",
        "mailto:rahulkilaparthi7@gmail.com",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Kilaparthi Rahul's Portfolio",
    },
    keywords: keywords.split(", "),
    mainEntityOfPage: {
      "@id": canonicalUrl,
    },
  };

  if (type === "article" && article) {
    ldJson.headline = article.headline || title;
    ldJson.articleBody = article.body || description;
    ldJson.datePublished = article.publishedTime || publishedAt;
    ldJson.dateModified = article.modifiedTime || modifiedAt;
    ldJson["@type"] = "Article";
  } else {
    if (publishedAt) {
      ldJson.datePublished = publishedAt;
    }
    if (modifiedAt) {
      ldJson.dateModified = modifiedAt;
    }
  }

  return (
    <Helmet>
      <html lang={locale.split("_")[0]} />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={
          keywords +
          ", mobile navigation, hamburger menu, framer motion, responsive UI"
        }
      />
      <meta name="author" content="Kilaparthi Rahul" />
      <meta
        name="subject"
        content="Portfolio showcasing Cybersecurity experience and Computer Science projects"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Kilaparthi Rahul's Portfolio" />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="Kilaparthi Rahul" />

      <meta name="theme-color" content="#000000" />

      <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
    </Helmet>
  );
};

export default SEO;
