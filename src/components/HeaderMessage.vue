<template>
  <div class="panel-heading">
    <img class="logo-heading" src="../assets/logo.jpg" />
    <table class="table-heading">
      <tr>
        <td>
          <a href="https://www.instagram.com/mutsushidelivery/?hl=pt-br">
            <img class="img-responsive" src="../assets/insta_conta.png" alt="Instagram" />
          </a>
        </td>
      </tr>
      <tr>
        <td>
          <a
            href="https://api.whatsapp.com/send?phone=5548996761473&text=Oii+estou+vindo+do+Site+&#128513;"
          >
            <img class="img-responsive" src="../assets/wpp_numero.png" alt="WhatsApp" />
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "HeaderMessage"
};
</script>

<style scoped>
.panel-heading {
  position: sticky;
  top: 0;
}

.table-heading {
  display: inline;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
}

.logo-heading {
  display: inline-block;
  margin-left: 10%;
  margin-right: auto;
  width: 40%;
}

.img-responsive {
  float: left;
  width: 80%;
  max-height: 80px;
}

@media screen and (max-width: 800px) {
  .img-responsive {
    float: center;
    width: 100%;
    max-height: 80px;
  }
  .logo-heading {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    height: 100%;
  }
  .table-heading {
    width: 100%;
  }
}
</style>
