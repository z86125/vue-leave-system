<template>
    <div class="leave-history">
        <transition name="fade">
            <div v-show="show">
                <b-container style="padding-top: 30px;">
                    <b-row>
                        <b-col class="h-align" cols="12">
                            <table class="table table-bordered table-hover shadow app-table">
                                <thead>
                                    <tr>
                                        <td>申請人員</td>
                                        <td>日期</td>
                                        <td>時數</td>
                                        <td>請假類別</td>
                                        <td>請假事由</td>
                                        <td>申請時間</td>
                                        <td>覆核狀態</td>
                                        <td>覆核人員</td>
                                        <td>覆核時間</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in leaveList" :key="data.id">
                                        <td>{{ data.Apply_Person }}</td>
                                        <td>{{ data.Data_Dt }}</td>
                                        <td>{{ data.Hours }}</td>
                                        <td>{{ data.Leave_Typ }}</td>
                                        <td>{{ data.Leave_Desc }}</td>
                                        <td>{{ data.Apply_Dt }}</td>
                                        <td>{{ data.Aprv_Result }}</td>
                                        <td>{{ data.Aprv_Person }}</td>
                                        <td>{{ data.Aprv_Dt }}</td>
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
            Apply_Person: 'Robert',
            Data_Dt: '2019/01/01',
            Hours: 8,
            Leave_Typ: '事假',
            Leave_Desc: '出國旅遊',
            Apply_Dt: '2018/01/01',
            Aprv_Result: '通過',
            Aprv_Person: 'John',
            Aprv_Dt: '2018/01/05'
        }, {
            id: 2,
            Apply_Person: 'Osborn',
            Data_Dt: '2019/01/02',
            Hours: 8,
            Leave_Typ: '病假',
            Leave_Desc: '頭痛',
            Apply_Dt: '2018/01/01',
            Aprv_Result: '退回',
            Aprv_Person: 'John',
            Aprv_Dt: '2018/01/05'
        }, {
            id: 3,
            Apply_Person: 'Vito',
            Data_Dt: '2019/01/03',
            Hours: 8,
            Leave_Typ: '特休',
            Leave_Desc: 'null',
            Apply_Dt: '2018/01/01',
            Aprv_Result: '通過',
            Aprv_Person: 'John',
            Aprv_Dt: '2018/01/05'
        },
    ];

    export default {
        name: 'leave-history',
        props: {
        },
        data: function () {
            return {
                leaveList: listData,
                show: false
            }
        },
        mounted: function () {
            this.show = true;
        }
    };
</script>

<style scoped>
</style>