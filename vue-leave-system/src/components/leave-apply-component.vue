<template>
    <div class="leave-apply">
        <div class="fly-animation">
            <b-container style="padding-top: 30px;">
                <b-row>
                    <b-col cols="2"></b-col>
                    <b-col class="h-align" cols="8">
                        <table class="table table-bordered shadow" style="background-color: #FFFFFF">
                            <tbody>
                                <tr>
                                    <td style="width: 30%;" align="right">開始日期 / 時間</td>
                                    <td align="left">
                                        <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">結束日期 / 時間</td>
                                    <td align="left">
                                        <date-picker :date="endtime" :option="option" :limit="limit"></date-picker>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">時數(1日:8時數)</td>
                                    <td align="left">
                                        <input type="text" class="form-control form-control-sm" placeholder="輸入時數">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">請假類別</td>
                                    <td align="left">
                                        <select class="custom-select custom-select-sm">
                                            <option selected> ( 請選擇 ) </option>
                                            <option value="1">病假</option>
                                            <option value="2">事假</option>
                                            <option value="3">特休</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">請假事由</td>
                                    <td align="left">
                                        <input type="text" class="form-control form-control-sm" placeholder="請假事由">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">覆核人員</td>
                                    <td align="left">
                                        <input type="text" class="form-control form-control-sm" placeholder="覆核人員">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">批准後通知管理部</td>
                                    <td align="left">
                                        <input type="text" class="form-control form-control-sm" placeholder="管理部email">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">批准後通知人員</td>
                                    <td align="left">
                                        <input type="text" class="form-control form-control-sm" placeholder="通知人員email">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </b-col>
                    <b-col cols="2"></b-col>
                </b-row>
                <b-row>
                    <b-col cols="2"></b-col>
                    <b-col cols="8">
                        <div align="right">
                            <button type="button" class="btn btn-success">申請</button>
                        </div>
                    </b-col>
                    <b-col cols="2"></b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    //使用第三方組件vue-datepicker
    import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue';

    export default {
        name: 'leave-apply',
        props: {
        },
        data: function () {
            return {
                show: false,
                // date-picker參數
                startTime: {
                    time: ''
                },
                endtime: {
                    time: ''
                },
                option: {
                    type: 'min',
                    week: ['一', '二', '三', '四', '五', '六', '日'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD HH:mm',
                    placeholder: '選取時間',
                    inputStyle: {
                        'display': 'inline-block',
                        'padding': '6px',
                        'line-height': '22px',
                        'font-size': '16px',
                        'border': '2px solid #fff',
                        'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
                        'border-radius': '2px',
                        'color': '#5F5F5F'
                    },
                    color: {
                        header: '#3F51B5',
                        headerText: '#FFFFFF'
                    },
                    buttons: {
                        ok: 'Ok',
                        cancel: 'Cancel'
                    },
                    overlayOpacity: 0.5,
                    dismissible: true
                },
                limit: []
            }
        },
        mounted: function () {
            this.show = true;
        },
        methods: {
            ApplyClick: function () {
                alert('apply!');
            }
        },
        components: {
            'date-picker': myDatepicker
        }
    };
</script>

<style scoped>
    
</style>