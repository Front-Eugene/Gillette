;(function setDate() {
  let d = new Date()
  let p = new Date(d.getTime() - 5 * 86400000)
  let monthA = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ]
  $(".by").html(p.getDate() + " " + monthA[p.getMonth()] + " ")

  p = new Date(d.getTime())
  $(".to").html(
    p.getDate() + " " + monthA[p.getMonth()] + " " + p.getFullYear() + " года"
  )
})()

const review_button = document.getElementById("rev-btn")
function openReviewPopup() {
  Swal.fire({
    title: "Оставьте отзыв",
    html:
      '<div> <input type="text" id="username" class="swal2-input" placeholder="Введите имя"></input>' +
      '<input  class="swal2-input" placeholder="Введите сообщение"></input> </div>',
    confirmButtonText: "Отправить отзыв",
  }).then(() => {
    Swal.fire("Спасибо!", "Ваш отзыв был отправлен.", "success")
  })
}
review_button.addEventListener("click", function () {
  openReviewPopup()
})

const name1 = document.getElementById("name1")
const phone1 = document.getElementById("phone1")
const form1 = document.getElementById("buy")
const btn1 = document.getElementById("btn1")

let hashh = `${window.location.origin}${window.location.pathname}`
form1.hash1.value = hashh

function setWithExpiry(key, value, ttl) {
  const now = new Date()

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  }

  localStorage.setItem(key, JSON.stringify(item))
}

function setButtonSubmitProperties() {
  btn1.style.opacity = "0.7"
  btn1.textContent = "Отправка заявки"
  btn1.disabled = true

  setTimeout(() => {
    btn1.style.opacity = "1"
    btn1.textContent = "Отправить заявку"
    btn1.disabled = false
  }, 2000)
}

form1.addEventListener("submit", function () {
  // Новый код start
  getPhoneValue(
    "#buy input[name='phone']",
    "#status_value1",
    "phone1",
    "input#phone_value_ish1"
  )
  // Новый код end
  setButtonSubmitProperties()

  let formData = {
    name: name1.value,
    phone: phone1.value,
  }

  setWithExpiry("myKey", formData, 20000)
})

function getPhoneValue(my_input, status_input, phone_input, phone_ish_input) {
  let number_1 = $(my_input).val(),
    numberToComment = number_1,
    phone = document.getElementById(phone_input),
    number
  number = number_1
    .replace(/\s+/g, "")
    .replace(/[\])}[{(]/g, "")
    .replace(/-/g, "")
    .replace(/_/g, "")
  phone.value = number
  $(phone_ish_input).val(numberToComment)
  if (
    (number.substring(0, 3).includes(375) &&
      number.substring(3, 5).includes(29) &&
      number.length == 12) ||
    (number.substring(0, 3).includes(375) &&
      number.substring(3, 5).includes(25) &&
      number.length == 12) ||
    (number.substring(0, 3).includes(375) &&
      number.substring(3, 5).includes(44) &&
      number.length == 12) ||
    (number.substring(0, 3).includes(375) &&
      number.substring(3, 5).includes(33) &&
      number.length == 12) ||
    (number.substring(0, 4).includes("+375") &&
      number.substring(4, 6).includes(29) &&
      number.length == 13) ||
    (number.substring(0, 4).includes("+375") &&
      number.substring(4, 6).includes(25) &&
      number.length == 13) ||
    (number.substring(0, 4).includes("+375") &&
      number.substring(4, 6).includes(44) &&
      number.length == 13) ||
    (number.substring(0, 4).includes("+375") &&
      number.substring(4, 6).includes(33) &&
      number.length == 13) ||
    ((number.substring(0, 4).includes(8029) ||
      number.substring(0, 4).includes("8029")) &&
      number.length == 11) ||
    ((number.substring(0, 4).includes(8025) ||
      number.substring(0, 4).includes("8025")) &&
      number.length == 11) ||
    ((number.substring(0, 4).includes(8044) ||
      number.substring(0, 4).includes("8044")) &&
      number.length == 11) ||
    ((number.substring(0, 4).includes(8033) ||
      number.substring(0, 4).includes("8033")) &&
      number.length == 11)
  ) {
    $(status_input).val("correct_phone")
  }

  if (
    ((number.substring(0, 2).includes(29) ||
      number.substring(0, 2).includes("29")) &&
      number.length == 9) ||
    ((number.substring(0, 2).includes(25) ||
      number.substring(0, 2).includes("25")) &&
      number.length == 9) ||
    ((number.substring(0, 2).includes(44) ||
      number.substring(0, 2).includes("44")) &&
      number.length == 9) ||
    ((number.substring(0, 2).includes(33) ||
      number.substring(0, 2).includes("33")) &&
      number.length == 9)
  ) {
    phone.value = `${"+375" + number}`
    $(status_input).val("correct_phone")
  }
}
