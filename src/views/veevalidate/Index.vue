<script setup lang="ts">
import { Form, configure } from "vee-validate";
import TextInput from "../../components/TextInput.vue";
import * as Yup from "yup";
import { ref } from "vue";
const schema = Yup.object().shape({
    name : Yup.string().min(3, "Name must be at least 3 characters").max(20, "Name must be less than 20 characters").required(),
});
configure({
    validateOnInput: true
})
function submit() {
  alert("submit");
}
const value = ref("")
</script>

<template>
  <div>
 <Form :validation-schema="schema">
  <TextInput type="text" v-model="value" name="name"></TextInput>
 </Form>
  </div>
</template>
