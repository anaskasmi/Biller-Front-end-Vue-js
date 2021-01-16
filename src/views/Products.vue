<template>
  <v-container>
    <Header></Header>
    <div class="my-6 text-left">
      <v-btn tile depressed class="black--text" to="/">
        <v-icon class="mr-3">mdi-arrow-left </v-icon> Back
      </v-btn>
    </div>

    <v-expansion-panels>
      <v-expansion-panel v-for="(product, i) in products" :key="i">
        <v-expansion-panel-header class="my-4">
          <div>
            <span class="font-weight-bold  " style="color: #495464" >
              {{ product.name.toUpperCase() }}
            </span>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card color="#f5f4f4" dark elevation="0" class="pa-10">
            <v-container>
              <v-row>
                <v-col>
                  <v-card color="#2d6187" class="text-center" dark height="200">
                    <v-row class="row col-12 justify-center">
                      <div class="mt-4" style="font-size:49px">Unit Price</div>
                    </v-row>
                    <v-row class="row col-12 justify-center">
                      <span class="font-weight-bold" style="font-size:29px"
                        >{{ product.price }} Dhs</span
                      >
                    </v-row>
                  </v-card>
                </v-col>
                <v-col>
                   <v-card color="#214252" class="text-center" dark height="200">
                    <v-row class="row col-12 justify-center">
                      <div class="mt-4" style="font-size:49px">Quantity In Stock</div>
                    </v-row>
                    <v-row class="row col-12 justify-center">
                      <span class="font-weight-bold" style="font-size:29px"
                        >{{ product.quantity }} Units</span
                      >
                    </v-row>
                  </v-card>
                 
                </v-col>
              </v-row>
            </v-container>
      <hr>
            <v-card-actions class="">
              <v-list-item class="">
                <v-list-item-content>
                  <fabButton
                    text="Delete Product "
                    icon="mdi-delete"
                    color="#ea2c62"
                    @click.native="showUpdateDialogForOneJob(job.job_id)"
                  /> </v-list-item-content
                ><v-list-item-content>
                  <fabButton
                    text="Edit Product "
                    icon="mdi-pencil "
                    color="#008891"
                    @click.native="repostOneJob(job.job_id, true)"
                  />
   
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import fabButton from "./../components/fabButton.vue";

export default {
  name: "Products",
  created() {
    this.fetchProducts();
  },
  components: {
    Header,
    fabButton,
  },
  data() {
    return {
      products: null,
     
    };
  },
  methods: {
    INVENTORY_SERVICE_BASE_URI() {
      return this.$store.state.INVENTORY_SERVICE_BASE_URI;
    },
    fetchProducts() {
      let url = this.INVENTORY_SERVICE_BASE_URI() + "/products";
      this.$axios
        .get(url)
        .then((res) => {
          this.loading = false;
          this.products = res.data._embedded.products;
        })
        .catch((error) => {
          this.loading = false;
          this.$swal("Try again", error.message, "warning");
        });
    },
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
.name-header {
  color: #4e555d;
}
.email-header {
  font-size: 16px;
  color: #555555;
}
</style>