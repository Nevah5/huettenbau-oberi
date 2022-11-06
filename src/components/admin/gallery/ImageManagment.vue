<template>
  <h2
    class="text-2xl font-bold border-b-2 border-black border-b-solid mb-2 mt-16"
  >
    Verwaltung Bilder
  </h2>
  <p class="mb-4">
    Dieser Abschnitt ist für das Verwalten der Bilder und Beschreibungen
    dieser.<br />Klicke auf die Galerie die du verwalten möchtest:
  </p>
  <div v-auto-animate>
    <div v-if="!galleryData" class="flex justify-start items-center">
      <font-awesome-icon
        icon="fa-solid fa-circle-notch"
        class="animate-spin mr-1"
      />
      <p>Daten werden geladen</p>
    </div>
    <div v-else>
      <div class="flex justify-start items-center gap-2">
        <p
          v-for="(gallery, i) in galleryData"
          :key="gallery.id"
          class="rounded-md p-2 px-3 font-bold hover:bg-black-light relative w-fit cursor-pointer"
          :id="selectedGallery === i ? 'selected' : ''"
          @click="selectGallery(i)"
        >
          {{ gallery.id }}
        </p>
      </div>
      <div class="mt-6">
        <!-- Loading Info -->
        <div
          v-if="isStoreDataLoading === true"
          class="flex justify-start items-center gap-2"
        >
          <font-awesome-icon
            icon="fa-solid fa-circle-notch"
            class="animate-spin"
          />
          <p>Dateien werden geladen</p>
        </div>
        <div v-else-if="isStoreDataLoading === false">
          <!-- Form -->
          <form
            v-if="selectedGallery && !isStoreDataLoading"
            class="my-6 flex justify-center items-start flex-col gap-2 w-fit"
            @submit.prevent="uploadImages"
          >
            <!-- Input -->
            <label class="block">
              <span class="sr-only">Choose profile photo</span>
              <input
                type="file"
                class="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-md file:cursor-pointer hover:file:text-white file:border-0 file:text-sm file:font-semibold file:bg-black-light file:text-red hover:file:bg-red"
                multiple
                v-on:change="fileChange"
              />
            </label>
            <div class="flex flex-col justify-center items-start gap-2">
              <!-- Submit -->
              <button
                type="submit"
                class="py-2 px-4 bg-red text-white font-bold rounded-md"
              >
                Upload
              </button>
              <!-- States -->
              <div v-if="uploadStates">
                <div
                  v-for="state in uploadStates"
                  :key="state.name"
                  class="text-black flex justify-start items-center gap-2"
                >
                  <div class="w-[400px] bg-black-light h-[20px]">
                    <div
                      class="bg-red flex justify-center items-center h-full text-white font-bold"
                      :style="'width:' + (400 / 100) * state.percentage + 'px'"
                    >
                      <p v-if="state.percentage !== 100">
                        {{ state.percentage }}%
                      </p>
                      <p v-else>Fertig!</p>
                    </div>
                  </div>
                  <p>{{ state.name }}</p>
                </div>
              </div>
              <p v-if="errorMessage" class="font-bold text-red">
                {{ errorMessage }}
              </p>
            </div>
          </form>
          <!-- File List -->
          <div>
            <div
              class="flex justify-start gap-2"
              v-if="storageData?.length !== 0"
            >
              <p class="w-[50px]">Nr.</p>
              <p class="w-[400px]">Dateiname</p>
              <p class="w-[400px]">Beschreibung</p>
              <p>Hochgeladen von</p>
            </div>
            <div
              v-for="data, dataIndex in (storageData as GalleryImage[])"
              :key="data.fullPath"
              class="flex justify-start items-center gap-2 my-1"
            >
              <input
                type="text"
                v-model.trim="storageData![dataIndex].order"
                class="appearance-none w-[50px] h-[50px] border-black border-2 text-center rounded-md font-bold"
              />
              <p
                class="w-[400px] h-[50px] border-black border-2 p-2 rounded-md font-bold flex justify-start items-center cursor-not-allowed"
              >
                <a
                  :href="storageData![dataIndex].url"
                  class="underline text-red w-fit"
                  target="_blank"
                  >{{ data.name }}</a
                >
              </p>
              <input
                type="text"
                v-model.trim="storageData![dataIndex].description"
                class="appearance-none w-[400px] h-[50px] border-black border-2 rounded-md font-bold px-4 py-2"
              />
              <input
                type="text"
                v-model.trim="storageData![dataIndex].uploadedBy"
                class="appearance-none w-[400px] h-[50px] border-black border-2 p-2 rounded-md cursor-not-allowed"
                disabled
              />
              <a href="#" class="text-red underline">Speichern</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  getGalleries,
  Gallery,
  GalleryImage,
  getGalleryImages,
  uploadGalleryImages,
} from "@/composables/gallery";
import { UploadTask } from "@firebase/storage";
import { ref, onMounted, watch } from "vue";

