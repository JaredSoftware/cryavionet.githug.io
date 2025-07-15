<template>
  <div class="fondo" :class="{ 'fondo-loaded': backgroundLoaded }">
    <nav class="navbar is-flex is-black">
      <div class="navbar-brand is-justify-content-space-between">
        <a class="navbar-item navbar-start">
          <img src="/assets/cryavionet.2.ico" width="30" height="30" alt="CryAvionet" loading="lazy" />
        </a>
      </div>
      <div class="navbar-brand is-flex ml-auto mr-auto">
        <a class="navbar-item" href="https://www.facebook.com/CryAvionet/">
          <img src="/assets/facebook.ico" width="30" height="30" alt="Facebook" loading="lazy" />
        </a>
        <a
          class="navbar-item"
          href="https://www.instagram.com/cry_avionet_rock_band_music/"
        >
          <img src="/assets/instagram.ico" width="30" height="30" alt="Instagram" loading="lazy" />
        </a>
        <a class="navbar-item" href="https://www.tiktok.com/@cryavionet">
          <img src="/assets/tiktok.ico" width="30" height="30" alt="TikTok" loading="lazy" />
        </a>
        <a class="navbar-item" href="https://twitter.com/CryAvionet">
          <img src="/assets/twitter.2.ico" width="30" height="30" alt="Twitter" loading="lazy" />
        </a>
      </div>
      <div class="navbar-brand is-pulled-right">
        <a class="navbar-item">
          <img src="/assets/cryavionet.2.ico" width="30" height="30" alt="CryAvionet" loading="lazy" />
        </a>
      </div>
    </nav>
    
    <!--Container Main end-->
    <div id="wrapper" class="active">
      <div class="container">
        <div class="content-wrapper">
          <div class="cards-grid">
            <!-- Video Carousel -->
            <div class="card video-card">
              <div class="card-content">
                <div class="carousel-container">
                  <div class="carousel" ref="carousel">
                    <div 
                      v-for="(video, index) in videos" 
                      :key="index"
                      class="carousel-item"
                      :class="{ 'active': currentVideo === index }"
                    >
                      <iframe
                        v-if="currentVideo === index"
                        width="100%"
                        height="500px"
                        :src="video.src"
                        :title="video.title"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        loading="lazy"
                      ></iframe>
                      <div v-else class="video-placeholder">
                        <img :src="video.thumbnail" :alt="video.title" loading="lazy" />
                        <div class="play-overlay">
                          <div class="play-button-overlay">▶</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Carousel Controls -->
                  <button class="carousel-control prev" @click="prevVideo">
                    <span>‹</span>
                  </button>
                  <button class="carousel-control next" @click="nextVideo">
                    <span>›</span>
                  </button>
                  
                  <!-- Carousel Indicators -->
                  <div class="carousel-indicators">
                    <button 
                      v-for="(video, index) in videos" 
                      :key="index"
                      class="indicator"
                      :class="{ 'active': currentVideo === index }"
                      @click="goToVideo(index)"
                    ></button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Music Service Cards -->
            <a href="https://music.apple.com/es/artist/cry-avionet/1599384180" class="music-card-link">
              <div class="card music-card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image">
                        <img
                          class="music-service-list__img"
                          src="/assets/logo_applemusic_onlight.svg"
                          alt="Apple Music"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button class="button is-black play-button">
                        <span class="btn-label">Play</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://open.spotify.com/intl-es/artist/5ntQ8lJFioKBkMTguEkTBo?si=_UgbpKSKRfy88J8rQrVXVA" class="music-card-link">
              <div class="card music-card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image">
                        <img
                          class="music-service-list__img"
                          src="/assets/logo_spotify_onlight.svg"
                          alt="Spotify"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button class="button is-black play-button">
                        <span class="btn-label">Play</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/channel/UCbhWQqWr4OUKg8n0Bk-BI3A?sub_confirmation=1" class="music-card-link">
              <div class="card music-card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image">
                        <img
                          class="music-service-list__img"
                          src="/assets/logo_youtube_onlight.svg"
                          alt="YouTube"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button class="button is-black play-button">
                        <span class="btn-label">Listen Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://deezer.page.link/gBhSUzLg8cNBs8v48" class="music-card-link">
              <div class="card music-card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image">
                        <img
                          class="music-service-list__img"
                          src="/assets/logo_deezer_onlight.svg"
                          alt="Deezer"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button class="button is-black play-button">
                        <span class="btn-label">Play</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://music.youtube.com/playlist?list=OLAK5uy_nsXothrKScIE7d_4KtsPGO3r3ykuUQa2I&feature=share" class="music-card-link">
              <div class="card music-card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image">
                        <img
                          class="music-service-list__img"
                          src="/assets/logo_youtubemusic_onlight.svg"
                          alt="YouTube Music"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button class="button is-black play-button">
                        <span class="btn-label">Play</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://tidal.com/browse/album/252314861" class="music-card-link">
              <div class="card music-card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image">
                        <img
                          class="music-service-list__img"
                          src="/assets/logo_tidal_onlight.svg"
                          alt="Tidal"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button class="button is-black play-button">
                        <span class="btn-label">Play</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://music.amazon.com/albums/B0BHCF6JQP?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=CO&ref=dm_sh_tF0UEk2Zx78ZPWOxgY0WJ89FL" class="music-card-link">
              <div class="card music-card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image">
                        <img
                          class="music-service-list__img"
                          src="/assets/logo_amazonmusic_onlight.svg"
                          alt="Amazon Music (Streaming)"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button class="button is-black play-button">
                        <span class="btn-label">Play</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://music.apple.com/co/album/cry-avionet-full-album-demo-demo/1648414707" class="music-card-link">
              <div class="card music-card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image">
                        <img
                          class="music-service-list__img"
                          src="/assets/logo_itunes_onlight.svg"
                          alt="iTunes"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button class="button is-black play-button">
                        <span class="btn-label">Descarga</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.amazon.com/dp/B0BHCF6JQP/ref=dm_rwp_pur_lnd_albm_unrg" class="music-card-link">
              <div class="card music-card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image">
                        <img
                          class="music-service-list__img"
                          src="/assets/logo_amazonmusic_onlight.svg"
                          alt="Amazon Music (Streaming)"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <button class="button is-black play-button">
                        <span class="btn-label">Play</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cry",
  data() {
    return {
      backgroundLoaded: false,
      currentVideo: 0,
      videos: [
        {
          src: "https://www.youtube.com/embed/c5rvpCA0zfQ?si=xTg_DY16qrvH3lPg&loading=lazy",
          title: "CryAvionet - Broken",
          thumbnail: "/assets/videoimg.png"
        },
        {
          src: "https://www.youtube.com/embed/8nqQ6wPW7vk?si=8nqQ6wPW7vk&loading=lazy",
          title: "CryAvionet - Creéme",
          thumbnail: "/assets/videoimg.png"
        },
        {
          src: "https://www.youtube.com/embed/xcrLuihSNZM?si=xcrLuihSNZM&loading=lazy",
          title: "CryAvionet - Album Demo",
          thumbnail: "/assets/videoimg.png"
        }
      ]
    }
  },
  mounted() {
    // Cargar Google Analytics de forma asíncrona
    this.loadGoogleAnalytics();
    
    // Cargar imagen de fondo de forma progresiva
    this.loadBackgroundImage();
    
    // Auto-play carousel - DESACTIVADO
    // this.startAutoPlay();
  },
  beforeUnmount() {
    // Limpiar intervalos
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  },
  methods: {
    redirect: function (link) {
      window.location.href = link;
    },
    loadGoogleAnalytics() {
      // Cargar GA de forma asíncrona para no bloquear el render
      setTimeout(() => {
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17346462632';
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17346462632');
        `;
        document.head.appendChild(script2);
      }, 2000); // Retrasar 2 segundos para priorizar el contenido
    },
    loadBackgroundImage() {
      // Cargar la imagen de fondo de forma progresiva
      const img = new Image();
      img.onload = () => {
        this.backgroundLoaded = true;
        console.log('✅ Imagen de fondo cargada');
      };
      img.onerror = () => {
        console.log('⚠️ Error cargando imagen de fondo, usando gradiente');
      };
      img.src = '/assets/videoimg.png';
    },
    nextVideo() {
      this.currentVideo = (this.currentVideo + 1) % this.videos.length;
    },
    prevVideo() {
      this.currentVideo = this.currentVideo === 0 ? this.videos.length - 1 : this.currentVideo - 1;
    },
    goToVideo(index) {
      this.currentVideo = index;
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextVideo();
      }, 8000); // Cambiar video cada 8 segundos
    }
  },
};
</script>

<style>
/* Fondo optimizado - gradiente como fallback principal */
.fondo {
  width: 100%;
  min-height: 100vh;
  /* Gradiente principal que se muestra inmediatamente */
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%);
  background-attachment: fixed; /* Cambiar a fixed para efecto parallax */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image 0.5s ease;
}

/* Cuando la imagen se carga, se aplica con transición suave */
.fondo.fondo-loaded {
  background-image: linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.623)),
    url("https://jaredsoftware.github.io/cryavionet.githug.io/assets/videoimg.png");
  background-size: cover; /* Volver a cover para que llene toda la pantalla */
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Efecto parallax */
}

/* Optimización para dispositivos móviles */
@media (max-width: 768px) {
  .fondo {
    background-attachment: scroll; /* En móviles usar scroll para mejor rendimiento */
  }
  
  .fondo.fondo-loaded {
    background-attachment: scroll;
    background-size: cover;
    background-position: center;
  }
}

/* Para pantallas muy pequeñas, usar cover para evitar espacios vacíos */
@media (max-width: 480px) {
  .fondo.fondo-loaded {
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
  }
}

.fondo::before {
  content: "";
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  /* Optimización para dispositivos que no soportan backdrop-filter */
  background: rgba(0, 0, 0, 0.1);
}

/* Contenedor principal con espaciado */
.content-wrapper {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

/* Grid de cards con espaciado */
.cards-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  max-width: 800px;
}

/* Card del video */
.video-card {
  width: 100%;
  max-width: 800px;
  margin-bottom: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
}

.video-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

/* Cards de música - mismo ancho que el video */
.music-card {
  width: 100%;
  max-width: 800px; /* Mismo ancho que el video */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.music-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 1);
}

.music-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
}

.music-card-link:hover {
  text-decoration: none;
  color: inherit;
}

/* Contenido de las cards */
.card-content {
  padding: 1.5rem;
}

/* Media queries para responsive */
.media {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
}

.media-left {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.media-content {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

/* Imágenes de servicios de música */
.music-service-list__img {
  max-height: 60px;
  width: auto;
  object-fit: contain;
  display: block;
}

/* Botones de play */
.play-button {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  min-width: 100px;
  border: none;
  cursor: pointer;
}

.play-button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Responsive design */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 1rem 0.5rem;
  }
  
  .cards-grid {
    gap: 1.5rem;
    max-width: 100%;
  }
  
  .video-card,
  .music-card {
    max-width: 100%; /* En móviles ocupan todo el ancho */
  }
  
  .video-card {
    margin-bottom: 0.5rem;
  }
  
  .card-content {
    padding: 1rem;
  }
  
  .media {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
  
  .media-content {
    justify-content: center;
  }
  
  .music-service-list__img {
    max-height: 50px;
  }
  
  .play-button {
    padding: 0.5rem 1rem;
    min-width: 80px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    padding: 0.5rem;
  }
  
  .cards-grid {
    gap: 1rem;
  }
  
  .card-content {
    padding: 0.75rem;
  }
  
  .music-service-list__img {
    max-height: 40px;
  }
  
  .play-button {
    padding: 0.4rem 0.8rem;
    min-width: 70px;
    font-size: 0.8rem;
  }
}

/* Animación de carga para el fondo */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.fondo:not(.fondo-loaded) {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

/* Optimización de imágenes */
img {
  max-width: 100%;
  height: auto;
}

/* Optimización para iframe de YouTube */
iframe {
  max-width: 100%;
  border-radius: 8px;
}

/* Navbar responsive */
@media (max-width: 768px) {
  .navbar {
    padding: 0.5rem;
  }
  
  .navbar-brand {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .navbar-item img {
    width: 25px;
    height: 25px;
  }
}

/* Carrusel de videos */
.carousel-container {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 8px;
}

.carousel {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-item.active {
  opacity: 1;
}

/* Asegurar que el iframe de YouTube esté por encima */
.carousel-item.active iframe {
  position: relative;
  z-index: 5;
  pointer-events: auto;
}

.video-placeholder {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.video-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
}

.play-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 0, 0, 0.9);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.play-overlay:hover {
  background: rgba(255, 0, 0, 1);
  transform: translate(-50%, -50%) scale(1.1);
}

.play-button-overlay {
  color: white;
  font-size: 2rem;
  font-weight: bold;
}

/* Controles del carrusel - solo visibles en hover */
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
}

.carousel-container:hover .carousel-control {
  opacity: 1;
  pointer-events: auto;
}

.carousel-control:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: translateY(-50%) scale(1.1);
}

.carousel-control.prev {
  left: 20px;
}

.carousel-control.next {
  right: 20px;
}

/* Indicadores del carrusel - solo visibles en hover */
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.carousel-container:hover .carousel-indicators {
  opacity: 1;
  pointer-events: auto;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.2);
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.8);
}

/* Responsive para el carrusel */
@media (max-width: 768px) {
  .carousel-container {
    height: 300px;
  }
  
  .carousel-control {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    opacity: 1; /* Siempre visibles en móviles */
    pointer-events: auto;
  }
  
  .carousel-control.prev {
    left: 10px;
  }
  
  .carousel-control.next {
    right: 10px;
  }
  
  .carousel-indicators {
    bottom: 10px;
    opacity: 1; /* Siempre visibles en móviles */
    pointer-events: auto;
  }
  
  .indicator {
    width: 10px;
    height: 10px;
  }
  
  .play-overlay {
    width: 60px;
    height: 60px;
  }
  
  .play-button-overlay {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    height: 250px;
  }
  
  .carousel-control {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  .play-overlay {
    width: 50px;
    height: 50px;
  }
  
  .play-button-overlay {
    font-size: 1.2rem;
  }
}
</style>