'use strict';

/**
 * This chunk of code is responsible for the triggering the sequence of "wire" animations.
 */
let hasRun = false;
let stack = [];
let running = false;
function updateScroll() {
    document.querySelectorAll('.wow:not(.wow-active)').forEach(element => {
        console.log(element.getBoundingClientRect().top - window.innerHeight);

        if (element.getBoundingClientRect().top - window.innerHeight < -10) {
            element.classList.add('wow-active');

            if (!hasRun) {
                element.classList.add('no-delay');
                return;
            }

            const task = () => {
                console.log('RUN TASK', element.dataset.duration);

                if (!element.classList.contains('no-delay')) {
                    element.classList.add('animated');
                }

                setTimeout(() => {
                    running = !!stack.length;
                    if (running) {
                        stack.pop()();
                    }
                }, element.dataset.duration || 0);
            };

            stack.unshift(task);

            console.log('running: ', running);
            if (!running) {
                running = true;
                stack.pop()();
            }
        }
    });

    hasRun = true;
}

document.addEventListener('scroll', () => {
    updateScroll();
});
document.addEventListener('DOMContentLoaded', () => {
    updateScroll();
});

/**
 * When someone clicks the "Show FAQs" button, toggle the collapsible portion with the questions.
 */
document.querySelector('.faqs .show-btn').addEventListener('click', () => {
    const el = document.querySelector('.collapsible');
    const innerBtn = document.querySelector('.faqs .show-btn > div > div');

    if (el.classList.contains('collapsed')) {
        el.classList.remove('collapsed');
        innerBtn.innerText = 'Hide FAQs';
    } else {
        el.classList.add('collapsed');
        innerBtn.innerText = 'Show FAQs';
    }
});
