#### w4d2 - Practice with APIs - Populate User Profiles

[Surge](http://tiy-humdrum-populate-with-apis-hw.surge.sh/)

* Created a new object to store relevant data in.
* ```javascript 
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

* Used conditional to insure no undefinned returns.

* ```javascript
    if (user.ss_num != undefined){
      html += `<p class="social">${user.ss_num}</p>`
    } else {
      html += `</div>`
     }