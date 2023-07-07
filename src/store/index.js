import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default function createStore () {
    return new Vuex.Store({
        state: {
            todoItems: [
                { id: 1, content: 'CONTENT-1', activation: true },
                { id: 2, content: 'CONTENT-2', activation: false },
                { id: 3, content: 'CONTENT-3', activation: false },
            ],
        },
        mutations: {
            SET_TODO_ITEMS (state, todoItems) {
                state.todoItems = todoItems;
            }
        },
    })
};