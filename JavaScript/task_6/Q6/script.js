login()
.then(user => {
    return getProfile(user.id);
    })
.then(profile => {
    return getSettings(profile.id);
})
    .then(settings => {
    console.log(settings);
    })
.catch(error => {
    console.log(error);
    });



  //============================

async function loadUserData() {
try {
    const user = await login();
    const profile = await getProfile(user.id);
    const settings = await getSettings(profile.id);

    console.log(settings);
} catch (error) {
    console.log(error);
}
}

loadUserData();
