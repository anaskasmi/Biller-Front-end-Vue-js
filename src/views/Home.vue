<template>
  <v-container>
    <Header></Header>

    <v-row no-gutters>
      <v-col>
        <v-card color="#26c6da" dark class="card-margin">
          <v-card-text class="headline font-weight-bold font-size-28">
            Customers
          </v-card-text>

          <div class="pa-4">
            <img
              class="icon-card"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            />
          </div>
          <div>
            <v-btn block tile to="/customers"> Open </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="#26c6da" dark class="card-margin">
          <v-card-text class="headline font-weight-bold font-size-28">
            Products
          </v-card-text>
          <div class="pa-4">
            <img class="icon-card" src="@/assets/products.png" />
          </div>
          <div>
            <v-btn block tile to="/products"> Open </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="#26c6da" dark class="card-margin">
          <v-card-text class="headline font-weight-bold font-size-28">
            Bills
          </v-card-text>

          <div class="pa-4">
            <img class="icon-card" src="@/assets/billing.png" />
          </div>
          <div>
            <v-btn block tile to="/bills"> Open </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Exo+2");
@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap");
.exo2 {
  font-family: "Exo 2";
}
.Quicksand {
  font-family: "Quicksand";
}

.Kalam {
  font-family: "Kalam", cursive !important;
}

.font-size-28 {
  font-size: 28px;
}
.title {
  font-size: 70px !important;
  color: #199eaf;
}
.noline {
  text-decoration: none !important;
}
a:hover {
  text-decoration: none !important;
}
.icon-card {
  max-height: 420px;
  padding: 70px;
}
.card-margin {
  margin: 20px 80px;
}
</style>