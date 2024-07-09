/* Loading for Tank Mobile.js */
document.addEventListener('DOMContentLoaded', function () {
    const resources = [
        {type: 'script', src: 'https://yoannmoinet.github.io/nipplejs/javascripts/nipplejs.js', size: 55.2},
        {type: 'link', href: 'https://unpkg.com/swiper/swiper-bundle.min.css', size: 0.175},
        {
            type: 'link',
            href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
            size: 0.687
        },
        {type: 'script', src: 'https://unpkg.com/swiper/swiper-bundle.min.js', size: 6},
    ];

    const loadingScreen = document.getElementById('intro');
    const loadingScreenContainer = document.getElementById('container')
    const content = document.getElementById('restOfContent');
    const title = document.getElementById('title')
    const progressBar = document.getElementById('loadingProgressBarStartup');
    let totalSize = resources.reduce((acc, resource) => acc + (resource.size || 0), 0);
    let loadedSize = 0;

    function updateProgressBar(sizeLoaded) {
        loadedSize += sizeLoaded;
        const progress = (loadedSize / totalSize) * 100;
        progressBar.style.width = progress + '%';
        if (progress >= 100) {
            setTimeout(() => {
                loadingScreenContainer.innerHTML = `
                <button class="start" id="start">
    				<span class="material-symbols-outlined">keyboard_double_arrow_left</span>
    				PLAY
    				<span class="material-symbols-outlined">keyboard_double_arrow_right</span>
                </button>`
                loadingScreenContainer.classList.add('nowButton')
                content.style.display = 'block';
                s();
            }, 500); // Small delay to ensure the progress bar completes its animation
        }
    }

    function loadResource(resource) {
        return new Promise((resolve, reject) => {
            let element;
            if (resource.type === 'link') {
                element = document.createElement('link');
                element.rel = 'stylesheet';
                element.href = resource.href;
            } else if (resource.type === 'script') {
                element = document.createElement('script');
                element.src = resource.src;
            }

            element.onload = () => {
                updateProgressBar(resource.size || 0);
                resolve();
            };
            element.onerror = reject;
            document.head.appendChild(element);
        });
    }

    async function loadResources() {
        for (const resource of resources) {
            try {
                await loadResource(resource);
            } catch (error) {
                console.error(`Failed to load resource: ${resource.href || resource.src}`, error);
                title.innerHTML = `<span>NO</span> <span>INTERNET</span>`
                progressBar.style.backgroundColor = "red"
            }
        }
    }

    loadResources();
});