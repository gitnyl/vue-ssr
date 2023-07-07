import Vue from 'vue';
import App from './App.vue';
import createRouter from './router';
import createStore from './store';

export default (context) => new Promise(async (resolve, reject) => {

    const router = createRouter();
    const store = createStore();

    // context에서 state를 가져옵니다.
    const { url, state } = context;

    // store에 반영합니다.
    store.commit('SET_TODO_ITEMS', state.todoItems);

    await router.push(url);

    router.onReady(() => resolve(
        new Vue({
            router,
            store,
            render: h => h(App)
        }))
    );
})