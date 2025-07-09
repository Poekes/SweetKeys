export default function intersect(node, options = {}, callback) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback(entry);
                }
            });
        },
        { threshold: options.threshold || 0.1, ...options }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.unobserve(node);
        },
    };
}