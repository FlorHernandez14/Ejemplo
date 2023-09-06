<template>
  <div>
    <button 
      onclick="document.getElementById('myModal2').showModal()"
      id="btn"
      type="button"
      class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" :style="{
                backgroundColor: isAddHovered
                    ? 'rgb(21, 131, 89)'
                    : 'rgb(28, 161, 110)',
            }" @mouseover="isAddHovered = true" @mouseleave="isAddHovered = false">
    
      Actualizar Usuario
    </button>
    <dialog id="myModal2" class="rounded-md w-[60%] h-[60%]">
      <div class="flex flex-col w-full h-auto">
        <!-- Header -->
        <div class="flex w-full h-auto justify-center items-center">
          <div
            class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold"
          >
            Actualizar usuario
          </div>
          <div
            onclick="document.getElementById('myModal2').close();"
            class="flex w-1/12 h-auto justify-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </div>
        <div
          class="flex w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500"
        >
          <!-- formulario -->
          <form class="flex flex-col space-y-4" @submit="onSubmit">
            <div class="mb-8 flex space-x-8 md:flex-row md:space-x-8">
              <div class="flex-col">
                <label for="name"  class="block text-base mb-2"
                  >Name</label
                >
                <Field as="input" v-model="form.user"
                  type="text"
                  id="user"
                  name="name"
                  class="mt-2 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  @input="formModified = true"
                  />
              </div>
              <div class="flex-col ml-auto">
                <label for="email" class="block text-base mb-2">Email</label>
                <Field 
                  type="text"
                  id="user"
                  name="email"
                  class="mt-2 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  @input="formModified = true"
                />
              </div>
              <div class="flex-col ml-auto">
                <label for="lastname" class="block text-base mb-2"
                  >lastName</label
                >
                <Field
                  type="text"
                  id="user"
                  name="lastName"
                  class="mt-2 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  @input="formModified = true"
                />
              </div>
            </div>
            <div class="mb-8 flex space-x-8 md:flex-row md:space-x-8">
              <div class="flex-col ml-auto">
                <label for="password" class="block text-base mb-2">
                  Password
                </label>
                <Field
                  type="password"
                  id="user"
                  name="password"
                  class="mt-2 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  @input="formModified = true"
                />
              </div>
              <div class="flex-col ml-auto">
                <label for="gender" class="block text-base mb-2">gender</label>
                <Field
                  type="text"
                  id="user"
                  name="gender"
                  class="mt-2 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  @input="formModified = true"
                />
              </div>
              <div class="flex-col ml-auto">
                <label for="age" class="block text-base mb-2">age</label>
                <Field
                  type="text"
                  id="user"
                  name="age"
                  class="mt-2 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  @input="formModified = true"
                  />
              
              </div>
            </div>
            <!-- Botones -->
            <div class="flex justify-center space-x-4">
              <button type="submit" class="px-4 py-2 text-white text-sm font-medium rounded-md" :style="{
                            backgroundColor: isSaveHovered
                                ? 'rgb(21, 131, 8z9)'
                                : 'rgb(28, 161, 110)',
                        }" @mouseover="isSaveHovered = true" @mouseleave="isSaveHovered = false">
                            Guardar
                        </button>
                        <button type="button" @click="cancelarModal"
                            class="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-md ml-2" :style="{
                                backgroundColor: isCancelHovered
                                    ? 'rgb(212, 237, 224)'
                                    : 'rgb(231, 243, 239)',
                            }" @mouseover="isCancelHovered = true" @mouseleave="isCancelHovered = false">
                            Cancelar
                        </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { UseUserStore } from "../../store/user.store";
import * as yup from "yup";
import { Field,useForm } from "vee-validate";
import {  GetUser, UpdateUser } from "../../types/user.type";

const { user } = defineProps<{ user: GetUser }>();

const validationSchema = yup.object().shape({
  user: yup.string().required("User es requerido"),
});

const { handleSubmit, resetForm } = useForm({
  validationSchema,
});

const showModal = ref(false);
const { UpdateUser } = UseUserStore();
const form = ref({
  user: user,
});

const formModified = ref(false);

const cancelarModal = () => {
  showModal.value = false;
};
const onSubmit = handleSubmit(async (values) => {
 await  UpdateUser(user.id, values);
  resetForm();
  showModal.value = false;
});

const isAddHovered = ref(false);
const isSaveHovered = ref(false);
const isCancelHovered = ref(false);
</script>

<style lang="scss" scoped></style>
