<template>
  <div class="col-span-12 z-30 absolute w-[81.5%] h-[calc(100% - 20%)] top-[20%] left-[10%] flex  justify-center">
    <div class="overflow-auto lg:overflow-visible">
      <table class="table text-black  space-y-6 text-sm">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="p-3 text-left">Rol</th>
            <th class="p-3">isActive</th>
            <th class="p-6 text-left">Acciones</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="roles in rol" :key="roles.id">
            <td class="p-3">
              <div class="flex align-items-center">
                <div class="ml-3">
                  <div class="text-sm text-black">{{ roles.rol }}</div>
                </div>
              </div>
            </td>
            <td class="p-3">
              <div class="flex align-items-center">
                <div class="ml-3">
                  <span class="text-black">Sí</span>
                </div>
              </div>
            </td>
            <td class="p-3">
              <!-- modal -->
              
              <dialog id="myModal2" class=" bg-red-300 rounded-md w-[65%] h-[50%]">
                <div class="flex flex-col w-full h-auto">
                  <!-- Header -->
                  <div class="flex w-full h-auto justify-center items-center">
                    <div class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold">
                      Actualizar rol
                    </div>
                    <div onclick="document.getElementById('myModal2').close();"
                      class="flex w-1/12 h-auto justify-center cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="flex w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500">
                    <form class="flex flex-col space-y-4">
                      <div class="mb-4">
                        <label for="rolName" class="block text-sm font-medium text-gray-700">Nombre del Rol</label>

                        <input type="text" id="rolName" name="rolName"
                          class="mt-1 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      </div>

                      <div class="flex justify-center space-x-4">
                        <button type="submit"
                          class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">Actualizar
                          Rol</button>
                        <button type="button"
                          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Cancelar</button>
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>
            <div class="flex justify-center space-x-4">
              <UpdateRol :rol="roles.rol" :id="roles.id"></UpdateRol>
               <button @click="handleDelete(roles.id)"
                class="border border-red-500 bg-red-500 text-white  px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                Eliminar
              </button>
           </div>
           
          </td>
          </tr>
          <!-- Segunda Fila -->

        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import UpdateRol from '../../components/rol/UpdateRol.vue'
import Swal from 'sweetalert2'

// Pagination
import { UseRolStore } from "../../store/rol.store.ts";
const { GetAllRol } = UseRolStore();

const { rol } = storeToRefs(UseRolStore())

onMounted(async () => {
  await GetAllRol()
});

const { DeleteRol } = UseRolStore();


const handleDelete = (id : number) => {
  Swal.fire({
    title: "¿Estas seguro?",
    text: "¿Esta accion no se puede deshacer?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Si, Eliminar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      DeleteRol(id).then(() => {
        Swal.fire({
          title: "Eliminado",
          text: "El rol ha sido eliminado",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      });

    }
  });
}


</script>

<style lang="scss" scoped>
.table {
  border-spacing: 0 15px;
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
}

// tr td:nth-child(n+0),
// tr th:nth-child(n+0) {
//   border-radius: 0 .625rem .625rem 0;
// }

// tr td:nth-child(0),
// tr th:nth-child(0) {
//   border-radius: .625rem 0 0 .625rem;
// }

dialog[open] {
  animation: appear .15s cubic-bezier(0, 1.8, 1, 1.8);
}

dialog::backdrop {
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(54, 54, 54, 0.5));
  backdrop-filter: blur(3px);
}


@keyframes appear {
  from {
    opacity: 0;
    transform: translateX(-3rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>