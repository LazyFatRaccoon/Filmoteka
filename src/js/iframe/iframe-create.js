const ref = `<a 
class="iframe-lightbox-link"
href="https://www.youtube.com/embed/KK9bwTlAvgo?autoplay=0"
>
YouTube
</a>`

document.body.insertAdjacentHTML('beforebegin', ref);

[].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function(el) {
    el.lightbox = new IframeLightbox(el);
  });

console.log(ref)