<template>
    <div class="leave-aprv">
        <transition name="fade">
            <div v-show="show">
                <b-container style="padding-top: 30px;">
                    <b-row v-if="actionList.length > 0">
                        <b-col cols="12" align="right" style="padding-bottom: 15px">
                            <div class="btn-group" role="group" aria-label="Basic example">
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
                                    <tr v-for="data in leaveList" :key="data.id">
                                        <td><input type="checkbox" v-bind:value="data.id" v-model="actionList" /></td>
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
        props: {
        },
        data: function () {
            return {
                actionList: [],
                leaveList: listData,
                show: false
            }
        },
        mounted: function () {
            this.show = true;
        },
        methods: {
            ReturnClick: function (event) {
                alert(this.actionList);
            },
            SuccessClick: function (event) {
                alert(this.actionList);
            }
        }
    };
</script>

<style scoped>
</style>