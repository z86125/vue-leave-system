<template>
    <div class="notfound">
        <div>
            <div class="h-align fly-ani">
                <span>欸 ! 這是無效的網址 !</span>
                <br />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'notfound',
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
