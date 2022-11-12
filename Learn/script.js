setTimeout(() => {
    for(let i = 0; i < 5; i++) {
        setTimeout(() => {
            document.getElementById('title-header').innerText += 'LEARN'.charAt(i)
        }, i * 100);
    }
}, 1000);