<script setup lang="ts">
import { toRef } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  value: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "200px",
  },
  size: {
    type: String,
    default: "small",
  },
});

// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
// https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
const name = toRef(props, "name");

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
const emits = defineEmits(["update:modelValue"]);
async function emit(e: any) {
  emits("update:modelValue", inputValue.value);
  handleChange(e)
}
</script>

<template>
  <div
    style="min-height: 50px"
    
  >
    
    <InputText
      :style="{ width: width }"
      :size="size"
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="emit"
      @blur="handleBlur"
    />

    <p class="error" v-show="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped>
.error {
  color : rgb(248, 95, 95);
  margin-top: -1px;
  text-align: left;
  font-weight: 500;
  font-style: italic;
}
</style>
