<template>
    <div>
      <div>
          <body class="font-poppins antialiased">
              <div id="view" class="  flex flex-row">

                

                  <div id="sidebar"
                      class="bg-white h-screen md:block shadow-xl "
                      x-show="sidenav">
                      <div class="space-y-6 md:space-y-10 mt-10">
                          
                          <div id="menu" class="flex flex-col space-y-2">
                             
                            <RouterLink to="/rol"
                                  class="text-sm font-medium text-gray-700 py-2 px-2 hover:scale-105 rounded-md transition duration-150 ease-in-out">
                                  <oh-vue-icon name="fa-critical-role" class="inline-block w-8 h-8 mt-8 mr-2 "></oh-vue-icon>
                                  <span class="">Rol</span>
                           </RouterLink>
                            
                            <RouterLink to="/user"
                                  class="text-sm font-medium text-gray-700 py-2 px-2 hover:scale-105 rounded-md transition duration-150 ease-in-out">
                                  <oh-vue-icon name="fa-user-alt" class="inline-block w-8 h-8 mt-8 mr-2 "></oh-vue-icon>
                                  <span class="">Usuario</span>
                          </RouterLink>
                          </div>
                          <RouterLink to="/auth"
                                  class="text-sm font-medium text-gray-700 py-2 px-2  hover:scale-105 rounded-md transition duration-150 ease-in-out">
                                  <oh-vue-icon name="ri-logout-box-line" class="inline-block w-8 h-8 mt-8 mr-2 "></oh-vue-icon>
                                  <span class="">Cerrar sesion</span>
                          </RouterLink>
                      </div>
                  </div>
              </div>
          </body>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
      import OhVueIcon from "../../plugins/oh-vue-icon.ts"
  </script>
  
  <style lang="scss" scoped>
  
  
  </style>
  