const galleryData = ref<Gallery[]>();
const storageData = ref<GalleryImage[]>();
const selectedGallery = ref<number>();
const isStoreDataLoading = ref<boolean>();
const errorMessage = ref<string>();
const uploadStates = ref<{ name: string; percentage: number }[]>([]);
const files = ref<FileList>();
const validUploadTypes = ["image/jpg", "image/png", "image/jpeg"];

onMounted(() => {
  getGalleries().then((d) => {
    galleryData.value = d!;
  });
});

watch(selectedGallery, () => {
  if (
    selectedGallery.value === null ||
    selectedGallery.value === undefined ||
    galleryData.value === null ||
    galleryData.value === undefined
  )
    return;
  isStoreDataLoading.value = true;
  let gallerySelected: Gallery | undefined = galleryData.value.at(
    selectedGallery.value
  );
  if (gallerySelected === undefined) return;
  getGalleryImages(gallerySelected.id!).then((value) => {
    isStoreDataLoading.value = false;
    storageData.value = value as GalleryImage[];
    storageData.value.sort((obj1, obj2) => obj1.order - obj2.order);
  });
});

const selectGallery = (index: number) => {
  if (isStoreDataLoading.value === true) return;
  uploadStates.value = [];
  files.value = undefined;
  errorMessage.value = "";
  selectedGallery.value = index;
};
const uploadImages = (): void => {
  uploadStates.value = [];
  // Validation
  if (files.value?.length === 0 || files.value === undefined) {
    errorMessage.value = "Bitte wähle eine/mehrere Bild(er) aus!";
    return;
  }
  for (let i = 0; i < files.value.length; i++) {
    if (files.value.item(i)?.type === undefined) {
      errorMessage.value = "Etwas ist schief gelaufen!";
      return;
      // eslint-disable-next-line
    } else if (!validUploadTypes.includes(files.value.item(i)?.type!)) {
      errorMessage.value = "Es sind nur Bilder erlaubt! (.jpg, .png, .jpeg)";
      return;
    }
  }

  // Upload
  if (!selectedGallery.value) return;
  uploadGalleryImages(
    galleryData.value![selectedGallery.value!].id,
    files.value
  )
    .then((taskList) => {
      const list = taskList! as UploadTask[];
      for (let i = 0; i < list.length; i++) {
        uploadStates.value.push({
          name: files.value?.item(i)?.name || "filename.xyz",
          percentage: 0,
        });
        list[i].on("state_changed", (snapshot) => {
          const percentage = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          uploadStates.value[i].percentage = percentage;
        });
      }
    })
    .catch((e) => {
      console.log(e);
      errorMessage.value = "Etwas ist schief gelaufen!";
    });
};
const fileChange = (event: InputEvent): void => {
  const target = event.target as HTMLInputElement;
  const fileList = target.files;
  if (fileList?.length === 0) return;
  files.value = fileList!;
};
</script>

<style lang="scss" scoped>
#selected {
  background-color: var(--red);
  color: white;
}
</style>
