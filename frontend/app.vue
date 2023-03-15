<template>
  <div>
    <div class="bg-blue-200">4</div>
    <div>
      <div mnfst-id="red" class="bg-red-200">1</div>
      <div mnfst-id="orange" class="bg-orange-200">2</div>
      <div mnfst-id="123" class="bg-red-200 mt-4">3</div>
    </div>
  </div>
</template>

<script>
import supabase from './supabase.js'

export default {
  async mounted() {
    let { data, error } = await supabase
      .from('schools')
      .select('*')


    console.log(data)
  }
}
</script>
