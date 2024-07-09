import cheerio from "cheerio";

const cleanHtml = (html: string): string => {
  const $ = cheerio.load(html);

  // Remove unwanted tags
  $("script, style, iframe, noscript, meta, link").remove();

  // Extract and clean meaningful text
  const cleanedText = $("body").text().replace(/\s+/g, " ").trim();

  return cleanedText;
};

export default cleanHtml;
