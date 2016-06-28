import $ from 'jquery'

var person = $('.container')

var data = $.ajax({
  url: 'http://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data){
  return data;
  }
})

data.then(function(users){
  return formatter(users)
});

var formatter = function(users) {
  var users = users.results.map(function(user){
    return {
      profile_pic: user.picture.large,
      name: `${user.name.title} ${user.name.first} ${user.name.last}`,
      email: user.email,
      city: user.location.city,
      postcode: user.location.postcode,
      state: user.location.state,
      street: user.location.street,
      phone: user.phone,
      ss_num: user.id.value
    }
  });
  return profileGenerator(users)
}

var profileGenerator = function(users) {
  users.forEach(function(user){
    var html = `
        <div class="profile">
          <img class="profile-pic" src="${user.profile_pic}">
          <h5 class="user-name">${user.name.toUpperCase()}</h5>
          <p class="email">${user.email.toUpperCase()}</p>
          <p class="address">${user.street.toUpperCase()}<br>${user.city.toUpperCase()}, ${user.state.toUpperCase()} ${user.postcode}</p>
          <p class="phone">${user.phone}</p>
        `

        if (user.ss_num != undefined){
          html += `<p class="social">${user.ss_num}</p>`
        } else {
          html += `</div>`
        }
    person.append(html)
  })
}