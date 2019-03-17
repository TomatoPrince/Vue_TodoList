<template>
  <div class="wrap">
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
    <div class="main">
      <div class="mainWrap">
        <div class="deadline d-flex my-4">
          <div class="iconGroup">
            <i class="far fa-calendar-alt"></i>
          </div>
          <div class="detailGroup d-flex flex-column align-items-start">
            <p>Deadline</p>
            <div>
              <input type="date">
              <input type="time">
            </div>
          </div>
        </div>
        <div class="addFile d-flex my-4">
          <div class="iconGroup">
            <i class="far fa-calendar-alt"></i>
          </div>
          <div class="detailGroup d-flex flex-column align-items-start">
            <p>File</p>
            <div>
              <i class="fas fa-plus-square"></i>
              <input type="file">
            </div>
          </div>
        </div>
        <div class="comment d-flex my-4">
          <div class="iconGroup">
            <i class="far fa-comment"></i>
          </div>
          <div class="detailGroup d-flex flex-column align-items-start">
            <p>Comment</p>
            <textarea rows="5" placeholder="Type Something Here..."></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="footer d-flex">
      <div class="cancel d-flex p-2 flex-fill justify-content-center">
        <div class="icon">
          <i class="fas fa-times"></i>
        </div>
        <p>Cancel</p>
      </div>
      <div class="addTask d-flex p-2 flex-fill justify-content-center">
        <div class="icon">
          <i class="fas fa-plus"></i>
        </div>
        <p>Add Task</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.wrap {
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #f2f2f2;
}
/* titleGroup */
.titleGroup {
  padding: 20px;
  border-bottom: 1px solid #c8c8c8;
}
.titleText {
  font-size: 24px;
  font-weight: bold;
}
.ctrlGroup {
  width: 50px;
}
/* main */
.main {
  font-size: 14px;
}
.main p {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
}
.mainWrap {
  width: 80%;
  margin: auto;
}
.deadline {
  width: 100%;
}
textarea {
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  width: 80%;
}
/* footer */
.footer p {
  margin: 0;
}
.footer {
  font-size: 20px;
}
.icon {
  margin: 0 10px;
}
.cancel {
  background-color: #FFFFFF;
  color: #D0021B;
  border-bottom-left-radius: 5px;
}
.addTask {
  background-color: #4A90E2;
  color: #FFFFFF;
  border-bottom-right-radius: 5px;
}
/* other */
.iconGroup {
  margin-right: 10px;
}
.detailGroup {
  width: 100%;
}
input {
  border: none;
  border-radius: 5px;
  margin-right: 5px;
}
</style>
