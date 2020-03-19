<template>
  <div>
    <div>testSlot</div>

    <div>
      <span>
        <slot name="head">head</slot>
      </span>
    </div>
    <div>
      <span>
        <slot :slotProp="childProp"></slot>
      </span>
    </div>
    <div>
      <span>
        <slot :slotProp2="childProp" name="foot">foot</slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    childProp: {
      type: Object,
      default() {
        return { name: '', cname: '' }
      }
    }
  }
  // data() {
  //   return { childProp: { name: 'Jack', cname: '杰克' } }
  // }
}
</script>