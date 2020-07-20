<template>
    <b-container fluid="md">
        <div class="row">
            <div class="col-12 text-right my-3">
                <b-button v-b-modal.myModal>Добавить</b-button>
            </div>

            <b-modal id="myModal" hide-footer title="BootstrapVue">
                <b-form-select v-model="form.type" :options="options"></b-form-select>
                <b-form-input v-model="form.name" placeholder="Название" class="my-3" ></b-form-input>
                <b-form-textarea
                    id="textarea"
                    v-model="form.description"
                    placeholder="Описание"
                    rows="3"
                    max-rows="6"
                    ></b-form-textarea>
                <div class="text-right">
                    <b-button class="m-3" variant="outline-primary" @click="add">Добавить</b-button>
                    <b-button variant="outline-warning" @click="toggleModal">Отмена</b-button>
                </div>
            </b-modal>
        
            <card v-for="(value, key, index) in lists" :key="index" :index="index+1" :name="key"></card>

    </div>
</b-container>
  
</template>
<script>
import card from './card.vue'
import { required } from 'vuelidate/lib/validators'

export default {
  name: "cards",
  components: {
    card
  },
  data() {
    return {
        options: [
          { value: 'list1', text: 'Столбец №1'},
          { value: 'list2', text: 'Столбец №2' },
          { value: 'list3', text: 'Столбец №3' },
          { value: 'list4', text: 'Столбец №4' }
        ],
        form: {
            name: '',
            description: '',
            type: 'list1'
        },
    };
  },
  validations: {
    form: {
      name: {required},
      description: {required},
    }
  },
  computed: {
      lists: {
          get() {
            return this.$store.state.data
          },
          set(value) {
            this.$store.commit('setList', value)
          }
      }
  },
  mounted() {
    console.log(this.$v)
  },
  methods: {
    add() {
      if(this.form.name != '') {
        this.$store.commit('setListData', { name: this.form.name, desc: this.form.description, key: this.form.type});
        this.form.name = '';
        this.form.description = '';
        this.$bvModal.hide('myModal');
      }
      
    },
    toggleModal() {
      this.$bvModal.hide('myModal')
    },
  }
};
</script>