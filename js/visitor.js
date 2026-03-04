async function trackVisit(updateDisplayCallback) {
    const NAMESPACE = 'wanted-wiki';
    const KEY = 'unique_visitors_v1';
    const BASE_URL = `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}`;

    const CORS_PROXIES = [
        (url) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
        (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
        (url) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`
    ];

    async function directFetch(url) {
        try {
            const res = await fetch(url);
            if (res.ok) return await res.json();
        } catch (_) { }
        return null;
    }

    async function proxiedFetch(url) {
        for (const buildProxy of CORS_PROXIES) {
            try {
                const proxyUrl = buildProxy(url);
                const res = await fetch(proxyUrl);
                if (!res.ok) continue;

                const data = await res.json();
                if (data.contents && typeof data.contents === 'string') {
                    return JSON.parse(data.contents);
                }
                return data;
            } catch (_) { }
        }
        return null;
    }

    async function fetchWithFallback(url) {
        return (await directFetch(url)) || (await proxiedFetch(url));
    }

    try {
        const hasVisited = localStorage.getItem('wanted_wiki_visited_unique');
        let data;

        if (!hasVisited) {
            data = await fetchWithFallback(`${BASE_URL}/up`);
            if (data) localStorage.setItem('wanted_wiki_visited_unique', 'true');
        } else {
            data = await fetchWithFallback(BASE_URL);
        }

        if (data && typeof data.count !== 'undefined') {
            updateDisplayCallback(data.count.toLocaleString());
        }

        setInterval(async () => {
            try {
                const d = await fetchWithFallback(BASE_URL);
                if (d && typeof d.count !== 'undefined') {
                    updateDisplayCallback(d.count.toLocaleString());
                }
            } catch (_) { }
        }, 30000);
    } catch (e) {
        console.warn('Visitor tracking error:', e);
    }
}
