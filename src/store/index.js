import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        CUSTOMER_SERVICE_BASE_URI: 'http://localhost:8881/CUSTOMER-SERVICE',
        INVENTORY_SERVICE_BASE_URI: 'http://localhost:8881/INVENTORY-SERVICE',
        BILLING_SERVICE_BASE_URI: 'http://localhost:8881/BILLING-SERVICE',
    },
    mutations: {},
    actions: {},
    modules: {}
})