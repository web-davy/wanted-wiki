async function trackVisit(updateDisplayCallback) {
    const API_BASE = 'https://countapi.mileshilliard.com/api/v1';
    const KEY = 'wanted-wiki-unique-visitors';

    async function fetchCount(endpoint) {
        try {
            const res = await fetch(`${API_BASE}/${endpoint}/${KEY}`);
            if (!res.ok) return null;
            const data = await res.json();
            return data.value ? parseInt(data.value, 10) : null;
        } catch (_) {
            return null;
        }
    }

    try {
        const hasVisited = localStorage.getItem('wanted_wiki_visited_unique');
        let count;

        if (!hasVisited) {
            count = await fetchCount('hit');
            if (count !== null) localStorage.setItem('wanted_wiki_visited_unique', 'true');
        } else {
            count = await fetchCount('get');
        }

        if (count !== null) {
            updateDisplayCallback(count.toLocaleString());
        }

        setInterval(async () => {
            try {
                const c = await fetchCount('get');
                if (c !== null) {
                    updateDisplayCallback(c.toLocaleString());
                }
            } catch (_) { }
        }, 30000);
    } catch (e) {
        console.warn('Visitor tracking error:', e);
    }
}
