function toggleButtonLike(element) {
    element.classList.toggle('like-button--active') ? element.innerText++ : element.innerText--
}