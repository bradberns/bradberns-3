<script setup lang="ts">

</script>

<template>
    <div id="aboutPopOverButton" class="mx-auto text-center">
        <div class="">
            <UPopover :popper="{ placement: 'top' }">
                <UButton class="text-lg mb-2" size="md"
                    color="orange"
                    label="My videos"/>
                    <template #panel>
                        <div class="p-4 bg-white">
                            <div>
                                <CTA />
                            </div>
                        </div>
                    </template>
            </UPopover>
        </div>
    </div>
</template>