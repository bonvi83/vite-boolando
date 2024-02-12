<script>
export default {
  data() {
    return {
      links: [
        {
          text: "Donna",
          url: "#",
          current: false,
        },
        {
          text: "Uomo",
          url: "#",
          current: false,
        },
        {
          text: "Bambini",
          url: "#",
          current: false,
        },
      ],
    };
  },
};
</script>

<template>
  <footer>
    <div>
      <h5>Booleando s.r.l</h5>
      <p class="footer-text">Informazioni legali</p>
      <p class="footer-text">Informativa sulla privacy</p>
      <p class="footer-text">Diritto di recesso</p>
    </div>
    <div>
      <h5>Trovaci anche su</h5>
      <div class="footer-icons">
        <i class="fa-brands fa-square-twitter"></i>
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-square-pinterest"></i>
        <i class="fa-brands fa-square-youtube"></i>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
