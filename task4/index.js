document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                li.addEventListener('click', () => showUserDetails(user));
                userList.appendChild(li);
            });
        });
});

function showUserDetails(user) {
    document.getElementById('user-list').style.display = 'none';
    const userDetails = document.getElementById('user-details');
    userDetails.style.display = 'block';
    document.getElementById('user-name').textContent = user.name;
    document.getElementById('user-email').textContent = `Email: ${user.email}`;
    document.getElementById('user-phone').textContent = `Телефон: ${user.phone}`;
}

function goBack() {
    document.getElementById('user-details').style.display = 'none';
    document.getElementById('user-list').style.display = 'block';
}
