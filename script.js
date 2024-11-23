
document.addEventListener('mousemove', (event) => {
    const cursor = document.createElement('div');
    cursor.className = 'mouse-effect';
    cursor.style.left = `${event.pageX}px`;
    cursor.style.top = `${event.pageY}px`;
    document.body.appendChild(cursor);

    setTimeout(() => {
        cursor.remove();
    }, 100);
});
const zoomableElements = document.querySelectorAll('.zoomable');
    
        // إضافة حدث النقر المزدوج
        zoomableElements.forEach(element => {
            element.addEventListener('dblclick', () => {
                // إذا كان العنصر مكبراً، أعده لحجمه الطبيعي
                if (element.classList.contains('zoomed')) {
                    element.style.transform = 'scale(1)';
                    element.style.transition = 'transform 0.5s ease';
                    element.classList.remove('zoomed');
                } else {
                    // إذا كان العنصر غير مكبر، قم بتكبيره
                    element.style.transform = 'scale(2)';
                    element.style.transition = 'transform 0.5s ease';
                    element.classList.add('zoomed');
                }
            });
        });
