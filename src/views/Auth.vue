<template>
  <div class="flex justify-center items-center h-screen">
    <form @submit="onSubmit">
      <div class="w-96 p-20 shadow-lg bg-slate-600 rounded-md text-center">
        <h1 class="text-3xl font-semibold mb-4">Bienvenidos</h1>
        <div class="mt-3">
          <label for="email" class="block text-base mb-2 text-left">
         Email</label>
         
          <Field
            name="email"
            type="text"
            id="email"
            class="border w-full"
            placeholder="Enter Email"
          />
          <ErrorMessage
           name="email"
           class="text-red-500 text-sm"
          ></ErrorMessage>
        </div>
        <div class="mt-4">
          <label for="password" class="block text-base mb-2 text-left">
            Password
          </label>
          <Field
            name="password"
            type="password"
            id="password"
            class="border w-full"
            placeholder="Enter password"
          />
          <ErrorMessage
          name="password"
          class="text-red-500 text-sm"
          ></ErrorMessage>
        </div>

        <div class="mt-9">
          <button
            type="submit"
            class="borde-2 bg-sky-600 text-white py-1 w-full rounded-md hover:bg-sky-800 font-semibold"
          >
            Iniciar Sesion
          </button>
        </div>
        
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import * as yup from "yup";
import { useForm, Field, ErrorMessage } from "vee-validate";
import { UseAuthStore } from "../store/auth.store";


const validationSchema = yup.object().shape({
  email: yup.string().required("Email es requerido!"),
  password: yup.string().required("Password es requerido"),
});

const { handleSubmit } = useForm({
  initialValues: { email: "", password: ""},
  validationSchema,
});

const { MakeLogin } = UseAuthStore();

const onSubmit = handleSubmit(async (values) => {
  MakeLogin(values);
});
</script>
