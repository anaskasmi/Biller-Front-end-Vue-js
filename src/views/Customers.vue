<template>
  <v-container>
    <Header></Header>
    <div class="row col-12 justify-content-between">
      <div class="my-6 text-left">
        <v-btn tile depressed class="black--text" to="/">
          <v-icon class="mr-3">mdi-arrow-left </v-icon> Back
        </v-btn>
      </div>
      <div class="my-6 text-left">
        <v-btn tile depressed class="black--text" @click="showAddCustomerModal = !showAddCustomerModal">
          <v-icon class="mr-3">mdi-account-star </v-icon> Add New Customer
        </v-btn>
      </div>
    </div>
    <addCustomerModal v-if="showAddCustomerModal" />
    <v-expansion-panels>
      <v-expansion-panel v-for="(customer, i) in customers" :key="i">
        <v-expansion-panel-header class="my-4">
          <div>
            <v-avatar
              :color="colors[Math.floor(Math.random() * colors.length)]"
              class="mr-2"
            >
              <span class="white--text headline"
                >{{ customer.name[0].toUpperCase()
                }}{{ customer.name[1].toUpperCase() }}</span
              >
            </v-avatar>
            <span class="font-weight-bold">
              {{ customer.name }}
            </span>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card color="#f5f4f4" dark elevation="0" class="pa-10">
            <v-card-text class="headline font-weight-bold">
              <div class="name-header">
                {{ customer.name.toUpperCase() }}
              </div>
              <div class="email-header">
                <v-icon class="black--text"> mdi-email </v-icon>
                {{ customer.email }}
              </div>
            </v-card-text>
            <hr class="my-5" />
            <v-card-actions>
              <v-list-item class="">
                <v-list-item-content>
                  <fabButton
                    text="Delete Customer "
                    icon="mdi-delete"
                    color="#ea2c62"
                    @click.native="showUpdateDialogForOneJob(job.job_id)"
                  /> </v-list-item-content
                ><v-list-item-content>
                  <fabButton
                    text="Edit Customer "
                    icon="mdi-pencil "
                    color="#008891"
                    @click.native="repostOneJob(job.job_id, true)"
                  />
                </v-list-item-content>
                <v-list-item-content>
                  <fabButton
                    text="Products bought by this customer "
                    icon="mdi-format-list-bulleted-square   "
                    color="#f05454"
                    @click.native="repostOneJob(job.job_id, true)"
                  /> </v-list-item-content
                ><v-list-item-content>
                  <fabButton
                    text="Customers Bills "
                    icon="mdi-newspaper-plus  "
                    color="#1a508b"
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
import addCustomerModal from "./../components/addCustomerModal.vue";

export default {
  name: "Customers",
  created() {
    this.fetchCustomers();
  },
  components: {
    Header,
    fabButton,
    addCustomerModal

  },
  data() {
    return {
      customers: null,
      showAddCustomerModal:false,
      colors: [
        "#e5707e",
        "#515070",
        "#247ba0",
        "#1a508b",
        "#16c79a",
        "#af0069",
        "#e27802",
      ],
    };
  },
  methods: {
    CUSTOMER_SERVICE_BASE_URI() {
      return this.$store.state.CUSTOMER_SERVICE_BASE_URI;
    },
    fetchCustomers() {
      let url = this.CUSTOMER_SERVICE_BASE_URI() + "/customers";
      this.$axios
        .get(url)
        .then((res) => {
          this.loading = false;
          this.customers = res.data._embedded.customers;
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