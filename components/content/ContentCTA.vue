<template>
    <section>
      <UPopover :popper="{ placement: 'top' }">
          <UButton color="orange" label="Open"/>
              <template #panel>
                  <div class="p-4">
                      <div>
                          <ContentButtons />
                      </div>
                  </div>
              </template>
      </UPopover>
  </section>
  </template>