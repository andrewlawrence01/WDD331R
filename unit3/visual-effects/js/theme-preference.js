(() => {
    const ALLOWED = new Set(['light', 'system', 'dark']);
    const STORAGE_KEY = 'theme-preference';

    // Hidden sync container (ensures early DOM availability)
    const id = 'theme-preference-sync';
    let container = document.getElementById(id);

    if (!container) {
        container = document.createElement('div');
        container.id = id;
        container.hidden = true;
        container.setAttribute('aria-hidden', 'true');

        ['light', 'system', 'dark'].forEach((value) => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'theme-preference';
            input.value = value;

            if (value === 'system') {
                input.checked = true;
            }

            container.appendChild(input);
        });

        (document.body || document.documentElement).appendChild(container);
    }

    // Restore saved preference BEFORE interaction
    let stored = null;

    try {
        stored = localStorage.getItem(STORAGE_KEY);
    } catch {
        stored = null;
    }

    const value = ALLOWED.has(stored) ? stored : 'system';

    const target = container.querySelector(`input[value="${value}"]`);

    if (target) {
        target.checked = true;
    }

    // Persist changes
    document.addEventListener('change', (e) => {
        const el = e.target;

        if (el && el.name === 'theme-preference') {
            try {
                localStorage.setItem(STORAGE_KEY, el.value);
            } catch {
                // ignore storage failures
            }
        }
    });
})();