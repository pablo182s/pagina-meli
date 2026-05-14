<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- BOOTSTRAP -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  >

  <title>Perfil Modelo</title>

  <style>

    body{
      background:#111;
      color:white;
    }

    .model-card{
      background:#1d1d1d;
      border:none;
      border-radius:20px;
      position:sticky;
      top:20px;
    }

    .gallery img{
      width:100%;
      height:350px;
      object-fit:cover;
      border-radius:15px;
      cursor:pointer;
      transition:.3s;
    }

    .gallery img:hover{
      transform:scale(1.03);
    }

    .carousel-item img{
      height:80vh;
      object-fit:contain;
    }

  </style>
</head>
<body>

<div class="container py-5">

  <div class="row">

    <!-- TARJETA -->
    <div class="col-lg-4 mb-4">

      <div class="card model-card text-white p-3">

        <img
          src="https://picsum.photos/400/500"
          class="card-img-top rounded-4"
        >

        <div class="card-body">

          <h2 class="card-title">Camila Rossi</h2>

          <hr>

          <p><strong>Edad:</strong> 24 años</p>
          <p><strong>Altura:</strong> 1.75m</p>
          <p><strong>Medidas:</strong> 90 - 60 - 90</p>
          <p><strong>Cabello:</strong> Castaño</p>
          <p><strong>Ojos:</strong> Verdes</p>

        </div>

      </div>

    </div>

    <!-- GALERÍA -->
    <div class="col-lg-8">

      <div class="row gallery g-3">

        <div class="col-md-6">
          <img
            src="https://picsum.photos/id/1011/600/800"
            data-bs-target="#galleryModal"
            data-bs-toggle="modal"
            data-bs-slide-to="0"
          >
        </div>

        <div class="col-md-6">
          <img
            src="https://picsum.photos/id/1012/600/800"
            data-bs-target="#galleryModal"
            data-bs-toggle="modal"
            data-bs-slide-to="1"
          >
        </div>

        <div class="col-md-6">
          <img
            src="https://picsum.photos/id/1015/600/800"
            data-bs-target="#galleryModal"
            data-bs-toggle="modal"
            data-bs-slide-to="2"
          >
        </div>

        <div class="col-md-6">
          <img
            src="https://picsum.photos/id/1016/600/800"
            data-bs-target="#galleryModal"
            data-bs-toggle="modal"
            data-bs-slide-to="3"
          >
        </div>

      </div>

    </div>

  </div>

</div>

<!-- MODAL -->
<div
  class="modal fade"
  id="galleryModal"
  tabindex="-1"
>

  <div class="modal-dialog modal-xl modal-dialog-centered">

    <div class="modal-content bg-dark border-0">

      <div class="modal-body p-0">

        <!-- CARRUSEL -->
        <div
          id="carouselGallery"
          class="carousel slide"
          data-bs-ride="false"
        >

          <div class="carousel-inner">

            <div class="carousel-item active">
              <img
                src="https://picsum.photos/id/1011/1200/900"
                class="d-block w-100"
              >
            </div>

            <div class="carousel-item">
              <img
                src="https://picsum.photos/id/1012/1200/900"
                class="d-block w-100"
              >
            </div>

            <div class="carousel-item">
              <img
                src="https://picsum.photos/id/1015/1200/900"
                class="d-block w-100"
              >
            </div>

            <div class="carousel-item">
              <img
                src="https://picsum.photos/id/1016/1200/900"
                class="d-block w-100"
              >
            </div>

          </div>

          <!-- BOTONES -->

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselGallery"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>

          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselGallery"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>

        </div>

      </div>

    </div>

  </div>

</div>

<!-- JS BOOTSTRAP -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<script>

  // Cuando hacés click en una imagen
  // abre el carrusel en esa imagen

  const galleryImages = document.querySelectorAll('.gallery img');
  const carousel = document.querySelector('#carouselGallery');

  galleryImages.forEach((img, index) => {

    img.addEventListener('click', () => {

      const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);

      bsCarousel.to(index);

    });

  });

</script>

</body>
</html>