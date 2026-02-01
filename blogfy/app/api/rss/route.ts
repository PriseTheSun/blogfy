import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();

export async function GET() {
    try {
        // Buscamos o XML do STJ
        const feed = await parser.parseURL('https://res.stj.jus.br/hrestp-c-portalp/RSS.xml');

        // Retornamos os dados limpos para o front-end
        return NextResponse.json({
            title: feed.title,
            items: feed.items.slice(0, 5) // Pegamos apenas os 5 últimos
        });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao carregar notícias' }, { status: 500 });
    }
}