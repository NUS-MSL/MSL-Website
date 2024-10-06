import { useEffect } from 'react';

const useFadeInRight = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-right-show');
                } else {
                    entry.target.classList.remove('fade-in-right-show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.fade-in-right-hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
};

export default useFadeInRight;