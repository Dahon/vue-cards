<template>
    <div class="col-3">
        <h3>Slot {{ index }}</h3>
        <draggable class="list-group" v-model="listGroup" group="people" @end="handleDrop">
            <div
                class="list-group-item my-2"
                v-for="(element) in listGroup"
                :key="element.name"
                >
                <h2>{{ element.name }}</h2>
                <p>{{ element.desc }}</p>
            </div>
        </draggable>
    </div>
</template>
<script>

import draggable from 'vuedraggable'

export default {
    name: "card",
    props: [
        'name',
        'index'
    ],
    components: {
        draggable
    },
    computed: { 
        listGroup: {
            get() {
                return this.$store.state.data[this.name];
            },
            set(value) {
                this.$store.commit('setListGroup', {
                    value,
                    key: this.name,
                });
            }
        }
    },
    methods: {
        handleDrop () {
            this.$store.dispatch('storeList')
        }
    },
};
</script>

<style scoped>
    .list-group{
        min-height: 100%;
    }
    .list-group-item{
        border-top-width: 1px!important;
        min-height: 200px;
        max-height: 200px;
        overflow: auto;
        word-wrap: break-word
    }


</style>