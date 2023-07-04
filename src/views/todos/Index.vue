<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

function editProduct(e:any) {
    console.log("delete")
    console.log(e)
}
function deleteProduct(e:any) {
    console.log("delete")
    console.log(e)
}

const products = ref([
    {
        code: '100',
        name: 'Product A',
        category: 'Category A',
        quantity: 10
    },
    {
        code: '200',
        name: 'Product B',
        category: 'Category B',
        quantity: 20
    },
    {
        code: '300',
        name: 'Product C',
        category: 'Category C',
        quantity: 30
    },
    {
        code: '400',
        name: 'Product D',
        category: 'Category D',
        quantity: 40
    },
    {
        code: '500',
        name: 'Product E',
        category: 'Category E',
        quantity: 50
    },
    {
        code: '600',
        name: 'Product F',
        category: 'Category F',
        quantity: 60
    },
    {
        code: '700',
        name: 'Product G',
        category: 'Category G',
        quantity: 70
    },
    {
        code: '800',
        name: 'Product H',
        category: 'Category H',
        quantity: 80
    },
    {
        code: '900',
        name: 'Product I',
        category: 'Category I',
        quantity: 90
    },
    {
        code: '1000',
        name: 'Product J',
        category: 'Category J',
        quantity: 100
    }
])
</script>

<template>
    <div>
        <div style="text-align : right">
            <Button @click="router.push(`/todos/add`)" label="Topshiriq qo'shish" size="small" severity="info"></Button>
        </div>
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="actions" header="Actions">
            <template #body="slotProps">
                <div style="display: flex; align-items: center">
                    <Button size="small" severity="info" @click="editProduct(slotProps?.data)" style="margin: 0 10px" class="p-2">
                        edit
                    </Button>
                    <Button size="small" @click="deleteProduct(slotProps?.data)" severity="danger" class="p-2">
                        delete
                    </Button>
                </div>
            </template>
            </Column>
            
        </DataTable>
    </div>
</template>

