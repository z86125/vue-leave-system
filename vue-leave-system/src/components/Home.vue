<template>
    <div class="home">
        <transition name="fade">
            <div v-show="show">
                <div class="h-align fly-ani">
                    <span>嗨 <a href="https://vuejs.org" target="_blank">Vue.js</a>，這是請假系統的首頁 !</span>
                    <br />
                    <img src="../assets/image/home_leave.jpeg"/>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        },
        data: function () {
            return {
                show: false
            }
        },
        mounted: function () {
            this.show = true;
        },
    };
</script>

<style scoped>
    @keyframes fly {

        0% {
            top: 100%;
        }

        100% {
            top: 60px;
        }
    }

    .fly-ani {
        width: 100%;
        position: absolute;
        animation-name: fly;
        animation-duration: 1s;
    }
</style>
