<template>
  <v-container>
    <Header></Header>
    <div class="my-6 text-left">
      <v-btn tile depressed class="black--text" to="/">
        <v-icon class="mr-3">mdi-arrow-left </v-icon> Back
      </v-btn>
    </div>

    <v-expansion-panels>
      <v-expansion-panel v-for="(bill, i) in bills" :key="i">
        <v-expansion-panel-header
          class="my-4"
          @click="fetchSingleBillDetails(bill.id)"
        >
          <div>
            <span class="font-weight-bold" style="color: #495464">
              Bill : #{{ bill.id }}
            </span>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div v-if="loadingSingleBill">
            <v-progress-circular
              :size="50"
              color="primary"
              indeterminate
            ></v-progress-circular>
          </div>
          <v-card v-else color="#f5f4f4" dark elevation="0" class="pa-10">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">billing Date</th>
                  <td>{{ openedBill.billingDate.split("T")[0] }}</td>
                </tr>
                <tr>
                  <th scope="row">customer</th>
                  <td>{{ openedBill.customer.name }}</td>
                </tr>
              </tbody>
            </table>
      <hr class="my-3">
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">product</th>
      <th scope="col">price</th>
      <th scope="col">quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(productItem, j) in openedBill.productItems" :key="j">
      <th scope="row">{{productItem.productID}}</th>
      <td>{{productItem.productName}}</td>
      <td>{{productItem.price}}</td>
      <td>{{productItem.quantity}}</td>
    </tr>
    
  </tbody>
</table>

            <v-card-actions class="">
              <v-list-item class="">
                <v-list-item-content>
                  <fabButton
                    text="Delete Bill "
                    icon="mdi-delete"
                    color="#ea2c62"
                    @click.native="showUpdateDialogForOneJob(job.job_id)"
                  /> </v-list-item-content
                ><v-list-item-content>
                  <fabButton
                    text="Edit Bill "
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
  name: "Bills",
  created() {
    this.fetchBills();
  },
  components: {
    Header,
    fabButton,
  },
  data() {
    return {
      bills: null,
      openedBill: null,
      loadingSingleBill: true,
    };
  },
  methods: {
    BILLING_SERVICE_BASE_URI() {
      return this.$store.state.BILLING_SERVICE_BASE_URI;
    },
    fetchBills() {
      let url = this.BILLING_SERVICE_BASE_URI() + "/bills";
      this.$axios
        .get(url)
        .then((res) => {
          this.loading = false;
          this.bills = res.data._embedded.bills;
        })
        .catch((error) => {
          this.loading = false;
          this.$swal("Try again", error.message, "warning");
        });
    },
    fetchSingleBillDetails(id) {
      this.loadingSingleBill = true;

      let url = this.BILLING_SERVICE_BASE_URI() + "/bills/full/" + id;
      this.$axios
        .get(url)
        .then((res) => {
          this.loadingSingleBill = false;
          this.openedBill = res.data;
        })
        .catch((error) => {
          this.loadingSingleBill = false;
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
</style>