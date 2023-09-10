<template>
    <div>
       <RolModal></RolModal>
       <DashboardComponent></DashboardComponent>
        <RolTable></RolTable> 
       
       
    </div>
</template>

<script lang="ts" setup>
    import RolTable from '../components/rol/Rol.Table.vue'
    import DashboardComponent from '../components/dashboard/Dashboard.Component.vue';
    import RolModal from '../components/rol/Rol.Modal.vue';

</script>

<style lang="scss" scoped>


</style>