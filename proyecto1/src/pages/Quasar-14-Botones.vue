<script setup>
import { ref } from "vue";
const loading = ref(false);

function simulateProgress() {
  // we set loading state
  loading.value = true;

  // simulate a delay
  setTimeout(() => {
    // we're done, we reset loading state
    loading.value = false;
  }, 1500);
}
</script>
<template>
  <h5>Botones</h5>
  <q-page padding>
    <q-btn color="primary" label="Primary" />
    <q-btn
      color="secondary"
      label="Primary"
      icon="eva-linkedin-outline"
      class="color"
    />
    <q-btn color="blue-11" icon="fa-solid fa-tower-broadcast" label="OK" />
    <q-btn round color="brown-5" icon="directions" />

    <q-fab color="purple" icon="keyboard_arrow_up" direction="up">
      <q-fab-action color="primary" icon="mail" />
      <q-fab-action color="secondary" icon="alarm" />
    </q-fab>
    <q-btn :loading="loading" color="red" @click="simulateProgress(1)">
      Button
      <template v-slot:loading>
        <q-spinner-audio color="secondary" />
      </template>
    </q-btn>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" />
    </q-page-sticky>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 80]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi eum
      aut, minus voluptates corrupti consequuntur eius. Deleniti, quod. Dolor,
      amet vero harum laborum voluptatum, repellat id sunt laudantium commodi
      facere eius ab dolorum a asperiores. Neque odio iusto itaque quod, minus
      suscipit dignissimos autem esse eligendi! Perferendis veniam similique id
      magni nostrum officiis quis facilis saepe repellendus sed ad, tenetur nam
      autem exercitationem corporis odit dicta nihil iusto quia eum distinctio
      sit tempora? Commodi facilis mollitia, provident dolorum quidem magni
      architecto esse incidunt sunt magnam ipsum suscipit id, recusandae veniam
      beatae accusamus numquam nisi pariatur voluptatibus, corrupti velit
      corporis illum. Voluptates incidunt minima veniam voluptas dignissimos
      rerum iste et! Dolores quis facilis in beatae a aliquid hic reiciendis
      mollitia iusto facere consectetur perspiciatis necessitatibus eveniet eius
      ad commodi, doloribus incidunt perferendis obcaecati. Qui repudiandae
      laborum, tempora voluptate repellat aspernatur facilis culpa veniam
      deserunt, corporis ab exercitationem sapiente porro dignissimos dolores
      quae quasi, atque numquam rerum necessitatibus. Obcaecati dolor commodi,
      voluptatum eligendi ullam labore facere veniam neque iure accusantium
      praesentium saepe perferendis fuga eum. Sint fugit at assumenda ratione et
      explicabo, ducimus quia recusandae totam, qui asperiores quis eveniet,
      dolores quaerat sapiente. Velit culpa tempore obcaecati magni odit.
      Corporis tempore perspiciatis vel ad accusantium earum repudiandae
      pariatur, accusamus amet, qui, assumenda minima in facere expedita
      doloribus officiis. Voluptas dolor voluptates a placeat repellendus nisi
      in, culpa reiciendis unde maiores similique ut officia architecto tenetur
      quisquam porro, ex dicta tempore commodi. Culpa delectus enim autem natus.
      Quibusdam assumenda delectus iusto necessitatibus illum. Temporibus
      consequatur ea saepe voluptatibus dolore dolorum iure. Blanditiis magni
      voluptate, molestiae odit, modi laboriosam explicabo vitae corrupti sed
      repellendus cupiditate doloribus saepe sapiente. Cumque dolore veniam
      voluptatibus eius enim accusantium neque necessitatibus incidunt velit sed
      modi quo distinctio labore fuga, ex placeat molestias autem eaque suscipit
      reprehenderit voluptatem, optio, quas tenetur. Ipsum quasi minima sit iure
      iste voluptates explicabo, pariatur, ab ipsam id sequi corrupti? Deserunt
      eum aspernatur necessitatibus sapiente nesciunt nulla sed dolorum
      inventore ab expedita, dolore animi in dignissimos, ipsam magnam
      consequatur! Vero quis, consectetur facere perspiciatis porro earum sed
      asperiores eligendi corrupti quod dolores voluptatem quasi, suscipit in!
      Neque eos ipsam quia minima maxime earum sit aliquid accusamus recusandae?
      Rerum hic perferendis dolor odio! Rerum quae necessitatibus, ex
      perspiciatis quis optio nisi architecto ad voluptate blanditiis natus
      nihil repellat, ipsa doloribus animi molestias assumenda autem! Adipisci
      minima unde officiis quis alias maiores laboriosam distinctio odio.
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi eum
      aut, minus voluptates corrupti consequuntur eius. Deleniti, quod. Dolor,
      amet vero harum laborum voluptatum, repellat id sunt laudantium commodi
      facere eius ab dolorum a asperiores. Neque odio iusto itaque quod, minus
      suscipit dignissimos autem esse eligendi! Perferendis veniam similique id
      magni nostrum officiis quis facilis saepe repellendus sed ad, tenetur nam
      autem exercitationem corporis odit dicta nihil iusto quia eum distinctio
      sit tempora? Commodi facilis mollitia, provident dolorum quidem magni
      architecto esse incidunt sunt magnam ipsum suscipit id, recusandae veniam
      beatae accusamus numquam nisi pariatur voluptatibus, corrupti velit
      corporis illum. Voluptates incidunt minima veniam voluptas dignissimos
      rerum iste et! Dolores quis facilis in beatae a aliquid hic reiciendis
      mollitia iusto facere consectetur perspiciatis necessitatibus eveniet eius
      ad commodi, doloribus incidunt perferendis obcaecati. Qui repudiandae
      laborum, tempora voluptate repellat aspernatur facilis culpa veniam
      deserunt, corporis ab exercitationem sapiente porro dignissimos dolores
      quae quasi, atque numquam rerum necessitatibus. Obcaecati dolor commodi,
      voluptatum eligendi ullam labore facere veniam neque iure accusantium
      praesentium saepe perferendis fuga eum. Sint fugit at assumenda ratione et
      explicabo, ducimus quia recusandae totam, qui asperiores quis eveniet,
      dolores quaerat sapiente. Velit culpa tempore obcaecati magni odit.
      Corporis tempore perspiciatis vel ad accusantium earum repudiandae
      pariatur, accusamus amet, qui, assumenda minima in facere expedita
      doloribus officiis. Voluptas dolor voluptates a placeat repellendus nisi
      in, culpa reiciendis unde maiores similique ut officia architecto tenetur
      quisquam porro, ex dicta tempore commodi. Culpa delectus enim autem natus.
      Quibusdam assumenda delectus iusto necessitatibus illum. Temporibus
      consequatur ea saepe voluptatibus dolore dolorum iure. Blanditiis magni
      voluptate, molestiae odit, modi laboriosam explicabo vitae corrupti sed
      repellendus cupiditate doloribus saepe sapiente. Cumque dolore veniam
      voluptatibus eius enim accusantium neque necessitatibus incidunt velit sed
      modi quo distinctio labore fuga, ex placeat molestias autem eaque suscipit
      reprehenderit voluptatem, optio, quas tenetur. Ipsum quasi minima sit iure
      iste voluptates explicabo, pariatur, ab ipsam id sequi corrupti? Deserunt
      eum aspernatur necessitatibus sapiente nesciunt nulla sed dolorum
      inventore ab expedita, dolore animi in dignissimos, ipsam magnam
      consequatur! Vero quis, consectetur facere perspiciatis porro earum sed
      asperiores eligendi corrupti quod dolores voluptatem quasi, suscipit in!
      Neque eos ipsam quia minima maxime earum sit aliquid accusamus recusandae?
      Rerum hic perferendis dolor odio! Rerum quae necessitatibus, ex
      perspiciatis quis optio nisi architecto ad voluptate blanditiis natus
      nihil repellat, ipsa doloribus animi molestias assumenda autem! Adipisci
      minima unde officiis quis alias maiores laboriosam distinctio odio.
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi eum
      aut, minus voluptates corrupti consequuntur eius. Deleniti, quod. Dolor,
      amet vero harum laborum voluptatum, repellat id sunt laudantium commodi
      facere eius ab dolorum a asperiores. Neque odio iusto itaque quod, minus
      suscipit dignissimos autem esse eligendi! Perferendis veniam similique id
      magni nostrum officiis quis facilis saepe repellendus sed ad, tenetur nam
      autem exercitationem corporis odit dicta nihil iusto quia eum distinctio
      sit tempora? Commodi facilis mollitia, provident dolorum quidem magni
      architecto esse incidunt sunt magnam ipsum suscipit id, recusandae veniam
      beatae accusamus numquam nisi pariatur voluptatibus, corrupti velit
      corporis illum. Voluptates incidunt minima veniam voluptas dignissimos
      rerum iste et! Dolores quis facilis in beatae a aliquid hic reiciendis
      mollitia iusto facere consectetur perspiciatis necessitatibus eveniet eius
      ad commodi, doloribus incidunt perferendis obcaecati. Qui repudiandae
      laborum, tempora voluptate repellat aspernatur facilis culpa veniam
      deserunt, corporis ab exercitationem sapiente porro dignissimos dolores
      quae quasi, atque numquam rerum necessitatibus. Obcaecati dolor commodi,
      voluptatum eligendi ullam labore facere veniam neque iure accusantium
      praesentium saepe perferendis fuga eum. Sint fugit at assumenda ratione et
      explicabo, ducimus quia recusandae totam, qui asperiores quis eveniet,
      dolores quaerat sapiente. Velit culpa tempore obcaecati magni odit.
      Corporis tempore perspiciatis vel ad accusantium earum repudiandae
      pariatur, accusamus amet, qui, assumenda minima in facere expedita
      doloribus officiis. Voluptas dolor voluptates a placeat repellendus nisi
      in, culpa reiciendis unde maiores similique ut officia architecto tenetur
      quisquam porro, ex dicta tempore commodi. Culpa delectus enim autem natus.
      Quibusdam assumenda delectus iusto necessitatibus illum. Temporibus
      consequatur ea saepe voluptatibus dolore dolorum iure. Blanditiis magni
      voluptate, molestiae odit, modi laboriosam explicabo vitae corrupti sed
      repellendus cupiditate doloribus saepe sapiente. Cumque dolore veniam
      voluptatibus eius enim accusantium neque necessitatibus incidunt velit sed
      modi quo distinctio labore fuga, ex placeat molestias autem eaque suscipit
      reprehenderit voluptatem, optio, quas tenetur. Ipsum quasi minima sit iure
      iste voluptates explicabo, pariatur, ab ipsam id sequi corrupti? Deserunt
      eum aspernatur necessitatibus sapiente nesciunt nulla sed dolorum
      inventore ab expedita, dolore animi in dignissimos, ipsam magnam
      consequatur! Vero quis, consectetur facere perspiciatis porro earum sed
      asperiores eligendi corrupti quod dolores voluptatem quasi, suscipit in!
      Neque eos ipsam quia minima maxime earum sit aliquid accusamus recusandae?
      Rerum hic perferendis dolor odio! Rerum quae necessitatibus, ex
      perspiciatis quis optio nisi architecto ad voluptate blanditiis natus
      nihil repellat, ipsa doloribus animi molestias assumenda autem! Adipisci
      minima unde officiis quis alias maiores laboriosam distinctio odio.
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi eum
      aut, minus voluptates corrupti consequuntur eius. Deleniti, quod. Dolor,
      amet vero harum laborum voluptatum, repellat id sunt laudantium commodi
      facere eius ab dolorum a asperiores. Neque odio iusto itaque quod, minus
      suscipit dignissimos autem esse eligendi! Perferendis veniam similique id
      magni nostrum officiis quis facilis saepe repellendus sed ad, tenetur nam
      autem exercitationem corporis odit dicta nihil iusto quia eum distinctio
      sit tempora? Commodi facilis mollitia, provident dolorum quidem magni
      architecto esse incidunt sunt magnam ipsum suscipit id, recusandae veniam
      beatae accusamus numquam nisi pariatur voluptatibus, corrupti velit
      corporis illum. Voluptates incidunt minima veniam voluptas dignissimos
      rerum iste et! Dolores quis facilis in beatae a aliquid hic reiciendis
      mollitia iusto facere consectetur perspiciatis necessitatibus eveniet eius
      ad commodi, doloribus incidunt perferendis obcaecati. Qui repudiandae
      laborum, tempora voluptate repellat aspernatur facilis culpa veniam
      deserunt, corporis ab exercitationem sapiente porro dignissimos dolores
      quae quasi, atque numquam rerum necessitatibus. Obcaecati dolor commodi,
      voluptatum eligendi ullam labore facere veniam neque iure accusantium
      praesentium saepe perferendis fuga eum. Sint fugit at assumenda ratione et
      explicabo, ducimus quia recusandae totam, qui asperiores quis eveniet,
      dolores quaerat sapiente. Velit culpa tempore obcaecati magni odit.
      Corporis tempore perspiciatis vel ad accusantium earum repudiandae
      pariatur, accusamus amet, qui, assumenda minima in facere expedita
      doloribus officiis. Voluptas dolor voluptates a placeat repellendus nisi
      in, culpa reiciendis unde maiores similique ut officia architecto tenetur
      quisquam porro, ex dicta tempore commodi. Culpa delectus enim autem natus.
      Quibusdam assumenda delectus iusto necessitatibus illum. Temporibus
      consequatur ea saepe voluptatibus dolore dolorum iure. Blanditiis magni
      voluptate, molestiae odit, modi laboriosam explicabo vitae corrupti sed
      repellendus cupiditate doloribus saepe sapiente. Cumque dolore veniam
      voluptatibus eius enim accusantium neque necessitatibus incidunt velit sed
      modi quo distinctio labore fuga, ex placeat molestias autem eaque suscipit
      reprehenderit voluptatem, optio, quas tenetur. Ipsum quasi minima sit iure
      iste voluptates explicabo, pariatur, ab ipsam id sequi corrupti? Deserunt
      eum aspernatur necessitatibus sapiente nesciunt nulla sed dolorum
      inventore ab expedita, dolore animi in dignissimos, ipsam magnam
      consequatur! Vero quis, consectetur facere perspiciatis porro earum sed
      asperiores eligendi corrupti quod dolores voluptatem quasi, suscipit in!
      Neque eos ipsam quia minima maxime earum sit aliquid accusamus recusandae?
      Rerum hic perferendis dolor odio! Rerum quae necessitatibus, ex
      perspiciatis quis optio nisi architecto ad voluptate blanditiis natus
      nihil repellat, ipsa doloribus animi molestias assumenda autem! Adipisci
      minima unde officiis quis alias maiores laboriosam distinctio odio.
    </p>
  </q-page>
</template>
<style scoped>
.color {
  color: #e4d2cd !important;
}
</style>
<ion-icon name="bowling-ball-outline"></ion-icon>
