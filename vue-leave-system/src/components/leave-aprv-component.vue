<template>
    <!-- class需與下面的name相同 -->
    <div class="leave-aprv">
        <!--vue內建，處理組件動畫效果的tag-->
        <transition name="fade">
            <div v-show="show">
                <!-- bootstrap Grid system -->
                <b-container style="padding-top: 30px;">
                    <b-row v-if="actionList.length > 0">
                        <b-col cols="12" align="right" style="padding-bottom: 15px">
                            <div class="btn-group" role="group" aria-label="Basic example">
                                                                            <!-- CLICK事件綁定 -->
                                <button type="button" class="btn btn-success" v-on:click="SuccessClick">覆核</button>
                                <button type="button" class="btn btn-danger" v-on:click="ReturnClick">退回</button>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="h-align" cols="12">
                            <table class="table table-bordered table-hover shadow app-table">
                                <thead>
                                    <tr>
                                        <td></td>
                                        <td>日期</td>
                                        <td>時數</td>
                                        <td>請假類別</td>
                                        <td>請假事由</td>
                                        <td>申請人員</td>
                                        <td>申請時間</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- v-for: 類似ko: foreach -->
                                    <!-- vue的v-for需要定義一個:key值 -->
                                    <tr v-for="data in leaveList" :key="data.id">
                                        <!-- checkbox應用 -->
                                        <td><input type="checkbox" v-bind:value="data.id" v-model="actionList" /></td>
                                        <!-- vue渲染text的表示法 -->
                                        <td>{{ data.Data_Dt }}</td>
                                        <td>{{ data.Hours }}</td>
                                        <td>{{ data.Leave_Typ }}</td>
                                        <td>{{ data.Leave_Desc }}</td>
                                        <td>{{ data.Apply_Person }}</td>
                                        <td>{{ data.Apply_Dt }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </transition>
    </div>
</template>

<script>
    // List假資料
    var listData = [
        {
            id: 1,
            Data_Dt: '2019/01/01',
            Hours: 8,
            Leave_Typ: '事假',
            Leave_Desc: '出國旅遊',
            Apply_Person: 'Aldrich',
            Apply_Dt: '2018/01/01'
        }, {
            id: 2,
            Data_Dt: '2019/01/02',
            Hours: 8,
            Leave_Typ: '病假',
            Leave_Desc: '頭痛',
            Apply_Person: 'Bennett',
            Apply_Dt: '2018/01/01'
        }, {
            id: 3,
            Data_Dt: '2019/01/03',
            Hours: 8,
            Leave_Typ: '特休',
            Leave_Desc: 'null',
            Apply_Person: 'Rod',
            Apply_Dt: '2018/01/01'
        },
    ];
    export default {
        name: 'leave-aprv',
        props: [
            'userData'
        ],
        data: function () {
            return {
                actionList: [],
                leaveList: listData,
                show: false
            }
        },
        // 生命週期函式，還有created,updated,destroyed等等
        mounted: function () {
            this.show = true;
        },
        methods: {
            ReturnClick: function () {
                alert(this.actionList);
            },
            SuccessClick: function () {
                alert(this.actionList);
            }
        }
    };
</script>

<!-- 子組件內定義的style scoped只會作用在這個組件中 -->
<style scoped>
</style>