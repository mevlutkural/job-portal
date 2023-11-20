<script setup>
import { useJobAdvertisementsStore } from "../../stores/job-advertisements";
import { onMounted } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const store = useJobAdvertisementsStore();

onMounted(() => {
  store.fetch();
});
</script>

<template>
  <div class="container mt-5 card p-3">
    <div class="table-responsive">
      <div class="d-flex justify-content-end">
        <button
          class="btn btn-sm btn-dark"
          @click="router.push('/dashboard/add')"
        >
          + Ekle
        </button>
      </div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>İlan Adı</th>
            <th>Açıklaması</th>
            <th>Durum</th>
            <th>Oluşturulma Tarihi</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="advertisement in store.jobAdvertisements"
            :key="advertisement._id"
          >
            <td>{{ advertisement.name }}</td>
            <td>{{ advertisement.description }}</td>
            <td>
              <div v-if="advertisement.status" class="badge bg-success">
                Aktif
              </div>
              <div v-else class="badge bg-danger">Deaktif</div>
            </td>
            <td>{{ advertisement.createdAt }}</td>
            <td>
                <ul class="nav">
                    <li class="nav-item">
                        <button class="btn btn-sm btn-danger" @click="store.delete(advertisement._id)">Sil</button>
                    </li>
                </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
