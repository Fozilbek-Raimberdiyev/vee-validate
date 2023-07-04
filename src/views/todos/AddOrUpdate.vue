<script setup lang="ts">
import { configure, Form } from "vee-validate";
import TextInput from "../../components/TextInput.vue";
import * as Yup from "yup";
import { computed, reactive, ref } from "vue";
const schema = computed(() => {
  return Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(60, "Name must be less than 60 characters"),
    description: Yup.string().required("Description is required"),
    startDate: Yup.string().required("Start Date is required"),
    endDate: Yup.string().required("End Date is required"),
  });
});
configure({
  validateOnInput: true,
});

const form = reactive({
  id: "",
  name: "",
  description: "",
  startDate: "",
  endDate: "",
  status: "",
});

const errorMessages = ref<any>();

function onSubmit() {
  console.log(errorMessages);
}
</script>

<template>
  <Form
    :validationSchema="schema"
    @submit.prevent="onSubmit"
    class="container"
  >
    <div></div>
    <div>
      <label for="name">Topshiriq nomini kiriting!</label>
      <TextInput
        name="name"
        id="name"
        style="width: 500px"
        class=""
        width="100%"
        type="text"
        v-model="form.name"
      />
    </div>
    <div>
      <label for="description">Topshiriq izohini kiriting!</label>
      <TextInput
        name="description"
        id="description"
        width="100%"
        style="width: 500px"
        v-model="form.description"
        rows="5"
        cols="30"
      />
    </div>
    <div>
      <label for="startDate">Topshiriq boshlanish vaqti!</label>
      <Calendar
        name="startDate"
        style="width: 500px"
        id="calendar-24h"
        v-model="form.startDate"
        showTime
        hourFormat="24"
      />
    </div>
    <div>
      <label for="startDate">Topshiriq yakunlanish vaqti!</label>
      <Calendar
        name="endDate"
        style="width: 500px"
        id="calendar-24h"
        v-model="form.endDate"
        showTime
        hourFormat="24"
      />
    </div>
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2px;
      "
    >
      <Button
        severity="danger"
        type="reset"
        size="small"
        style="
          width: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
        "
        >Bekor qilish</Button
      >
      <Button
        type="submit"
        severity="info"
        size="small"
        style="
          width: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        "
        >Saqlash</Button
      >
    </div>
  </Form>
</template>
<style scoped>
label {
  display: block;
  text-align: left;
  font-weight: 550;
  margin-bottom: 2px;
  margin-top: 1rem;
  color: aliceblue;
}
</style>
