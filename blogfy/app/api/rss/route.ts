import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();

export async function GET() {
    try {
        // Buscamos o XML do STJ
        const feed = await parser.parseURL('https://res.stj.jus.br/hrestp-c-portalp/RSS.xml');

        // Normaliza URLs (prefixa https: quando necessário)
        const normalizeUrl = (raw?: string | null) => {
            if (!raw) return null;
            let url = String(raw).trim();
            if (url.startsWith('//')) return 'https:' + url;
            if (url.startsWith('/')) return 'https://res.stj.jus.br' + url; // fallback para caminhos relativos do STJ
            return url;
        };

        // Função para extrair a imagem do item (enclosure, media, image, media:thumbnail, ou do HTML do conteúdo)
        const extractImage = (item: any): string | null => {
            if (!item) return null;
            if (item.enclosure && item.enclosure.url) return normalizeUrl(item.enclosure.url);
            if (item.image && item.image.url) return normalizeUrl(item.image.url);
            // tentativa com media:content / media:thumbnail
            if (item['media:content'] && item['media:content'].url) return normalizeUrl(item['media:content'].url);
            if (item['media:thumbnail'] && item['media:thumbnail'].url) return normalizeUrl(item['media:thumbnail'].url);
            // procura por <img src="..."> em content ou content:encoded
            const content = item['content:encoded'] || item.content || item.contentSnippet || '';
            const match = /<img[^>]+src=["']([^"']+)["']/i.exec(content);
            if (match && match[1]) {
                return normalizeUrl(match[1]);
            }
            return null;
        };

        const stripHtml = (html?: string) => String(html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

        const items = (feed.items || []).slice(0, 5).map((it: any) => {
            const raw = it['content:encoded'] || it.content || it.contentSnippet || '';
            const snippet = stripHtml(raw).slice(0, 160);

            return {
                title: it.title,
                link: it.link,
                pubDate: it.pubDate,
                image: extractImage(it),
                snippet: snippet ? (snippet.length >= 160 ? snippet + '…' : snippet) : null,
            };
        });

        // Retornamos os dados limpos para o front-end
        return NextResponse.json({
            title: feed.title,
            items
        });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao carregar notícias' }, { status: 500 });
    }
}