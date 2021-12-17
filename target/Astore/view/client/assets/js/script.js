const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const tilleSign = document.getElementById("tilte-text");
/*sign-in or sign-up*/
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
  document.title = "Đăng ký";
  tilleSign.innerHTML = "Đăng ký";
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
  document.title = "Đăng nhập";
  tilleSign.innerHTML = "Đăng nhập";
});
//chuyển tab
function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}
/*sign-in*/
const formSignIn = document.getElementById("form-sign-in");
const emailSignInLoad = document.getElementById("email-sign-in-load");
const pwdSignInLoad = document.getElementById("password-sign-in-load");
const btnSignInLoad = document.getElementById("sign-in-load");

formSignIn.addEventListener("input", (e) => {
  e.preventDefault();
  checkInputSignInChange();
});
btnSignInLoad.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputSignInClick();
});
function checkInputSignInChange() {
  const valueEmailSignInL = emailSignInLoad.value.trim();
  const valuePwdSignInL = pwdSignInLoad.value.trim();

  if (valueEmailSignInL == "" || valuePwdSignInL == "") {
    setBtnOpacity(btnSignInLoad, false);
    if (valueEmailSignInL == "") {
      setErrorFor(emailSignInLoad, "Vui lòng điền vào mục này.");
    } else {
      setSuccess(emailSignInLoad);
    }
    if (valuePwdSignInL == "") {
      setErrorFor(pwdSignInLoad, "Vui lòng điền vào mục này.");
    } else {
      setSuccess(pwdSignInLoad);
    }
  } else {
    setSuccess(pwdSignInLoad);
    setSuccess(emailSignInLoad);
    setBtnOpacity(btnSignInLoad, true);
  }
}
function checkInputSignInClick() {
  const valueEmailSignInL = emailSignInLoad.value.trim();
  const valuePwdSignInL = pwdSignInLoad.value.trim();
  if (!isEmail(valueEmailSignInL) && !isNumberPhone(valueEmailSignInL)) {
    setErrorFor(emailSignInLoad, "Email hoặc số điện thoại không hợp lệ.");
  } else {
    setSuccess(emailSignInLoad);
    sessionStorage.setItem("icAccount", "block");
    sessionStorage.setItem("linkSignIn", "none");
    window.location.href = "./index.html";
    console.log("valid email or phone number");
    return false;
  }
}

/*sign-up*/
const formSignUp = document.getElementById("form-sign-up");
const emailSignUpLoad = document.getElementById("email-sign-up-load");
const usernameSignUpLoad = document.getElementById("username-sign-up-load");
const pwdSignUpLoad = document.getElementById("password-sign-up-load");
const cfPwdSignUpLoad = document.getElementById("cf-password-sign-up-load");
const btnSignUpLoad = document.getElementById("sign-up-load");

formSignUp.addEventListener("input", (e) => {
  e.preventDefault();
  checkInputSignUp();
});
function checkInputSignUp() {
  const valueEmailSignUpL = emailSignUpLoad.value.trim();
  const valueUserNameSignUpL = usernameSignUpLoad.value.trim();
  const valuePwdSignUpL = pwdSignUpLoad.value.trim();
  const valueCfPwdSignUpL = cfPwdSignUpLoad.value.trim();
  if (
    valueEmailSignUpL == "" ||
    valueUserNameSignUpL == "" ||
    valuePwdSignUpL == "" ||
    valueCfPwdSignUpL == ""
  ) {
    setBtnOpacity(btnSignUpLoad, false);
    if (valueEmailSignUpL == "") {
      setErrorFor(emailSignUpLoad, "Vui lòng điền vào mục này.");
    } else {
      setSuccess(emailSignUpLoad);
    }
    if (valueUserNameSignUpL == "") {
      setErrorFor(usernameSignUpLoad, "Vui lòng điền vào mục này.");
    } else {
      setSuccess(usernameSignUpLoad);
    }
    if (valuePwdSignUpL == "") {
      setErrorFor(pwdSignUpLoad, "Vui lòng điền vào mục này.");
    } else {
      setSuccess(pwdSignUpLoad);
    }
    if (valueCfPwdSignUpL == "") {
      setErrorFor(cfPwdSignUpLoad, "Vui lòng điền vào mục này.");
    } else {
      setSuccess(cfPwdSignUpLoad);
    }
  } else {
    setSuccess(emailSignUpLoad);
    setSuccess(usernameSignUpLoad);
    setSuccess(pwdSignUpLoad);
    setSuccess(cfPwdSignUpLoad);
    setBtnOpacity(btnSignUpLoad, true);
  }
}
btnSignUpLoad.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputSignUpClick();
});
function checkInputSignUpClick() {
  const valueEmailSignUpL = emailSignUpLoad.value.trim();
  const valueUserNameSignUpL = usernameSignUpLoad.value.trim();
  const valuePwdSignUpL = pwdSignUpLoad.value.trim();
  const valueCfPwdSignUpL = cfPwdSignUpLoad.value.trim();
  var count = 0;
  if (!isEmail(valueEmailSignUpL) && !isNumberPhone(valueEmailSignUpL)) {
    setErrorFor(emailSignUpLoad, "Email hoặc số điện thoại không hợp lệ.");
  } else {
    count = count + 1;
    setSuccess(emailSignUpLoad);
    console.log("valid email or phone number.");
  }
  if (!isPwd(valuePwdSignUpL)) {
    setErrorFor(
      pwdSignUpLoad,
      "Mật khẩu phải có độ dài từ 8-16 ký tự (bao gồm ít nhất 1 ký tự viết hoa và 1 ký tự viết thường)."
    );
  } else {
    count += 1;
    setSuccess(pwdSignUpLoad);
    console.log("valid password.");
  }
  if (!equalsPwd(valuePwdSignUpL, valueCfPwdSignUpL)) {
    setErrorFor(cfPwdSignUpLoad, "Mật khẩu không hợp lệ.");
  } else {
    count += 1;
    setSuccess(cfPwdSignUpLoad);
    console.log("password correct");
  }
  if (count == 3) {
    console.log("link");
    window.location.href = "./verificationCreate.html";
  }
}

//kiểm tra có phải email
function isEmail(email) {
  var rexgEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return rexgEmail.test(email);
}
// kiểm tra có phải sdt
function isNumberPhone(numberPhone) {
  var rexgNumberPhone = /((09|03|07|08|05)+([0-9]{8,9})\b)/g;
  return rexgNumberPhone.test(numberPhone);
}
//kiểm tra password
function isPwd(password) {
  var rexgPwd =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
  return rexgPwd.test(password);
}
//kiểm tra value khi sai
function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  formGroup.className = "form-group error";
  small.innerText = message;
}
// kiểm tra value khi đúng
function setSuccess(input) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  formGroup.className = "form-group success";
  small.innerText = "";
}
//set hiển thị cuar button
function setBtnOpacity(button, boolean) {
  if (boolean) {
    button.className = "btn-form-sign success";
    button.disabled = false;
    button.style.cursor = "pointer";
  } else {
    button.className = "btn-form-sign error";
    button.disabled = true;
    button.style.cursor = "not-allowed";
  }
}
function equalsPwd(pwd, cfPwd) {
  return pwd === cfPwd;
}
