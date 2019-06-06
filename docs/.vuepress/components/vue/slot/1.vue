<template>
    <child>
        <template v-slot="slotProps">
            <p>{{slotProps.childData.data1}}</p>
            <p>{{slotProps.childData.data2}}</p>
            <p>{{slotProps.childData.data3}}</p>
        </template>
    </child>
</template>
<script>
import child from './2.vue'
export default {
    components: {
        child
    }
};
</script>