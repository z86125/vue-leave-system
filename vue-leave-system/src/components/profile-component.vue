<template>
    <div class="profile">
        <div class="fly-animation">
            <!-- b-container為bootstrap-vue的tag
                 為加強版的bootstrap grid，用來達到RWD的效果
            -->
            <b-container style="padding-top: 30px;">
                <b-row>
                    <b-col cols="2"></b-col>
                    <b-col class="h-align" cols="8">
                        <table class="table table-bordered shadow" style="background-color: #FFFFFF">
                            <tbody>
                                <tr>
                                    <td style="width: 30%;" align="right">中文名稱</td>
                                    <td align="left">{{ userInfo.name }}</td>
                                </tr>
                                <tr>
                                    <td align="right">英文名稱</td>
                                    <td align="left">{{ userInfo.engName }}</td>
                                </tr>
                                <tr>
                                    <td align="right">部門</td>
                                    <td align="left">{{ userInfo.site }}</td>
                                </tr>
                                <tr>
                                    <td align="right">員編</td>
                                    <td align="left">{{ userInfo.staffNo }}</td>
                                </tr>
                                <tr>
                                    <td align="right">到職日</td>
                                    <td align="left">{{ userInfo.onBoardDt }}</td>
                                </tr>
                                <tr>
                                    <td align="right">主管</td>
                                    <td align="left">{{ userInfo.supervisor }}</td>
                                </tr>
                                <tr>
                                    <td align="right">108年特休天數</td>
                                    <td align="left">{{ userInfo.annualLeave }}</td>
                                </tr>
                                <tr>
                                    <td align="right">108年特休未休天數</td>
                                    <td align="left">{{ userInfo.annualLeaveRemain }}</td>
                                </tr>
                                <tr>
                                    <td align="right">108年事假天數</td>
                                    <td align="left">{{ userInfo.personalLeave }}</td>
                                </tr>
                                <tr>
                                    <td align="right">108年病假天數</td>
                                    <td align="left">{{ userInfo.sickLeave }}</td>
                                </tr>
                                <tr>
                                    <td align="right">108年其他假天數</td>
                                    <td align="left">{{ userInfo.otherLeave }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </b-col>
                    <b-col cols="2"></b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>

    // 暫時的用戶資料
    //
    var userData = {
        name: '陳水扁',
        engName: 'aBen',
        site: 'PS',
        staffNo: 299,
        onBoardDt: '2018/01/01',
        supervisor: 'hung',
        annualLeave: 10,
        annualLeaveRemain: 5,
        personalLeave: 3,
        sickLeave: 8,
        otherLeave: 0
    };

    export default {
        name: 'profile',
        props: {
        },
        data: function () {
            return {
                userInfo: userData,
                show: false
            }
        },
        created: function () {
        },
        mounted: function () {
            this.show = true;
        }
    };
</script>

<style scoped>
</style>