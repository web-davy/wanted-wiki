async function trackVisit(updateDisplayCallback) {
    const NAMESPACE = 'wanted-wiki';
    const KEY = 'unique_visitors_v1';
    const getUrl = (action = '') => `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}${action}`;

    const fetchData = async (url) => {
        try {
            const res = await fetch(url);
            if (res.ok) return await res.json();
            throw new Error('API failed');
        } catch (e) {
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
            const proxyRes = await fetch(proxyUrl);
            const proxyData = await proxyRes.json();
            return JSON.parse(proxyData.contents);
        }
    };

    try {
        const hasVisited = localStorage.getItem('wanted_wiki_visited_unique');
        let data;
        if (!hasVisited) {
            data = await fetchData(getUrl('/up'));
            if (data) localStorage.setItem('wanted_wiki_visited_unique', 'true');
        } else {
            data = await fetchData(getUrl());
        }

        if (data && typeof data.count !== 'undefined') {
            updateDisplayCallback(data.count.toLocaleString());
        }

        setInterval(async () => {
            try {
                const d = await fetchData(getUrl());
                if (d && typeof d.count !== 'undefined') {
                    updateDisplayCallback(d.count.toLocaleString());
                }
            } catch (e) { }
        }, 30000);
    } catch (e) {
        console.warn('Visitor tracking error:', e);
    }
}
