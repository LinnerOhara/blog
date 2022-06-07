<template>
  <div></div>
</template>

<script>

export default {
  data() {
    return {
      test: 123
    }
  },
  created() {
    let fragment = window.document.createDocumentFragment()
    
    let script = window.document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://cdn.jsdelivr.net/npm/xe-utils'
    fragment.append(script)

    let script2 = window.document.createElement('script')
    script2.type = 'text/javascript'
    script2.src = 'https://cdn.jsdelivr.net/npm/vxe-table'
    fragment.append(script2)

    window.document.head.append(fragment)
  }
}
</script>
<!-- <script src="https://cdn.jsdelivr.net/npm/xe-utils"></script>
<script src="https://cdn.jsdelivr.net/npm/vxe-table"></script> -->