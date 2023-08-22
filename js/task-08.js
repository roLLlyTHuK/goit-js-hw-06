const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, event => {
    
    event.preventDefault();
    const {
        elements: { email, password } } = event.currentTarget;
        if (email.value === "" || password.value === "") {
            alert("Усі поля повинні бути заповненими!");
            return;
        }
        // console.log(`Email: ${email.value}, Password: ${password.value}`);
        
    //! Передаємо значення в об'єкт data
        const data = {
            email: email.value,
            password: password.value
        };
        
        console.log(data);
    
        event.currentTarget.reset();
});
    