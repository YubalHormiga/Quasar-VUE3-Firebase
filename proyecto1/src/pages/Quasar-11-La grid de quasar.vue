<template>
  <h3>Siempre son 12 columnas</h3>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div class="col">.col</div>
      <div class="col">.col</div>
    </div>

    <div class="row">
      <div class="col">.col</div>
      <div class="col">.col</div>
      <div class="col">.col</div>
    </div>
  </div>
  <div class="row">
    <div class="col-3">1</div>
    <div class="col-6">2</div>
    <div class="col-3">1</div>
  </div>
  <div class="q-pa-md example-row-variable-width">
    <div class="row justify-center">
      <div class="col-12 col-md-4 bg-red">.col-12 .col-md-2</div>
      <div class="col-12 col-md-auto">
        .col-12 .col-md-auto (Variable width content)
      </div>
      <div class="col-12 col-md-2 bg-blue">.col-12 .col-md-2</div>
    </div>

    <div class="row">
      <div class="col">.col</div>
      <div class="col-12 col-md-auto">
        .col-12 .col-md-auto (Variable width content)
      </div>
      <div class="col text-center">.col</div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-4 bg-green-14">col-md-4</div>
    <div class="col-12 col-md-8 bg-blue-11">
      .col-12 .col-md-auto (Variable width content)
    </div>
  </div>
  <div class="q-pa-md example-row-horizontal-alignment">
    <q-badge>justify-start</q-badge>
    <div class="row justify-start">
      <div class="col-4 bg-amber-5">
        One of two cols
      </div>
      <div class="col-4 bg-blue-5">
        One of two cols
      </div>
    </div>

    <q-badge>justify-center</q-badge>
    <div class="row justify-center ">
      <div class="col-4  bg-amber-5">
        One of two cols
      </div>
      <div class="col-4  bg-blue-5">
        One of two cols
      </div>
    </div>

    <q-badge>justify-end</q-badge>
    <div class="row justify-end ">
      <div class="col-4 bg-amber-5">
        One of two cols
      </div>
      <div class="col-4 bg-blue-5">
        One of two cols
      </div>
    </div>

    <q-badge>justify-around</q-badge>
    <div class="row justify-around">
      <div class="col-4 bg-blue-5">
        One of two cols
      </div>
      <div class="col-4 bg-amber-5">
        One of two cols
      </div>
    </div>

    <q-badge>justify-between</q-badge>
    <div class="row justify-between">
      <div class="col-4  bg-amber-5">
        One of two cols
      </div>
      <div class="col-4  bg-blue-5">
        One of two cols
      </div>
    </div>

    <q-badge>justify-evenly</q-badge>
    <div class="row justify-evenly q-mt-md">
      <div class="col-4  bg-amber-5">
        One of two cols
      </div>
      <div class="col-4  bg-blue-5">
        One of two cols
      </div>
    </div>
  </div>
  <h5>Spacing Clasees</h5>
  <h6>.q-(p|m)(t|r|b|l|a|x|y)--(none|auto|xs|sm|md|lg|xl)</h6>
</template>

<style lang="sass">
.example-row-equal-width
  .row > div
    padding: 10px 15px
    background: rgba(#999,.15)
    border: 1px solid rgba(#999,.2)
  .row + .row
    margin-top: 1rem
</style>
