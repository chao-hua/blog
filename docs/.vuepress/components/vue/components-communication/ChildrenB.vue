<template>
    <div class="wrap">
        <h3>B 结点</h3>
        <ChildrenD />
        <ChildrenE />
    </div>
</template>
<script>
import ChildrenD from "./ChildrenD";
import ChildrenE from "./ChildrenE";
export default {
    components: {
        ChildrenD,
        ChildrenE
    }
};
</script>