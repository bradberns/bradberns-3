<template>
    <section>
      <UPopover :popper="{ placement: 'top' }">
          <UButton color="orange" label="Open"/>
              <template #panel>
                  <div class="p-4">
                      <div>
                          <!-- <img src="https://res.cloudinary.com/thecga/image/upload/v1710031183/Models/mads/mads-1-web.jpg" alt=""> -->
                          <ContentButtons />
                      </div>
                  </div>
              </template>
      </UPopover>
  </section>
  </template>