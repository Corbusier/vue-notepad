<template>
    <div id="app" class="blue">
        <n-header @tools="changePages"></n-header>
        <section class="container" :class="{'hide': table}">
            <n-add></n-add>
            <n-list></n-list>
            <n-sidebar :is-show="tools"
                       @uploadData="uploadData"
                       @openTable='table = true;tools = false'
                       @cleardialog='clearData'
            ></n-sidebar>
        </section>
        <transition name="dialog">
            <n-dialog v-show="dialog" :msg="tips" @cancel="dialog = false" @sure="sureDialog"></n-dialog>
        </transition>
        <n-table @deldialog="delData" :is-show="table"></n-table>
    </div>
</template>


<script>
    import nHeader from './components/nHeader'
    import nSidebar from './components/nSidebar'
    import nAdd from './components/event_add'
    import nList from './components/event_list'
    import nTable from './components/event_table'
    import nDialog from './components/dialog'
    
    export default{
        data(){
            return {
                tools: false,
                table: false,
                dialog: false,
                tips: '',
                dialog_type: '',
                del_info: {
                    index: 0,
                    id: 0
                }
            }
        },
        components: {
            nHeader,nSidebar,nAdd,nList,nTable,nDialog
        },
        methods: {
            changePages() {
                if(this.table){
                    this.table = !this.table
                }else{
                    this.tools = !this.tools
                }
            },
            uploadData() {
                this.tools = false
                this.dialog = true
                this.dialog_type = 'upload'
                this.tips = 'upload'
            },
            clearData() {
                this.tools = false
                this.dialog = true
                this.dialog_type = 'clear'
                this.tips = '清空后无法恢复,确认清空吗?'
            },
            sureDialog() {
                let self = this
                switch (self.dialog_type) {
                    case 'clear': 
                        self.$store.dispatch('clearevent')
                        self.$toast('清空数据成功')
                        break;

                    case 'del': 
                        self.$store.dispatch('delevent',self.del_info)
                        self.$toast('删除成功')
                        break;
                        
                }
                this.dialog = false
            },
            delData(index,id) {
                this.dialog = true
                this.dialog_type = 'del'
                this.tips = '删除后无法恢复,确认删除吗?',
                this.del_info = {
                    index,
                    id
                }
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" src="../static/theme.scss"></style>
<style lang="scss" rel="stylesheet/scss">
    html,body,ul,li,input,p{
        margin:0;
        padding:0;
    }
    body{
        font-size: 16px;
        font-family: "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
    }
    input,button{
        -webkit-tap-highlight-color: transparent;
    }
    input[type=text]{
        -webkit-appearance: none;
    }
    button{
        padding:7px 0;
        outline: none;
        text-align: center;
        border-radius: 4px;
        box-sizing: border-box;
        font:{
            size:inherit;
            family: inherit;
        }
        cursor: pointer;
    }
    html,body{
        height: 100%;
    }
    ::-webkit-scrollbar{
        width: 0;
    }
    body,#app{
        width:100%;
        overflow-x: hidden;
    }
    #app{
        height: 100%;
        padding-bottom: 60px;
        box-sizing: border-box;
    }

    ul{
        list-style: none;
    }
    .container{
        width:100%;
        padding: 0 10px;
        max-width:800px;
        margin:auto;
        box-sizing: border-box;
        &.hide{
            display: none;
        }
    }
    .dialog-enter-active, .dialog-leave-active {
        transition: opacity .3s;
    }
    .dialog-enter, .dialog-leave-to{
        opacity: 0;
    }
</style>
