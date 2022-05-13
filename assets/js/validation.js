function frmValidate5(form) {
	// console.log(form);
    let isValid = true
	
	let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    var email = form.querySelector('input[name="email"]')
    var password = form.querySelector('input[name="password"]')
    var password2 = form.querySelector('input[name="password2"]')
    var firstName = form.querySelector('input[name="firstName"]')
    var lastName = form.querySelector('input[name="lastName"]')
    var phone = form.querySelector('input[name="phone"]')
    var content = form.querySelector('input[name="content"]')

	if (email && emailReg.test(email.value) == false) {
        email.parentElement.querySelector('small').textContent = 'Email không hợp lệ!'
		isValid = false
        } 

	if (password && password.value < 8) {
        password.parentElement.querySelector('small').textContent = 'Mật khẩu không hợp lệ!'
		isValid = false
        } 

	if (password2 && password2.value < 8) {
        password2.parentElement.querySelector('small').textContent = 'Nhập lại mật khẩu không hợp lệ!'
		isValid = false
        } 

    if (password2 && password && password2.value != password.value) {
        password2.parentElement.querySelector('small').textContent = 'Nhập lại mật khẩu không trùng khớp mật khẩu!'
		isValid = false
        } 

	if (firstName && firstName.value < 2) {
        firstName.parentElement.querySelector('small').textContent = 'Họ không hợp lệ!'
		isValid = false
        } 

    if (lastName && lastName.value < 2) {
        lastName.parentElement.querySelector('small').textContent = 'Tên không hợp lệ!'
		isValid = false
        } 

    if (phone && phone.value < 10) {
        phone.parentElement.querySelector('small').textContent = 'Số điện thoại không hợp lệ!'
        isValid = false
        } 

	if (content && content.value < 10) {
        content.parentElement.querySelector('small').textContent = 'Nội dung quá ngắn(<10)!'
		isValid = false
        } 

	return isValid;
}