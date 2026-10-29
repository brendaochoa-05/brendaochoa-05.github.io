document.querySelectorAll('.image-grid .item').forEach((item, index) => {
    const button = item.querySelector('.image-button');
    const image = button?.querySelector('img');
    const explanation = item.querySelector('.explanation');

    if (!button || !image || !explanation) return;

    const explanationId = `explanation-${index + 1}`;
    explanation.id = explanationId;
    button.setAttribute('aria-label', `Show explanation for ${image.alt || 'this project'}`);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', explanationId);

    button.addEventListener('click', () => {
        const isOpen = !explanation.hidden;
        explanation.hidden = isOpen;
        button.setAttribute('aria-expanded', String(!isOpen));
        item.classList.toggle('active', !isOpen);
    });
});
