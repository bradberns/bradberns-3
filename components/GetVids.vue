<script setup lang="ts">

</script>

<template>
    <div id="aboutPopOverButton" class="mx-auto">
        <div class=" md:mx-36 mx-12">
            <UPopover :popper="{ placement: 'top' }">
                <UButton class="text-2xl mb-2" size="lg"
                    block color="orange"
                    label="Get your videos here"/>
                    <template #panel>
                        <div class="p-4">
                            <div>
                                <CTA />
                            </div>
                        </div>
                    </template>
            </UPopover>
        </div>
    </div>
</template>