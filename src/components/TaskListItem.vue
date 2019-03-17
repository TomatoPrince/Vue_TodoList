<template>
  <div class="titleGroup d-flex justify-content-between align-items-center">
    <div class="inputGroup">
      <div class="form-check d-flex align-items-center">
        <input class="form-check-input" type="checkbox">
        <label class="form-check-label titleText">Type Something Here...</label>
      </div>
    </div>
    <div class="ctrlGroup d-flex justify-content-between">
      <i class="far fa-star"></i>
      <i class="fas fa-pencil-alt"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* titleGroup */
.titleGroup {
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.titleText {
  font-size: 24px;
  font-weight: bold;
}
.ctrlGroup {
  width: 50px;
}
</style>
