<template>
  <div class="panel-footer">
    <div class="table-responsive">
      <table class="table">
        <tbody>
          <tr>
            <td>
              <a href="https://www.instagram.com/mutsushidelivery/?hl=pt-br">
                <img
                  class="img-responsive"
                  src="../assets/insta_conta.png"
                  alt="Instagram"
                  style="float:right;width:300px"
                />
              </a>
            </td>
            <td>
              <a
                href="https://api.whatsapp.com/send?phone=5548996761473&text=Oii+estou+vindo+do+Site+&#128513;"
              >
                <img
                  class="img-responsive"
                  src="../assets/wpp_numero.png"
                  alt="WhatsApp"
                  style="float:left;width:300px"
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMessage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel-footer {
  position: sticky;
  bottom: 0;
  height: 80px;
}
</style>
