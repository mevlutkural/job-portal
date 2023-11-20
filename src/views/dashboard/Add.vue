<script setup>
import { reactive } from "vue";
import { useJobAdvertisementsStore } from "../../stores/job-advertisements";
import { useRouter } from "vue-router";
const router = useRouter();

const store = useJobAdvertisementsStore();

const jobAdvertisementData = reactive({
  name: "",
  description: "",
  status: true,
});

const onSubmit = async () => {
    const result = await store.add(jobAdvertisementData);

    if (result?.isSuccess) {
        return router.push("/dashboard");
    }

};
</script>

<template>
  <div class="container mt-5 card p-3">
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-danger" @click="router.push('/dashboard')">
        Geri Dön
      </button>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="row p-3">
        <div class="col-sm-12 mb-2">
          <label for="name" class="form-label">İlan adı</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="jobAdvertisementData.name"
          />
        </div>
        <div class="col-sm-12 mb-3">
          <label for="description" class="form-label">İlan açıklaması</label>
          <input
            type="text"
            class="form-control"
            id="description"
            v-model="jobAdvertisementData.description"
          />
        </div>
        <div class="col-sm-12">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              v-model="jobAdvertisementData.status"
            />
            <label class="form-check-label" for="flexSwitchCheckChecked"
              >Aktif</label
            >
          </div>
        </div>
        <div class="col-sm-12 text-end">
          <button class="btn btn-sm btn-success">Gaydet</button>
        </div>
      </div>
    </form>
  </div>
</template>
