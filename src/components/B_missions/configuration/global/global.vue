<template>
    <div>
        <ul>
            <li v-for='(item,index) of cen' :class="{active:$route.name.indexOf(item.title) != -1}">
                <router-link :to='item.url'>
                    {{item.title}}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                cen:[
                    {
                        title:'工作组建',
                        url:"/B_missions/configuration/global/addons",
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>