// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'd free learning' },
      ],
      link: [
        { rel: 'icon', href: '/img/DFL_Logo02.png', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/img/DFL_Logo02.png' },
        { rel: 'apple-touch-icon', href: '/img/DFL_Logo02.png' },

        // Google Fonts
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i' },
        
        // Vendor CSS Files
        { rel: 'stylesheet', href: '/vendor/aos/aos.css' },
        { rel: 'stylesheet', href: '/vendor/bootstrap/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/vendor/bootstrap-icons/bootstrap-icons.css' },
        { rel: 'stylesheet', href: '/vendor/boxicons/css/boxicons.min.css' },
        { rel: 'stylesheet', href: '/vendor/glightbox/css/glightbox.min.css' },
        { rel: 'stylesheet', href: '/vendor/remixicon/remixicon.css' },
        { rel: 'stylesheet', href: '/vendor/swiper/swiper-bundle.min.css' },

        // Template Main CSS File
        { rel: 'stylesheet', href: '/css/style.css' },

        // my style custom
        { rel: 'stylesheet', href: '/css/myStyle.css' },
      ],
      script: [
        // Vendor JS Files
        { src: '/vendor/aos/aos.js' },
        { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js' },
        { src: '/vendor/glightbox/js/glightbox.min.js' },
        { src: '/vendor/isotope-layout/isotope.pkgd.min.js' },
        { src: '/vendor/swiper/swiper-bundle.min.js' },
        { src: '/vendor/waypoints/noframework.waypoints.js' },
        { src: '/vendor/php-email-form/validate.js' },

        // Template Main JS File
        { src: '/js/main.js' },
      ],
    },
  },

  devtools: { enabled: true }
})
