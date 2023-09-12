<template>
  <div class="col-span-12 z-30 absolute w-[81.5%] h-[calc(100% - 20%)] top-[20%] left-[18.5%] flex justify-center">
      <div class="overflow-auto lg:overflow-visible">
          <table class="table text-gray-400 border-separate space-y-6 text-sm">
              <thead class="bg-gray-800 text-gray-500">
                  <tr>
                      <th class="p-3">Nombre</th>
                      <th class="p-3">Apellido</th>
                      <th class="p-3">Edad</th>
                      <th class="p-3">Género</th>
                      <th class="p-3">Correo</th>
                      <th class="p-3">Rol</th>
                      <th class="p-3">Acciones</th>


                  </tr>
              </thead>
              <tbody>

                  <tr v-for="users in user" :key="users.id"  class="bg-gray-800 ">
                      <td class="p-3">{{ users.name }}</td>
                      <td class="p-3">{{ users.lastName }}</td>
                      <td class="p-3">{{ users.age }}</td>
                      <td class="p-3">{{ users.gender }}</td>
                      <td class="p-3">{{ users.email }}</td>
                      <td class="p-3">{{ users.rol.rol }}</td>

                      <td class="p-3">

                        <div class="flex justify-center space-x-4">
                          <UpdateUser :user="users"  ></UpdateUser>
                         <button  @click="handleDelete(users.id)"
                              class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                              Eliminar
                          </button>
                        </div>
                          
                      </td>
                  </tr>
                  <!--gregar mas filas-->
              </tbody>
          </table>
          <pagination
        :total="paginates.total"
        :totalPages="paginates.totalPages"
        :pages="pages"
        :next="paginates.nextPag"
        :prev="paginates.prevPag"
        :currentPage="paginates.currentPage"
        :totalPag="paginates.totalPages"
        @method="ChangePage"
        
        >
      </pagination>
      </div>
    </div>
</template>

<script setup lang="ts">

import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import UpdateUser from "../../components/user/UpdateUser.vue"
import Swal from 'sweetalert2'
import { UseUserStore } from "../../store/user.store.ts";
import Pagination from "../global/Pagination.vue";

const { GetAllUser } = UseUserStore();
const { user } = storeToRefs(UseUserStore());

const { paginates, pages } = storeToRefs(UseUserStore());
const pagination = UseUserStore();

const ChangePage = (page: string | number) => {
pagination.GetUsers(Number(page), 4);
};

onMounted(async () => {
pagination.GetUsers(1, 4);
await GetAllUser();
});

// delete
const { DeleteUser } = UseUserStore();

// delete
const handleDelete = (id: number) => {
Swal.fire({
  title: "Estas seguro?",
  text: "Esta accion no se puede deshacer",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#d33",
  cancelButtonColor: "#3085d6",
  confirmButtonText: "Eliminar",
  cancelButtonText: "Cancelar",
}).then((result) => {
  if (result.isConfirmed) {
    DeleteUser(id).then(() => {
      Swal.fire({
        title: "Usuario eliminado",
        text: "Usuario eliminado con exito",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    });
  }
});
};

</script>